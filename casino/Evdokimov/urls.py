from django.urls import path
from . import views
from . import api

api_urlpatterns = [
    path("api/updateBalance", api.updateBalance),
    path("api/deleteUser", api.deleteUser),
    path("api/getUserById", api.getUserDataById),
    path("api/updateUser", api.updateUser),
    path("api/createUser", api.createUser),
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
    path('logout', views.logging_out),
    path('addPlayerImage', views.addPlayerImage),
    path('payment', views.payment),
    path('admin/', views.admin),
    path('location', views.location)
]

urlpatterns += api_urlpatterns
