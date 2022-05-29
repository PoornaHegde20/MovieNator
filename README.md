# MovieNator: A Movie-Recommender
MovieNator is a web-application for Movie Recommendations using Collaborative Filtering by the matrix factorizations algorithm.
The recommendation is based on the underlying idea that is if two persons have both liked certain common movies, then we can recommend a movie to the user that they haven't watched but the other user liked.
  The model basically stores the ratings of the users in a matrix for every movie. Now for every recommendation, the model tries to search for a similar user in the database, who had given similar ratings as our current user. After this, any movies rated well by the newly found user is recommended to the current user. 

##### Setup to run

Clone the repository on your PC, or download the ZIP file. Open the folder MovieNator in a terminal.

```
cd ~/MovieNator
```
Create a new virtual environment.

```
virtualenv .
```

Activate Your Virtual Environment

for Linux
```
source bin/activate
```
for Windows
```
virtualenv\scripts\activate

```
Installing requirements:

```
pip install -r requirements.txt
pip install scipy
```

### Creating Local Server

Go to code directory, example

```
cd ../MovieNator/code
```
How to run the web-app in your localhost:
```
python manage.py runserver
```
Now open your browser and go to this address
```
http://127.0.0.1:8000
```
