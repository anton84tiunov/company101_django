from django.shortcuts import render

from contacts.models import Contacts

def index(request):
    contacts = Contacts.objects.all()
    return render(request, 'contacts/contacts.html', {"contacts": contacts})
