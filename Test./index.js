#!/usr/bin/env node

var figlet = require('figlet');
var gradient = require('gradient-string');

var txt = "VotaiTest.";
var text =""


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delaywritting(){
        while (true) {
                for (let i = 0; i < txt.length; i++) {
                        await sleep(200);
                        text+=txt[i];
                        var message = figlet.textSync(text, {
                                horizontalLayout: 'default',
                                verticalLayout: 'default',
                                width: 80,
                                whitespaceBreak: true
                         });
                        console.clear();
                        console.log(gradient('red','orange') (message));
                }
                await sleep(1000);
                text = "";
                console.clear();
        }
}

delaywritting();
