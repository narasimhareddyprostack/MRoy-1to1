const fs = require('fs')

fs.writeFile('manasiroy.txt', 'Good Morning', (err) =>{
    if(err) throw err;
    console.log("File Saved")
});



//call back function in javascript