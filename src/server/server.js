const express = require('express');


const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`);
})

app.get('/api/users', (req, res) => {
  

  res.json({result: true, data: [{
    'users': 'Daniel'
  , 'nome': 'Nayara'    
  }
]} )

  
});