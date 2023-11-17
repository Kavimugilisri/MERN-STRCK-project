var f1=require ('fs')
f1.unlink('shaik.txt',function(err){
    if(err)throw err
    console.log('file deleted...')
})