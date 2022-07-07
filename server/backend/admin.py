from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *

class MemberAdmin(UserAdmin):
    fieldsets=(
        *UserAdmin.fieldsets,
        (
            'Member Type',
            {
                'fields':(
                    'is_lab','is_clinic'
                ),
            },
        ),
    )


admin.site.register(Member,MemberAdmin)
admin.site.register(Clinic)
admin.site.register(Lab)
admin.site.register(Patient)
admin.site.register(Sample)
