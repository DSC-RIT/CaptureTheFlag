from flask import *
app =Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route("/")
def index():
    resp = make_response(render_template('index.html'))
    resp.set_cookie('key', "antonio_")
    return resp

if __name__=="__main__":
    app.run(debug=True,threaded=False)