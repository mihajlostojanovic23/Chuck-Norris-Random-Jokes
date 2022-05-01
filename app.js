const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use('/img',express.static(__dirname + '/public/img'));
app.use('/js',express.static(__dirname + '/public/js'));
app.use('/css',express.static(__dirname + '/public/css'));

app.get('/', (req,res) => {
    res.render('index')
})


app.listen(port, () => {
console.log('Listening on port:', port )
})