let express = require('express');
let router = express.Router();
let fs = require('fs');

// 特定于此路由器的中间件
router.use(function timeLog (req, res, next) { 
    console.log('Requested URI Path : ', req.url) 
    next() 
 }) 


router.get('/tes', function  (req, res) { 
    console.log(1)
     fs.readFile('../app/fs/a.txt',(err,data)=>{
        if(err){
            return console.error(err)
        }
        console.log(data)
        res.append('Cache-Control', 'max-age=10');
        res.send(data)
        
     })
})  

module.exports = router;