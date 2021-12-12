from django.http import JsonResponse
from django.core import serializers
from .models import *
from django.views.decorators.csrf import csrf_exempt


def getUserDataById(request):
    user = User.objects.get(id=request.POST['user_id'])
    serialized_obj = serializers.serialize('json', [user, user.player])
    return JsonResponse(serialized_obj, safe=False)


def deleteUser(request):
    user = User.objects.get(id=request.POST['user_id'])
    user.player.delete()
    user.delete()
    data = {
        "msg": "User has been succesfully deleted"
    }
    return JsonResponse(data=data, safe=False)


def updateBalance(request):
    user = User.objects.get(id=int(request.POST['userId']))
    data = {
        "user": {
            "fname": user.first_name,
            "lname": user.last_name,
            "balance": user.player.balance
        },
        "balanceChange": request.POST['balanceDifference'],
        "newBalance": int(request.user.player.balance) + int(request.POST['balanceDifference'])
    }
    user.player.balance += int(request.POST['balanceDifference'])
    if int(request.POST['balanceDifference']) > 0:
        user.player.win += int(request.POST['balanceDifference'])
    else:
        user.player.lost += int(request.POST['balanceDifference'])
    user.save()
    user.player.save()
    return JsonResponse(data=data, safe=False)
