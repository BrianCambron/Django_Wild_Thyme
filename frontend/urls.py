from django.urls import path, include

from . import views #This is importing everything from views

app_name = 'frontend'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
