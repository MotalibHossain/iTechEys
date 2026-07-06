# Python image
FROM python:3.11-slim


# working directory
WORKDIR /app


# copy requirements
COPY requirements.txt .


# install packages
RUN pip install --no-cache-dir -r requirements.txt


# copy project
COPY . .


# expose django port
EXPOSE 8000


# run server
CMD ["python","manage.py","runserver","0.0.0.0:8000"]