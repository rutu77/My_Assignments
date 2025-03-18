const fs= require('fs');
const path= require('path');

function createFile(filename,content){
    const filePath= path.join(__dirname,filename);
    const buffer= Buffer.from(content);
    fs.writeFile(filePath,buffer,(err)=>{
        if(err) throw err;
        console.log('File created successfully.');
    });
}

function writeFile(filename, content){
    const filePath=path.join(__dirname, filename);
    const buffer= Buffer.from(content);
    fs.writeFile(filePath,buffer,(err)=>{
        if (err) throw err;
        console.log('File data written successfully.');
    });
}

function readFile(filename){
    const filePath= path.join(__dirname,filename);
    console.log('Reading file in 3 seconds...');
    setTimeout(()=>{
        fs.readFile(filePath,(err,data)=>{
            if(err) throw err;
            const buffer = Buffer.from(data);
            console.log('File Contents:', buffer.toString());
        });
    }, 3000);
}

function appendFile(filename,content){
    const filePath= path.join(__dirname,filename);
    const buffer= Buffer.from(content);
    fs.appendFile(filePath,buffer,(err)=>{
        if(err) throw err;
        console.log('Data appended successfully.');
    });
}

function deleteFile(filename){
    const filePath= path.join(__dirname,filename);
    fs.unlink(filePath,(err) => {
        if (err) throw err;
        console.log('File deleted successfully.');
    });
}

function logStatus(){
    setInterval(()=>{
        console.log('System status:running...');
    }, 5000);
}

module.exports={
    createFile,
    writeFile,
    readFile,
    appendFile,
    deleteFile,
    logStatus
};