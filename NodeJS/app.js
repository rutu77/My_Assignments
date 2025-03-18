const fileManager=require('./fileManager');

console.log('Node.js Version:',process.version);
console.log('Platform:',process.platform);
console.log('Process ID:',process.pid);
console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

fileManager.createFile('example.txt', 'Hello, this is a File Management System!');
fileManager.writeFile('example.txt', 'Hello, this is a File Management System!');
fileManager.readFile('example.txt');
fileManager.appendFile('example.txt', '\nAppended data.');
fileManager.logStatus();


setTimeout(() => {
    fileManager.deleteFile('example.txt');
}, 7000);