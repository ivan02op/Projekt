const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/knjige', (request, response) => {
return response.send('Popis knjiga');
});
app.post('/getknjiga', (request, response) => {
    return response.send('GET metoda -> Read');
});
app.post('/addknjiga', (request, response) => {
    const data = request.body;
    const naslov= data.naslov;
    const autor= data.autor;
    const god_izdanja= data.god_izdanja;
    const izdavac= data.izdavac;
   
    return response.send('Dodavanje knjige '+naslov+" "+autor+ +god_izdanja+" "+izdavac);
});
app.put('/updateknjiga', (request, response) => {
    const data = request.body;
    console.log(data.knjige);
    return response.send('Ažuriranje knjige '+data.knjige);
});
app.delete('/deleteknjiga', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.knjige);
    return response.send('Brisanje knjige '+data.knjige);
});
app.listen(3001, () => {
console.log("Server running on port 3001");
});