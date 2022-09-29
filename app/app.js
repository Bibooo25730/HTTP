let express = require('express');
let app = express();
var router = require('./module/router');
app.use('/api',router);

app.get('/',function(req,res){
    res.send('hello,word')
})
app.listen(3000)
