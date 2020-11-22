
from app import app
from flask import session,render_template



app.secret_key="13092000"



@app.route('/')
def method_name():
   return "WRONG PAGE, GO TO /Question.html to see the question"
@app.route('/home')
def secret():
    return render_template('home.html')


@app.route('/Question')
def test_cache():
    return render_template('Question.html')
