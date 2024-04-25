You can see the endpoints when you start the application

The swagger api documentation is added to this application

Choice 1:

Install docker and start the docker then

open the folder and type

'''bash
docker-compose build
'''

then 

'''bash
docker-compose up
'''

The application will be running on localhost:8000 port in your web browser


Choice 2:

Open the folder

'''bash
cd env/Scripts
'''

'''bash
./activate
'''

'''bash
cd ../..
'''

'''bash
pip install -r "requirements.txt"
'''

'''bash
python manage.py makemigrations
'''

'''bash
python manage.py migrate
'''

'''bash
python manage.py runserver
'''

The application will be running on 127.0.0.1:8000 in your web browser


next time you try to run this application no need of all this just activate the environment

'''bash
cd env/Scripts
'''

'''bash
./activate
'''

'''bash
cd ../..
'''

then

'''bash
python manage.py runserver
'''

The application will be running on 127.0.0.1:8000 in your web browser