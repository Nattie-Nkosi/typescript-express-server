"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <!DOCTYPE html>
      <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Typescript | Login </title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>

      <body class='admin'>
        <header>
          <nav class="navbar navbar-bottom is-light">
            <div class="container navbar-container">
              <div>
                <a href="/admin/products">
                  <h3 class="title">Typescript Express</h3>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div class="container">
          <div class="columns is-centered">
            <div class"columns is-one-quarter">
              <form method="POST" style="padding-top: 20px">
                <h1 class='title'>Login</h1>
                <div class='field'>
                  <label class='label'>Email</label>
                  <input class="input" placeholder="Email" name="email" required/>
                </div>

                <div class='field'>
                  <label class='label'>Password</label>
                  <input type='password' class="input" placeholder="Password" name="password" required/>
                </div>
                <button class='button is-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>  
      </body>
      </html>
    
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'test@test.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Typescript | Login </title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
      <link href="/css/main.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    </head>

    <body class='admin'>
      <header>
        <nav class="navbar navbar-bottom is-light">
          <div class="container navbar-container">
            <div>
              <a href="/login">
                <h3 class="title">Typescript Express</h3>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div class="container">
        <h1 class='title'>You are Logged In</h1>
        <a class='button is-primary' href='/logout'>
          <h3>Logout</h3>
        </a>
      </div>

    </body>
    </html>
    `);
    }
    else {
        res.send(`
    <!DOCTYPE html>
      <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Typescript | Login </title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>

      <body class='admin'>
        <header>
          <nav class="navbar navbar-bottom is-light">
            <div class="container navbar-container">
              <div>
                <a href="/login">
                  <h3 class="title">Typescript Express</h3>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div class="container">
          <h1 class='title'>You are not LoggedIn</h1>
          <a class='button is-primary' href='/login'>
            <h3>Login</h3>
          </a>
        </div>

      </body>
    </html>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAth, (req, res) => {
    res.send(`
  <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Typescript | Protected Route </title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
      <link href="/css/main.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    </head>

    <body class='admin'>
      <header>
        <nav class="navbar navbar-bottom is-light">
          <div class="container navbar-container">
            <div>
              <a href="/login">
                <h3 class="title">Protected Route</h3>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div class="container">
        <h1 class='title'>Welcome to protected route, logged in user</h1>
      </div>

    </body>
  </html>
  `);
});
