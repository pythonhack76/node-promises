//const fs = require('fs');
const fsPromises = require('fs').promises; 
const path = require('path');

const fileOps = async () => {
    try{
            const data = await fsPromises.readFile(path.join(__dirname, 'files','start.txt'), 'utf-8');
            console.log(data);
            let eliminaFile = await fsPromises.unlink(path.join(__dirname, 'files', 'start.txt'));
            if( eliminaFile != false) {
                console.log('eliminato');
            } else {
                console.log('non sono riuscito ad eliminare il file');
            }
            await fsPromises.writeFile(path.join(__dirname, 'files','promiseStart.txt'), data);
            await fsPromises.appendFile(path.join(__dirname, 'files','promiseStart.txt'), '\n\n Piacere di iniziare un file!');
            await fsPromises.rename(path.join(__dirname, 'files','promiseStart.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
            const newData = await fsPromises.readFile(path.join(__dirname, 'files','promiseComplete.txt'), 'utf-8');
            console.log(newData);
            

    } catch (err) {
        console.log(err);
    }
}

fileOps(); 

// fs.readFile(path.join(__dirname, 'files','start.txt'), 'utf-8', (err, data) => {
//     if (err) throw err; 
//     console.log(data);
// })


// fs.readFile('./lorem.txt', 'utf-8', (err, data) => {
//     if( err ) throw err;
//     console.log(data);
// })

// // esempio file di lettura
// fs.readFile('./new.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// console.log('Benvenuto...');

// //file di scrittura
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Benvenuto nel nuovo files', (err) => {
//     if (err) throw err;
//     console.log('write complete');
// })
// fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n il testo che voglio aggiungere CAZZO', (err) => {
//     if(err) throw err;
//     console.log('operazione COMPLETATA!');
// })


// //file di scrittura secondo
// fs.writeFile(path.join(__dirname, 'files', 'node.txt'), 'Sei nel file NODE nel nuovo files', (err) => {
//     if (err) throw err;
//     console.log('aggiunta di file e contenuto... complete');

//     fs.appendFile(path.join(__dirname, 'files', 'node.txt'), '\n\n Questo il nuovo testo.che sto inserendo', (err) => {
//         if(err) throw err;
//         console.log('Aggiunta effettuata');
   

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newname.txt'), (err) => {
//         if (err) throw err;
//         console.log('RINOMINATO');
//     })
//  })
// })
// // gestione di errori 
// process.on('uncaughtException', err => {
//     console.error(`ci sono degli errori: ${err}`);
//     process.exit(1);
// })



