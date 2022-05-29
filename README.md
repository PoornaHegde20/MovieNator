# MovieNator: A Movie-Recommender
A web-application for user-item Movie Recommendation Engine using Collaborative Filtering by the matrix factorizations algorithm.
The recommendation is based on the underlying idea that is if two persons have both liked certain common movies, then we can recommend a movie to the user that they haven't watched but the other user liked.
  The model basically stores the ratings of the users in a matrix for every movie. Now for every recommendation, the model tries to search for a similar user in the database, who had given similar ratings as out current user. After this, any movies rated well by the newly found user is recommended to the current user. 

### Technologies Used

#### Web Technologies
HTML, CSS, JavaScript, Bootstrap, Django

#### Machine Learning Library In Python3
Numpy, Pandas, Scipy

#### Database
SQLite

##### Requirements
```
python 3.6

pip3

virtualenv
```
##### Setup to run

Extract zip file in your computer

Open terminal/command prompt

Go to that Path. Eg:

```
cd ~/MovieNator
```
Create a new virtual environment on that directory

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
py -3 -m venv .venv
.venv\scripts\activate

```
To install Dependencies

```
pip install -r requirements.txt
pip install scipy
```

### Creating Local Server

Goto code directory, example

```
cd ../MovieNator/code
```
To run
```
python manage.py runserver
```
Now open your browser and go to this address
```
http://127.0.0.1:8000
```
