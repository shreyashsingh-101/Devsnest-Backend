var fs = require('fs');
const { argv } = require('process');


// fs.mkdir('day_1',()=>{});

// fs.writeFile('day_1/hello.txt', 'Hello',()=>{});

// fs.appendFile('day_1/hello.txt', ' World',()=>{});

// const data = fs.readFile('day_1/hello.txt', 'utf-8',()=>{});

// fs.rename('day_1/hello.txt','day_1/hello2.txt',()=>{});

// fs.unlink('day_1/hello2.txt',()=>{});

// fs.rmdir('day_1',()=>{});





if(argv[2] == '--create-folder'){
    if(argv[3])
        fs.mkdir(`${argv[3]}`,()=>{});
    else
        console.error('Enter Valid Name');
}

if(argv[2] == '--delete-folder'){
    if(argv[3])
        fs.rmdir(`${argv[3]}`,()=>{});
    else
        console.error('Enter Valid Name');
}

if(argv[2] == '--read-file'){
    if(argv[3]){
        fs.readFile(`${argv[3]}`, 'utf-8',(err,data)=>{console.log(data);});        
    }
    else
        console.error('Enter Valid Name');
} 

if(argv[2] == '--update-file'){
    if(argv[3]){
        fs.appendFile(`${argv[3]}`, `${argv[4]}`,()=>{})
    }
    else
        console.error('Enter Valid Input');
} 



