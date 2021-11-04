from django.shortcuts import render

# Create your views here.


def faq(request):
    return render(request, 'Evdokimov/FAQ.html')


def feedbacks(request):
    return render(request, 'Evdokimov/feedbacks.html')


def games(request):
    return render(request, 'Evdokimov/games.html')


def login(request):
    return render(request, 'Evdokimov/login.html')


def profile(request):
    return render(request, 'Evdokimov/profile.html')


def registration(request):
    return render(request, 'Evdokimov/registration.html')


def schedule(request):
    return render(request, 'Evdokimov/schedule.html')


def index(request):
    return render(request, 'Evdokimov/index.html')
