from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login
from django.http import HttpResponseRedirect
# Create your views here.


@login_required()
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def sign_up(request):
    print('!!!')
    context = {}
    form = UserCreationForm(request.POST or None)
    if request.method == "POST":
        if form.is_valid():
            user = form.save()
            login(request, user)
            return HttpResponseRedirect("/")

    context['signup_form'] = form
    print('here')
    context['login_form'] = AuthenticationForm()

    return render(request, 'registration/sign_up.html', context)