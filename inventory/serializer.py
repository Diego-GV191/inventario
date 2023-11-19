from rest_framework import serializers
from .models import inventory

class inventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory
        # fields = ('name', 'calib_now', 'calib_next', etc...)
        fields = '__all__'