//importo express
const express = require('express');

//inizializzazione nella variabile app un' istanza di express
const app= express();

//definizione della porta
const port = 3000;

//permetto l' utilizzo degli asset statici

// definizione della rotta base
app.get('/', (req, res) => {
  res.send("Benvenuti nel blog");
})

// diciamo al server di rimanere in ascolto
app.listen(port,() => {
  console.log(`Server del blog in ascolto sulla porta ${port}`);
})