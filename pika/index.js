#!/usr/bin/node

var shell = require('shelljs');


var cmd= 'while true; do for FRAME in $(ls *txt | sort -V); do clear; cat $FRAME; sleep .1; done; done'

shell.exec(cmd)

