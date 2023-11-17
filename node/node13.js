var f1=require('fs')
f1.writeFile('kavi.txt','Welcome',function(err){
    if(err)throw err;
    console.log('saved!!')
})