"""
Data that was too unwieldy for views.py.

If Heroku supported Python 3.7, we could put these in DataClasses.
"""
from django.contrib.staticfiles.templatetags.staticfiles import static

GALLERY = ['dancing', 'kitchen', 'walking', 'engagement', 'one-water', 'deb', 'sexpod']

BRIDESMAIDS = [
    {
        'name': 'Ali McCulla',
        'img': static('img/ali.jpg'),
        'title': 'Maid of Honor',
        'story': '',
    },
    {
        'name': 'Ellen Boyer Pokorny',
        'img': static('img/ellen.jpg'),
        'title': 'Bridesmaid',
        'story': '',
    },
    {
        'name': 'Emily Maple',
        'img': static('img/emily.jpg'),
        'title': 'Bridesmaid',
        'story': '',
    },
    {
        'name': 'Lauren Ball',
        'img': static('img/lauren.jpg'),
        'title': 'Bridesmaid',
        'story': '',
    },
    {
        'name': 'Lindsay Cutsler',
        'img': static('img/lindsay.jpg'),
        'title': 'Bridesmaid',
        'story': '',
    },
]

GROOMSMEN = [
    {
        'name': 'Justin Ball',
        'img': static('img/justin.jpg'),
        'title': 'Best Man',
        'story': '',
    },
    {
        'name': 'Ben Glenn',
        'img': static('img/ben.jpg'),
        'title': 'Groomsman',
        'story': '',
    },
    {
        'name': 'Frankie Maple',
        'img': static('img/frankie.jpg'),
        'title': 'Groomsman',
        'story': '',
    },
    {
        'name': 'Kyle Cullison',
        'img': static('img/kyle.jpg'),
        'title': 'Groomsman',
        'story': '',
    },
    {
        'name': 'Michael Pokorny',
        'img': static('img/mick.jpg'),
        'title': 'Groomsman',
        'story': '',
    },
]
