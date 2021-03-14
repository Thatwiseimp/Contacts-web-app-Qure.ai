from django.urls import path, include
from . import views
from rest_framework import routers
# from .views import PeopleViewSet

router = routers.DefaultRouter()
# router.register(r'people', views.PeopleViewSet, basename='PeopleViewSet')

urlpatterns =[
    path('upload/', views.upload, name='upload'),
    # path('add/',views.AddPeopleView),
    path('people/',include(router.urls)),
    path('', views.index, name='index')
]
