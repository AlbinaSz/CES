# CES login screen

A simple, responsive login screen written in HTML, CSS, and JavaScript, using the Bootstrap 5.3.3 theme.
Bootstrap CSS is included locally, so the screen also works offline.

## Run

Open `index.html` in your browser. No installation is needed.

Alternatively, from this directory, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Files

- `index.html`: the page content and form.
- `style.css`: small layout adjustments.
- `vendor/bootstrap.min.css`: Bootstrap 5.3.3 CSS (MIT license, included in its header).
- `script.js`: the message shown when the form is submitted.

Both fields are required. This is a screen prototype: it does not authenticate accounts, send passwords, or store them. A backend is needed for real sign-in.
