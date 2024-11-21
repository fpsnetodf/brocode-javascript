from django.urls import path
from . import views
urlpatterns = [
    path('', views.GeraSenha, name="geraSenha"),
]
