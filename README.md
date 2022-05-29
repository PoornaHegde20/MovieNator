# MovieNator: A Movie-Recommender-System
A web-application for user-item Movie Recommendation Engine using Collaborative Filtering By matrix factorizations algorithm.
The recommendation based on the underlying idea that is if two persons have both liked certain common movies, then we can recommend a movie to the user that they haven't watched but the other user liked.    

### Technologies Used

#### Web Technologies
Html , Css , JavaScript , Bootstrap , Django

#### Machine Learning Library In Python3
Numpy , Pandas , Scipy

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

Open terminal/cmd promt

Goto that Path

Example

```
cd ~/Destop/MovieNator
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
