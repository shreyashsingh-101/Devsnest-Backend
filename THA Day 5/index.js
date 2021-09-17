var fs = require('fs');
const { argv } = require('process');


// fs.mkdirSync('day_1');

// fs.writeFileSync('day_1/hello.txt', 'Hello');

// fs.appendFileSync('day_1/hello.txt', ' World');

// const data = fs.readFileSync('day_1/hello.txt', 'utf-8');

// fs.renameSync('day_1/hello.txt','day_1/hello2.txt');

// fs.unlinkSync('day_1/hello2.txt');

// fs.rmdirSync('day_1');


// class Test{
//     print(){
//         return "Hello";
//     }
// }


if(argv[2] == '--create-folder'){
    if(argv[3])
        fs.mkdirSync(`${argv[3]}`);
    else
        console.error('Enter Valid Name');
}

if(argv[2] == '--delete-folder'){
    if(argv[3])
        fs.rmdirSync(`${argv[3]}`);
    else
        console.error('Enter Valid Name');
}

if(argv[2] == '--read-file'){
    if(argv[3]){
        const data = fs.readFileSync(`${argv[3]}`, 'utf-8');
        console.log(data);
    }
    else
        console.error('Enter Valid Name');
} 

if(argv[2] == '--update-file'){
    if(argv[3]){
        fs.appendFileSync(`${argv[3]}`, `${argv[4]}`)
    }
    else
        console.error('Enter Valid Input');
} 



