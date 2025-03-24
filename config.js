window.INSITE = window.INSITE || {};
window.INSITE.device = "desktop";

// Initialize popup configuration from home page
window.popups = [
    {
        "title": "New Location",
        "url": "/site/76348a90/new-location?preview=true&dm_device=desktop",
        "options": {
            "backgroundColor": "#FFFFFF",
            "borderRadius": "5",
            "width": "737",
            "overlayColor": "rgba(0, 0, 0, 0.61)",
            "height": "501.6640625",
            "animation": "fadeIn"
        },
        "name": "new-location"
    },
    {
        "title": "Popup",
        "url": "/site/76348a90/popup?preview=true&dm_device=desktop",
        "options": {
            "backgroundColor": "#FFFFFF",
            "borderRadius": "5",
            "width": "787.6666259765625",
            "overlayColor": "rgba(0, 0, 0, 0.5)",
            "height": "656.0208282470703",
            "animation": "fadeIn"
        },
        "name": "popup"
    }
];

// Initialize insiteScripts before it's used
window.insiteScripts = window.insiteScripts || {};
window.insiteScripts.popup = function(options) {
    console.log('Popup configuration:', options);
};

// Add image error handler
window.handleImageLoadError = function(error) {
    console.error('Image load error:', error);
    // Prevent default error handling
    return false;
};

window.rtCommonProps = {
    "common.resources.dist.cdn": false,
    "common.resources.cdn.host": "",
    "common.resources.folder": "/Resources/files",
    "modules.resources.cdn": false,
    "rt.ajax.ajaxScriptsFix": true,
    "popup.insite.cookie.ttl": "0.5",
    "feature.flag.runtime.newAnimation.enabled": true,
    "feature.flag.runtime.newAnimation.respectCssAnimationProps.enabled": true,
    "feature.flag.runtime.newAnimation.jitAnimation.enabled": true,
    "images.sizes.small": 160,
    "images.sizes.mobile": 640,
    "images.sizes.tablet": 1280,
    "images.sizes.desktop": 1920,
    "feature.flag.lazy.widgets": true
};

// Initialize rtFlags
window.rtFlags = {
    "unsuspendEcwidStoreOnRuntime.enabled": true,
    "scripts.widgetCount.enabled": true,
    "contact.form.browserValidation.enabled": true,
    "feature.flag.notifications.push.from.top": true,
    "contact.form.useActiveForm": true,
    "flex.runtime.popup.with.show": true
};

// Initialize cookies notification
window.cookiesNotificationMarkupPreview = 'null';
window.rconfWar = ""; 