const express = require('express');
const path = require('path')


const app = express();
const PORT = 3000;

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './public')))

app.get("/", (req,res) =>{
  res.render('pages/index.ejs')
})

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
} )
