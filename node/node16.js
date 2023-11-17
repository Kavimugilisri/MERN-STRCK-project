var f1=require('fs')
f1.rename('shaik.txt','kavi.txt',function(err){
    if(err)throw err;
    console.log('renamed...')
})