const express = require('express');
const Datastore = require('nedb');
const ejs = require('ejs');  // Add this line

const app = express();
app.set('view engine', 'ejs');
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  const fatherPhone = req.body.fatherPhone;
const motherPhone = req.body.motherPhone;
client.messages
  .create({
     body: 'Thank you for your application to study at Bilal Ibnu Rabah!',
     from: '+18125589194',  // Your Twilio phone number
     to: fatherPhone,      // Father's phone number
   })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));

// Send SMS to Mother's phone
client.messages
  .create({
     body: 'Thank you for your application to study at Bilal Ibnu Rabah!!',
     from: '+18125589194',  // Your Twilio phone number
     to: motherPhone,      // Mother's phone number
   })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
});
app.get('/view-data', (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('view-data', { data });
  });
});
