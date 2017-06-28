var chokidar = require('chokidar');
var spawn    = require('child_process').spawn;
var path     = process.argv[2];

var lastfile = null;
var currentProcess;

currentProcess = spawn('node', ['--trace-warnings', path], { stdio: 'inherit'});
// currentProcess = spawn('node', ['--inspect', '--trace-warnings', path], { stdio: 'inherit'});

chokidar.watch([
    './compiled/server.dev.js'
], { ignoreInitial: true }).on('all', (event, filepath) => {
    if(lastfile == filepath){ return; }
    lastfile = filepath;
    setTimeout(function(){ lastfile = null; }, 600);


    if(currentProcess){ currentProcess.kill(); }

    setTimeout(() => {
        console.log('---------------- Start ----------------');
        currentProcess = spawn('node', ['--trace-warnings', path], { stdio: 'inherit'});
        // currentProcess = spawn('node', ['--inspect', '--trace-warnings', path], { stdio: 'inherit'});
        currentProcess.on('error', (err) => {
            console.log('Failed to start child process.');
        });
    }, process.argv[3] || 0);
});
