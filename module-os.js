// const os = require("os");

// // console.log(os.userInfo());
// // console.log(os.version());
// // console.log(os.uptime() / 60 + "minutes");
// const os_details = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem() / 1000000000 + " GB",
//   freeMem: os.freemem() / 1000000000 + " GB",
// };

// console.log(os_details);

const path = require("path");

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
