from django.urls import path

from . import views

app_name = 'limits'

urlpatterns = [
    path("", views.index, name="index"),
    path('process_form/', views.process_form, name='process_form'),
]