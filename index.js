const fs = require('fs');


fs.readFile('./lorem.txt', 'utf-8', (err, data) => {
    if( err ) throw err;
    console.log(data);
})

process.on('uncaughtException', err => {
    console.error(`ci sono degli errori: ${err}`);
    process.exit(1);
})


