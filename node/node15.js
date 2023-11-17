var f1=require('fs')
f1.writeFile('shaik.txt','welcome',function(err){
    if(err)throw err;
    console.log('saved...')
})