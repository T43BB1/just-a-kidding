import os
from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder="templates")

GAMES = [
    {"number": "01", "title": "Catch Me", "description": "버튼을 눌러보세요. 그냥 누르면 됩니다.", "url": "/catch-me"},
    {"number": "02", "title": "Infinite Choice", "description": "선택하세요. 끝이 있을 수도 있습니다.", "url": "/infinite-choice"},
    {"number": "03", "title": "Almost Done", "description": "거의 다 됐습니다. 아마도요.", "url": "/almost-done"},
    {"number": "04", "title": "Delayed Keyboard", "description": "입력이 조금 느립니다. 조금요.", "url": "/delayed-keyboard"},
    {"number": "05", "title": "Chaos Note", "description": "메모를 저장해보세요. 믿지는 마세요.", "url": "/chaos-note"},
]


@app.route("/")
def index():
    return render_template("index.html", games=GAMES)


@app.route("/catch-me")
def catch_me():
    return render_template("games/catch_me.html", title="Catch Me", script_file="games/catch_me.js")


@app.route("/infinite-choice")
def infinite_choice():
    return render_template("games/infinite_choice.html", title="Infinite Choice", script_file="games/infinite_choice.js")


@app.route("/almost-done")
def almost_done():
    return render_template("games/almost_done.html", title="Almost Done", script_file="games/almost_done.js")


@app.route("/delayed-keyboard")
def delayed_keyboard():
    return render_template("games/delayed_keyboard.html", title="Delayed Keyboard", script_file="games/delayed_keyboard.js")


@app.route("/chaos-note")
def chaos_note():
    return render_template("games/chaos_note.html", title="Chaos Note", script_file="games/chaos_note.js")


if __name__ == "__main__":
    app.run(debug=True)
