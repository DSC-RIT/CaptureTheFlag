
from app import app
from flask import session,render_template



app.secret_key="13092000"



@app.route('/')
@app.route('/home')
def secret():
    return render_template('home.html')


@app.route('/Question')
def test_cache():
    return render_template('Question.html')
