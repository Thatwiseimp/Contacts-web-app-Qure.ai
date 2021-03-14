from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', views.index),
    path('home/', views.index),
    path('list/', views.index),
    path('people/', views.index),

]
