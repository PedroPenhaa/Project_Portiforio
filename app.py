from flask import Flask, render_template, redirect

app = Flask(_name_)

@app.router('/')
def index():
    return render_template('index.html')

if __name__ == '_main':
    app.run()