from django.shortcuts import render
from rest_framework import viewsets
from .serializer import inventorySerializer
from .models import inventory

# Create your views here.
class inventoryView(viewsets.ModelViewSet):
    serializer_class = inventorySerializer
    queryset = inventory.objects.all()
    