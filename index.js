const fs = require('fs');

const path = require('path');

fs.readFile(path.join(__dirname, 'files','start.txt'), 'utf-8', (err, data) => {
    if (err) throw err; 
    console.log(data);
})


fs.readFile('./lorem.txt', 'utf-8', (err, data) => {
    if( err ) throw err;
    console.log(data);
})

// esempio file di lettura
fs.readFile('./new.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log('Benvenuto...');

//file di scrittura
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Benvenuto nel nuovo files', (err) => {
    if (err) throw err;
    console.log('write complete');
})


//file di scrittura secondo
fs.writeFile(path.join(__dirname, 'files', 'node.txt'), 'Sei nel file NODE nel nuovo files', (err) => {
    if (err) throw err;
    console.log('aggiunta di file e contenuto... complete');
})

// gestione di errori 
process.on('uncaughtException', err => {
    console.error(`ci sono degli errori: ${err}`);
    process.exit(1);
})


