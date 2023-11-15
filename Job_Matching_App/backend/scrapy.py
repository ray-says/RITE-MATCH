import os
import django
import pandas as pd
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from jobs.models import JobPosting


def import_job_data(csv_file_path):
    data = pd.read_csv(csv_file_path)
    for index, row in data.iterrows():
        try:
            posted_date = datetime.strptime(row['date_posted'], '%Y-%m-%d').date() if not pd.isna(
                row['date_posted']) else None
        except ValueError:
            posted_date = None
        JobPosting.objects.create(
            jobUrl=row['job_url'],
            site=row['site'],
            title=row['title'],
            company=row['company'],
            location=row['location']
        )


csv_file_path = 'jobs.csv'
import_job_data(csv_file_path)
