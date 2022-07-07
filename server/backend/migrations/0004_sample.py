# Generated by Django 4.0.4 on 2022-05-12 09:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_patient_otp'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sample',
            fields=[
                ('sampleId', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=10)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient', to='backend.patient')),
            ],
        ),
    ]