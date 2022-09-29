let express = require('express');
let router = express.Router();
let fs = require('fs');

// 特定于此路由器的中间件
router.use(function timeLog (req, res, next) { 
    console.log('Requested URI Path : ', req.url) 
    next() 
 }) 


router.get('/test', function  (req, res) { 
   let ifmodifiedsince =  req.headers['if-modified-since'];
     fs.stat('../app/fs/a.txt',(err,data)=>{
        if(err){
            return console.error(err)
        }
        
        // ifmodifiedsince 
        console.log(ifmodifiedsince)
        if(ifmodifiedsince === data.mtime.toGMTString()){
            res.status(304);

        }
      // 最后保存的时间
        console.log(data.mtime.toGMTString())
        res.append('Last-Modified',data.mtime.toGMTString());
    
        res.send(data)
     })
})  

module.exports = router;
