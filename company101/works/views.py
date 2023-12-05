from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.utils import timezone
from .models import Works

def index(request):
    works = Works.objects.all()
    return render(request, 'works/works.html', {'works': works})

def works(request, works_id):
    works = Works.objects.get(pk=works_id)

    return render(request, 'works/work.html', {'works': works})
