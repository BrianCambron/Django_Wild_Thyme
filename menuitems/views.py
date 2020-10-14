from rest_framework import generics


from .models import menuitem
from .serializers import menuitemSerializer



class menuitemListAPIView(generics.ListAPIView):
    queryset = menuitem.objects.all()
    serializer_class = menuitemSerializer




class menuitemDetailAPIView(generics.RetrieveAPIView):
    queryset = menuitem.objects.all()
    serializer_class = menuitemSerializer
