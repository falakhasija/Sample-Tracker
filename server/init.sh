#!/bin/bash

#django
export PYTHONPATH=/code:${PYTHONPATH}
python manage.py makemigrations
python manage.py migrate
echo "yes" | python manage.py collectstatic
python manage.py ensure_adminuser --username='admin' \
    --email=admin@example.com \
    --password=12345678
#echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', '${ADMIN_PASSWORD}')" | python manage.py shell

python manage.py runserver 0.0.0.0:$PORT

