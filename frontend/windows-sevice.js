let Service = require('node-windows').Service;

// Create a new service object
let svc = new Service({
  name:'Card Game',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\PC\\Documents\\full-stack\\FrontEnd\\javaScript\\card-game\\frontend\\main.js',
  execPath: 'C:\\Users\\PC\\Documents\\full-stack\\FrontEnd\\javaScript\\card-game\\frontend\\\node_modules\\esbuild-windows-64\\esbuild.exe',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();