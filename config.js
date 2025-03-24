window.INSITE = window.INSITE || {};
window.INSITE.device = "desktop";

window.rtCommonProps = {
    "common.resources.dist.cdn": false,
    "common.resources.cdn.host": "",
    "common.resources.folder": "/Resources/files",
    "modules.resources.cdn": false,
    "rt.ajax.ajaxScriptsFix": true,
    "popup.insite.cookie.ttl": "0.5",
    "feature.flag.runtime.newAnimation.enabled": true,
    "feature.flag.runtime.newAnimation.respectCssAnimationProps.enabled": true,
    "feature.flag.runtime.newAnimation.jitAnimation.enabled": true
};

// Initialize insiteScripts object
window.insiteScripts = window.insiteScripts || {};
window.insiteScripts.popup = function(options) {
    console.log('Popup configuration:', options);
}; 