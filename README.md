Node.js for Devs - Getting Dangerous Fast!
==========================================

##Day 2 - Building Up Strong

###10am - 10:50am : Recap from Day 1
- Recap
  - JavaScript, node, npm, modules, 
- Gel some ideas together, including how npm includes 3rd party modules
- Problem: Refactor code to resize images into separate module and separate repo in github. Update app to include it via package.json via tarball link

###10 min break 

###11:00am - 11:30am : Running our Apps and Associated Tasks
- npm [script] 
- make (posix only)
- _npm home_ grunt
- _npm home_ gulp
- ... Node.js scripts!
- Problem: Add a Makefile or npm [script] to your app that starts it and runs tests using mocha
  - bonus: Create a simple gulp file that starts your server with live-reload

###10 min break

###11:40pm - 12:15pm : Configuration
- config files
  - _npm home_ nconf
  - _npm home_ config-node
- environment variables
  - process.env
- command line parameters
  - _npm home_ minimist
- Problem: Add a Makefile and move specification of your require GitHub application variables to be specified in it. 
  - bonus: Add a config.json file and configure your app to use it to control number of images to be scaled
- Pro Tip: Best solution cascades between env-dependent config files, to environment variables, overidable by command options.  
- Pro Tip: Flexibility of Makefile(s)
  - allows multiple layers of compositing and overriding env vars

###12:15pm - 1:15pm : Lunch 
- lunchtime tip:
  - ES6 let operator and impact on variable scope
  - ES6 generators and impact on async operations

###1:15pm - 2:00pm : Logging & Exception Handling
- _npm home_ debug
  - module specific logger names for within reusable modules
  - debug, info, warn, error levels for within applications
- _npm home_ node-inspector
- on('unhandleException', ....
  - crash-first programming
  - node --abort-on-uncaught-exception [script]
    - http://nodejs.org/api/domain.html#domain_warning_don_t_ignore_errors
- cluster - http://nodejs.org/api/cluster.html
  - https://github.com/sahat/hackathon-starter/blob/master/cluster_app.js
  - _npm home_ cluster-master
  - _npm home_ cluster-master-ext
- domains - http://nodejs.org/api/domain.html
  - _npm home_ express-domain-middleware
  - _npm home_ node-okay
- process managers: forever, upstart+monit
- Pro Tip: _npm home_ bunyan
- Problems: Instrument your module with debug
  - bonus: Wrap debug to create a logger for application level code allowing debug, info, warn, and error levels to be specified by environment variable
- More Learning: 
  - http://nodejs.org/api/process.html#process_process_abort
  - DTrace
  - http://www.joyent.com/blog/mdb-and-linux

###10 min break

###2:10pm - 2:30pm: Code Analysis
- _npm home_ jshint
- _npm home_ jscs
- Problem: Add a linting task to your Makefile or npm scripts section and fix the errors and warnings provided

###10 min break

###2:40pm - 3:20pm: Testing
- _npm home_ mocha (mention jasmine and others)
- _npm home_ should
- _npm home_ sinon
- Problem: Add a mocha test to your module that mocks out 

###10 min break

###3:30pm - 4:10pm: Standing on Shoulders and Bootstrapping
- hackathon-starter (https://github.com/sahat/hackathon-starter)
- _npm home_ bower
- _npm home_ yeoman
- Problem: User bower to install bootstrap and update your app to use it

###10 min break

###4:20 - 5:00pm: Node Style Modules on the Client and Code Reuse
- _npm home_ browserify
- json rpc using: 
  - _npm home_ dnode
  - _npm home_ shoe
- Problem: Add means of browserifying your client side code via bash in Makefile or npm scripts, or as a task in grunt or gulp. 

###10 min break

###(Stretch) 5:10 - 6:00pm: Functional Testing
- _npm home_ selenium-webdriver
- Pro Tip: https://saucelabs.com/


###Day End Questions
