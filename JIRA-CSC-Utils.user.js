// ==UserScript==
// @name          JIRA Enhancements for CSC
// @namespace     http://csc.com/
// @version       0.5
// @description   Adds a description template to new JIRA tasks.
// @homepageURL   https://github.com/scytalezero/JIRA-CSC-Utils
// @updateURL     https://github.com/scytalezero/JIRA-CSC-Utils/raw/master/JIRA-CSC-Utils.user.js
// @downloadURL   https://github.com/scytalezero/JIRA-CSC-Utils/raw/master/JIRA-CSC-Utils.user.js
// @author        bcreel2@csc.com
// @match         https://cscjranor004.csc-fsg.com/browse/*
// @match         https://mytime.csc.com/*
// @grant         none
// ==/UserScript==

switch(document.domain) {
  case "cscjranor004.csc-fsg.com":
    fixJira();
    break;
  case "mytime.csc.com":
    fixMytime();
    break;
}

function fixMytime() {
  //Watch for a location box and set it if unset
  window.setInterval(function() {
    if ( ($("#location").length > 0) && ($("#location").val() === "") ) {
      $("#location").val("WL01").selectmenu("refresh");
    }
  }, 500);
}

function fixJira() {
  //Observe changes to the description section
  Out("Adding description watcher");
  jQuery("body").on('DOMSubtreeModified',function() { 
    if ( (jQuery("#description").length > 0) && (jQuery("#description").text().length === 0) ) { 
      Out("Adding description template");
      jQuery("#description").text("*Business Impact:* \n\n*Description:* \n\n*Steps to Recreate:*\n# \n\n*Expected Results:* \n\n*Resolution Description:* \n\n*SVN Revision/s:* ");
    }
  })
}

function Out(buffer) {
  console.log("[JIRA CSC] " + buffer);
}
