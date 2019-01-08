"""
Data that was too unwieldy for views.py.

If Heroku supported Python 3.7, we could put these in DataClasses.
"""
from django.contrib.staticfiles.templatetags.staticfiles import static

GALLERY = ['dancing', 'kitchen', 'bibou', 'engagement', 'one-water', 'deb', 'sexpod']

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
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/40576635_2343442069005052_408757148571402240_o.jpg?_nc_cat=101&_nc_ht=scontent-lga3-1.xx&oh=16517a946e5815561b97988d81a185d5&oe=5C9C0B91',
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
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15032096_10153840577810946_1198070499810869110_n.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=100dbf082c27cab101f08bfde9b5dfc9&oe=5CA55733',
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
