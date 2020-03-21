$(document).ready(function () {
    $('#youtubeVideo').on('hidden.bs.modal', function () {
        var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });

    $('#vidModal').on('hidden.bs.modal', function () {
        var html5Video = document.getElementById("heroVideo");
        if (html5Video != null) {
            html5Video.pause();
            html5Video.currentTime = 0;
        }
    });
    $('#vidModal').on('shown.bs.modal', function () {
        var html5Video = document.getElementById("heroVideo");
        if (html5Video != null) {
            html5Video.play();
            html5Video.currentTime = 0;
        }
    });
});

var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onclick = function () {
        var classes = this.classList;
        if (classes.contains("show")) {
            classes.remove("show");
        } else {
            if (previousTextOverImage != null)
                previousTextOverImage.classList.remove("show");
            previousTextOverImage = this;
            classes.add("show");
        }
    }
}

function stopPropagation(event) {
    event.stopPropagation();
}