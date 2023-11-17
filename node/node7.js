var fs=require('fs')
fs.writeFile('shaik.txt','welcome',function(err){
    if(err)throw err;
    console.log('saved!!!')
})