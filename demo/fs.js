const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     } else 
//     console.log('The directory was created');
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello again', err => {
//     if (err) {
//         throw err
//     };
//     console.log('File was created');
// })

// fs.unlink(filePath, err => {
//     if (err) {
//         throw err
//     };
//     console.log('File was deleted');
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content);
})