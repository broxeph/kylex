from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render
from django.views import View

from .forms import ContactForm


class Home(View):
    def get(self, request):
        return render(request, 'home.html')

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            send_mail(
                subject="Spam from your dumb wedding guests",
                message=form.cleaned_data['comments'],
                from_email=settings.FROM_EMAIL,
                recipient_list=[settings.TO_EMAIL],
            )

        return render(request, 'home.html')
