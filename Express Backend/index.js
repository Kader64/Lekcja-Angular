const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Przykład zapisu danych na serwerze
let firstName, lastName, email, password;

app.post('/user', (req, res) => {
  
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  email = req.body.email;
  password = req.body.password;

  // TUTAJ ZAPIS DO BAZY DANYCH

  res.status(200).end();
});

app.get('/user', (req, res)=>{
  const userData = {
    firstName,
    lastName,
    email,
    password
  };
  res.status(200).json(userData);
})

app.delete('/user',(req, res)=>{
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  res.status(200).end();
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
