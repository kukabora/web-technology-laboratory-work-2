from django.urls import path
from .views import testPage

urlpatterns = [
    path('', testPage),
]
