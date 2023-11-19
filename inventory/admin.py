from django.contrib import admin
from .models import inventory

# Register your models here.
class InventoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'calib_now', 'calib_next')
    # list_filter = ('name', 'calib_now', 'calib_next')

admin.site.register(inventory, InventoryAdmin)