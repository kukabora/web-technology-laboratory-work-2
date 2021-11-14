from django.urls import path
from . import views
from . import api

api_urlpatterns = [
    path("api/updateBalance", api.updateBalance),
]

urlpatterns = [
    path('', views.index, name="main"),
    path('FAQ', views.faq),
    path('feedbacks', views.feedbacks),
    path('games', views.games),
    path('login', views.logging_in),
    path('profile', views.profile, name="profile"),
    path('registration', views.registration),
    path('schedule', views.schedule),
    path('logout', views.logging_out)
]

urlpatterns += api_urlpatterns
