# JIRA-CSC-Utils
Adds some CSC-specific utilities to JIRA.

# Installation
First, you will need the appropriate user script addon for your browser. Currently Chrome is actively supported, but you might also have luck with Firefox.
- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
- Firefox: [Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/)
 
Next, [just click here](https://github.com/scytalezero/JIRA-CSC-Utils/raw/master/JIRA-CSC-Utils.user.js) and you should be prompted to install the script.
![Install](/Images/Install.png)

# Updates
Tampermonkey and Greasemonkey will periodically check for updates from this repository. You should not need to take any action to stay on the latest version of this script.

# Features
At the moment only one feature is implemented:
- **Automatic description template**: When you click the description section of a task that has no description, a template will automatically be inserted for you:

![Description](/Images/Description.png)
