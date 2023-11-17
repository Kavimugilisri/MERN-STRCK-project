var fs=require('fs')
fs.writeFile('mynewfile.txt','welcome',function(err){
    if(err)throw err;
    console.log('saved!!')
})
