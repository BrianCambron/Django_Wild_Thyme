from django.urls import path

from .views import menuitemListAPIView


urlpatterns = [
    path('', menuitemListAPIView.as_view(), name='menuitems'),
]
