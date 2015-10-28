// ==UserScript==
// @name          JIRA Enhancements for CSC
// @namespace     http://csc.com/
// @version       0.2
// @description   Adds a description template to new JIRA tasks.
// @homepageURL   https://github.com/scytalezero/JIRA-CSC-Utils
// @updateURL     https://github.com/scytalezero/JIRA-CSC-Utils/raw/master/JIRA-CSC-Utils.user.js
// @downloadURL   https://github.com/scytalezero/JIRA-CSC-Utils/raw/master/JIRA-CSC-Utils.user.js
// @author        bcreel2@csc.com
// @match         https://cscjranor004.csc-fsg.com/browse/*
// @grant         none
// ==/UserScript==

//Observe changes to the description section
Out("Adding description watcher");
jQuery("body").on('DOMSubtreeModified',function() { 
  if ( (jQuery("#description").length > 0) && (jQuery("#description").text().length === 0) ) { 
    Out("Adding description template");
    jQuery("#description").text("*Business impact:*\n\n*Description:*\n\n*Steps to recreate:*\n# \n\n*Resolution Description:*\n* \n");
  }
})

function Out(buffer) {
  console.log("[JIRA CSC] " + buffer);
}
