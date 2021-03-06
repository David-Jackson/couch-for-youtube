function _Couch() {
    this.videos = [];
    this.creators = {};
    this.parseVideoContent = function(div) {
        var vid = {};
        vid.title = div.getElementsByTagName("a")[1].innerText;
        vid.link = div.getElementsByTagName("a")[1].href;
        vid.creator = div.getElementsByClassName("yt-lockup-byline")[0]
            .innerText.trim();
        vid.id = div.getElementsByClassName("yt-lockup-video")[0]
            .getAttribute("data-context-item-id");
        vid.watched = div.getElementsByClassName("yt-lockup-thumbnail")[0]
            .classList.contains("watched");
        return vid;
    }
    this.getVideos = function() {
        var vidDivs = document.getElementsByClassName("yt-shelf-grid-item");
        for (var i = 0; i < vidDivs.length; i++) {
            this.videos.push(this.parseVideoContent(vidDivs[i]));
        }
        console.log(this.videos);
    };
    this.createFAB = function() {
        var fabHTML = '<div class="fixed-action-btn" style="bottom: 24px; right: 24px; position: fixed; padding-top: 15px; margin-bottom: 0; z-index: 998;">' +
            '<a class="btn-floating btn-large blue-grey" href="new/">' +
            '<i class="material-icons">event_seat</i>' +
            '</a>' +
            '</div>';
    }
}

couch = new _Couch()
couch.getVideos()