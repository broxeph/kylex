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
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/43567979_10214687533674823_5410537132185878528_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=f3df2586096de9b948bbe7722c7c9b57&oe=5C8F1C84',
        'title': 'Bridesmaid',
        'story': '',
    },
    {
        'name': 'Lauren Ball',
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/27500398_1863915210345197_3134240069504316129_o.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=c99b30f6f24cb135b1ebd1d336b58ef6&oe=5CAD62FB',
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
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/28059052_10213733029854860_8151471974392820739_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=b74e3c6b1c9d4152e30f747efd90dd8b&oe=5C9586A5',
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
        'img': 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/34881920_10156508335812082_7825779516843753472_n.jpg?_nc_cat=105&_nc_ht=scontent-lga3-1.xx&oh=41f83036cb85186e97aaafa0f9150182&oe=5CA5C3CF',
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
