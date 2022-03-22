import { Router, Request, Response } from "express";


const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
                  <input required class="input" placeholder="Email" name="email" />
                </div>

                <div class='field'>
                  <label class='label'>Password</label>
                  <input required class="input" placeholder="Password" name="password" type='password' />
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

router.post('/login', (req: Request, res: Response) => {
  const { email, passsword } = req.body;

  console.log(email, passsword);
})

export { router };