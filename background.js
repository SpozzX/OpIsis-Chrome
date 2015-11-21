chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
	chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "content.js" });
	});
});


function install_notice() {
    if (localStorage.getItem('install_time'))
        return;

    var now = new Date().getTime();
    localStorage.setItem('install_time', now);
    chrome.tabs.create({url: "installed.html"});
}
install_notice();