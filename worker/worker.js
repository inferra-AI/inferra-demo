// The "worker" app: a background process with no port and no URL.
const everyMs = 30000;
console.log("worker started");
setInterval(() => console.log(`processed jobs at ${new Date().toISOString()}`), everyMs);
