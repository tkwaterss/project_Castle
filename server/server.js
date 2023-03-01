const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());

//secifically used to serve up static files (images in this case)
app.use(express.static('public'))

// app.get('/hello', (req,res) => {
//     res.status(200).send('hello world')
// })
//just hit http://localhost:4000/hello

//path is allowing us to join two differenct paths
//MUST serve up html, others can be done using express.static(filepath)
app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

//These bring in the CSS and JS that are being used
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})
app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
})

//Next making our server understand directory paths inside our folder (for getting images)




//our current servver file location
// console.log(__dirname + '../public/index.html')

app.listen(4000, console.log('App running on 4000'));