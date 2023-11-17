var fs=require('fs')
fs.writeFile('mynewfile2.txt','Welcome',function(err){
    if(err)throw err;
    console.log('saved!!!')
})