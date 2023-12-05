import re
from django import forms
from django_json_widget.widgets import JSONEditorWidget                                                            
from .models import CustomUser, Works
from django.core.exceptions import ValidationError

class WorksForm(forms.ModelForm):
    class Meta:
        model = Works
        exclude = ["author", "author_last_update"]
        fields = ('contents_style','contents_script','contents',)

    def clean_title(self):
        title = self.cleaned_data['title']
        if re.match(r'\d', title):
            raise ValidationError("начинается с цифры")
        return title




