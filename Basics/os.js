// Core Module - OS
//import os from 'os';
const os = require('os')
var total_Memory = os.totalmem();
var platform_Name = os.platform();
var freespace = os.freemem()

console.log(`RAM Size: ${total_Memory}, platfrom Name : ${platform_Name}`);

console.log(`Free Space : ${freespace}`);