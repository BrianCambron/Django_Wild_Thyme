from django.urls import path

from .views import menuitemListAPIView, menuitemDetailAPIView

app_name = 'menuitems'

urlpatterns = [
    path('<int:pk>/', menuitemDetailAPIView.as_view(), name='menuitem_detail'),
    path('', menuitemListAPIView.as_view(), name='menuitem_list'),
]
