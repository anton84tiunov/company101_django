from django import forms
from django_json_widget.widgets import JSONEditorWidget                                                            
from .models import Contacts


class ContactsForm(forms.ModelForm):
    class Meta:
        model = Contacts
        exclude = ["author", "author_last_update"]
        fields = ('description',)

