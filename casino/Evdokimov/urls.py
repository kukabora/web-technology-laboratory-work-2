from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('FAQ', views.faq),
    path('feedbacks', views.feedbacks),
    path('games', views.games),
    path('login', views.login),
    path('profile', views.profile),
    path('registration', views.registration),
    path('schedule', views.schedule),

]
