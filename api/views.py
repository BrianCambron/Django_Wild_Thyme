from django.shortcuts import render


from rest_framework import generics


from menuitems.models import menuitem
from .serializers import menuitemSerializer


class menuitemListAPIView(generics.ListAPIView):
    queryset = menuitem.objects.all()
    serializer_class = menuitemSerializer
