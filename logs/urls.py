from django.urls import path, include
from . import views
from rest_framework import routers
# from views 

# from .views import people_list

router = routers.DefaultRouter()
# router.register(r'people', views.PeopleViewSet, basename='PeopleViewSet')

urlpatterns =[
    path('upload/', views.upload, name='upload'),
    path('add/call',views.AddPeopleView.as_view()),
    path('add/', views.addform),
    path('people/',include(router.urls)),
    path('signup/', views.signup, name='signup'),
    path('people_list', views.people_list, name="people_list")
]
