import logging

from django.conf import settings
from django.core.mail import EmailMessage
from django.shortcuts import render
from django.views import View

from .forms import ContactForm

logger = logging.getLogger(__name__)


class Home(View):
    def get(self, request):
        return render(request, 'home.html')

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            logger.info(f'Sending email to {settings.EMAIL_HOST_USER}')
            email = EmailMessage(
                subject=f"Wedding spam from {form.cleaned_data['name']}",
                body=form.cleaned_data['comments'],
                from_email=form.cleaned_data['email'],
                to=[settings.EMAIL_HOST_USER],
                reply_to=[form.cleaned_data['email']],
            )
            email.send()
        else:
            logger.info(f'Form invalid. Errors: {form.errors}')

        return render(request, 'home.html')
