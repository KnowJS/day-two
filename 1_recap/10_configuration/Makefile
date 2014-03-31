# note, in a real-life app repo, I would not
# place the secret values here. Instead, I would
# export the values from by .bashrc, .bash_profile,
# .zprofile, etc. Then, I would reference those 
# variables, similar to below. 
# GITHUB_CLIENT_SECRET?=$(GITHUB_CLIENT_SECRET) 

NODE?=node
MOCHA?=./node_modules/.bin/mocha

GITHUB_CLIENT_ID?=e653b683c801e699158d
GITHUB_CLIENT_SECRET?=04ed16d573dbc9b887a3ceca505937262c4a08fa
GITHUB_CLIENT_CALLBACKURL?=http://127.0.0.1:3000/auth/github/callback

start:
	GITHUB_CLIENT_ID=$(GITHUB_CLIENT_ID) \
	GITHUB_CLIENT_SECRET=$(GITHUB_CLIENT_SECRET) \
	GITHUB_CLIENT_CALLBACKURL=$(GITHUB_CLIENT_CALLBACKURL) \
	$(NODE) app.js

test:
	$(MOCHA) -R spec -t 5000 --recursive

.PHONY: test
