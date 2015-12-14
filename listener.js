Ti.App.addEventListener('app:trackVideo', function(e) {
    var paramTrackVideo = {
        category : "Video",
        action : e.eventAction,
        label : e.eventLabel
    };
    Alloy.Globals.trackEvent(paramTrackVideo);
    alert(e.eventAction + "\n" + e.eventLabel);
});