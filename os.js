const os = require('os');

//to know system architecture
console.log(os.arch());

//to know RAM info
console.log(os.freemem());

//to convert this free memory in gb:-
console.log(os.freemem()/(1024*1024*1024));

// to know the total space/memory of RAM
console.log(os.totalmem()/(1024*1024*1024));

//to know pc name/host name
console.log(os.hostname());

// to know the plateform/os
console.log(os.platform());

//to know user info
console.log(os.userInfo());