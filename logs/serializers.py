from rest_framework import serializers
from .models import People

class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ('id', 'name', 'phone_number')

class AddPeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ('name', 'phone_number')