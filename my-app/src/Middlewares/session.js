const session = require('express-session')

//

const sessionMiddleware = session({
  secret: 'le meilleur site de meuble fait par les hackerman', // Remplacez par une clé secrète réelle
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Vous pouvez activer "secure" en production avec HTTPS
});

