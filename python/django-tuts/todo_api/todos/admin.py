from django.contrib import admin

class todoAdmin (admin.ModelAdmin):
    list_display = ['title', 'description', 'completed']
