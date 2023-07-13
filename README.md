# Prime Evils

## Development:
When adding an app as a part of a Django project, it's important to remember to add the app to the 
`INSTALLED_APPS` list in the settings.py file. Otherwise, the app will not be recognized by Django.

### Running the project
command: `python manage.py runserver`

### Creating a new template
command: `python manage.py startapp <app_name>`

### Including a new template in the project
Use the Django template language to include the template. 
`{% include '<app_name>/<template_name>.html' %}`

If the template is not found, and recent changes have been made to the `INSTALLED_APPS` list,
restart the development server.

### Linking CSS / JS files
Use the Django template language to link the files.
```
{% load static %}
<link rel="stylesheet" href="{% static 'css/<name>.css' %}">
<script src="{% static 'js/<name>.js' %}"></script>
```