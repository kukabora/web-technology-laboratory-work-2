from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="main"),
    path('FAQ', views.faq),
    path('feedbacks', views.feedbacks),
    path('games', views.games),
    path('login', views.logging_in),
    path('profile', views.profile, name="profile"),
    path('registration', views.registration),
    path('schedule', views.schedule),

]
