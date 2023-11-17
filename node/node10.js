var f1=require('fs')
f1.unlink('mynewfile2.txt',function(err){
    if(err)throw err;
    console.log('file deleted')
})