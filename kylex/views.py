import logging

from django.conf import settings
from django.core.mail import send_mail
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
            logger.info(f'Sending email to {settings.TO_EMAIL}')
            send_mail(
                subject="Spam from your dumb wedding guests",
                message=form.cleaned_data['comments'],
                from_email=form.cleaned_data['email'],
                recipient_list=[settings.EMAIL_HOST_USER],
            )
        else:
            logger.info(f'Form invalid. Errors: {form.errors}')

        return render(request, 'home.html')
