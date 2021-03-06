import logging

from django.conf import settings
from django.core.mail import EmailMessage
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views import View

from .constants import BRIDESMAIDS, GALLERY, GROOMSMEN
from .forms import ContactForm

logger = logging.getLogger(__name__)


class Home(View):
    context = {
        'bridesmaids': BRIDESMAIDS,
        'groomsmen': GROOMSMEN,
        'gallery': [f"img/{image}.jpg" for image in GALLERY]
    }

    def get(self, request):
        return render(request, 'home.html', self.context)

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            # Send email with contact form message
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

        return HttpResponseRedirect(reverse('home'))
