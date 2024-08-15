from django.shortcuts import render

from rest_framework import generics
from .models import todo
from .serializers import TodoSerializer


# Create your views here.
class ListTodo(generics.ListCreateAPIView):
    queryset = todo.objects.all()
    serializer_class = TodoSerializer

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = todo.objects.all()
    serializer_class = TodoSerializer