from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Create your views here.

class RoomView(generics.CreateAPIView): #generics.CreateAPIView helps to create a view like a form without me writing html and css code
    queryset = Room.objects.all()
    serializer_class = RoomSerializer