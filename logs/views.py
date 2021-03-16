from django.shortcuts import render, redirect
from django.http import HttpResponse,JsonResponse
from datetime import datetime
from django.views import View
from .models import People
import io,csv, os
from rest_framework import generics
from .serializers import PeopleSerializer, AddPeopleSerializer
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.forms import ModelForm

# Create your views here.

# class PeopleViewSet(viewsets.ModelViewSet):
#     serializer_class=PeopleSerializer

#     def get_queryset(self,request):
#         data = People.objects.all()
#         print([[i.name, i.phone_number] for i in data])

#         context = {
#             "persons": [i for i in data]
#         }

#         return render(request, 'index.html', context)



from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import View


def superuser_required():
    def wrapper(wrapped):
        class WrappedClass(UserPassesTestMixin, wrapped):
            def test_func(self):
                return self.request.user.is_superuser

        return WrappedClass
    return wrapper

class AddPeopleView(APIView):
    serializer_class = AddPeopleSerializer

    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            phone_number = serializer.data.get('phone_number')
            queryset = People.objects.filter(phone_number=phone_number)
            if queryset.exists():
                people = queryset[0]
                people.name = name
                people.phone_number = phone_number
                people.save(update_fields=['name', 'phone_number'])
                return Response(PeopleSerializer(people).data, status=status.HTTP_200_OK)
            else:
                people = People(name=name, phone_number=phone_number)
                people.save()
                return Response(PeopleSerializer(people).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


def upload(request):
    print(os.path.dirname(os.path.realpath(__file__)))
    with open(os.path.dirname(os.path.realpath(__file__))+'/employeefile.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                line_count += 1
            else:
                db_row = People(
                    name=row[1],
                    phone_number=row[2]
                )
                db_row.save()
        print(f'Processed {line_count} lines.')

    # contact_name = People.objects.get.all()
    # print(contact_name)

    context = {

    }

    return HttpResponse("uploaded")


def index(request):
    data = People.objects.all()
    print([[i.name, i.phone_number] for i in data])

    context = {
        "persons": [i for i in data]
    }

    return render(request, 'index.html', context)
    # return render(request, 'index.html')


def people_list(request):
    # data = {
    #     "values": [ i for i in People.objects.all()]
    # }
    value = People.objects.all()
    my_serializer = PeopleSerializer(data=value, many=True)
    if my_serializer.is_valid():
        return JsonResponse(my_serializer.data, status=200)
    # return JsonResponse(my_serializer.errors, status=400)
    return JsonResponse(my_serializer.data, safe=False, status=200)


from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/people ')
    else:
        form = UserCreationForm()
    return render(request, 'sign_up.html', {'form': form})


def addform(request):
    return(render(request,'add_person.html',context={}))


# def add(request):
#     if request.method == 'POST':
#         form = Form(request.POST)
#         if form.is_valid():
#             form.save()
#             name = form.cleaned_data.get('name')
#             phone_number = form.cleaned_data.get('phone_number')
#             people = People(name=name, phone_number=phone_number)
#             login(request, user)
#             return redirect('index')
#     else:
#         form = UserCreationForm()
#     return render(request, 'sign_up.html', {'form': form})
