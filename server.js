const express = require('express');
const path = require('path')


const app = express();
const PORT = 3000;

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './public')))

app.get("/", (req,res) =>{
  res.sendFile('/public/index.html',{ root : __dirname})
})

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
} )
