NODE_ENV?=development
NODE?=node
MOCHA?=./node_modules/.bin/mocha
DEBUG?=express*,debug*,info*,warn*,error*,knowjs*

# note, in a real-life app repo, I would not
# place the *secret* values here. Instead, I would
# export the values from by .bashrc, .bash_profile,
# .zprofile, etc. Then, I would reference those 
# variables, similar to below. 
# GITHUB_CLIENT_SECRET?=$(GITHUB_CLIENT_SECRET) 
GITHUB_CLIENT_ID?=e653b683c801e699158d
GITHUB_CLIENT_SECRET?=04ed16d573dbc9b887a3ceca505937262c4a08fa
GITHUB_CLIENT_CALLBACKURL?=http://127.0.0.1:3000/auth/github/callback

start:
	GITHUB_CLIENT_ID=$(GITHUB_CLIENT_ID) \
	GITHUB_CLIENT_SECRET=$(GITHUB_CLIENT_SECRET) \
	GITHUB_CLIENT_CALLBACKURL=$(GITHUB_CLIENT_CALLBACKURL) \
	DEBUG=$(DEBUG) NODE_ENV=$(NODE_ENV) $(NODE) app.js
