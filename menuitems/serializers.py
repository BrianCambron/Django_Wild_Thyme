from rest_framework import serializers


from .models import menuitem




class menuitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = menuitem
        fields = ('id', 'name', 'description', 'price', 'url')
