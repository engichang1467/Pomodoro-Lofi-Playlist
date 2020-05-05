var playlist;
var tracks;
var current;
var link;
init();
function init() {
    current = 0;
    var audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    var len = tracks.length - 1;
    audio[0].volume = .50;
    playlist.find('a').click(function (e) {
        e.preventDefault();
        var link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended', function (e) {
        current++;
        if (current == len) {
            current = 0;
            link = playlist.find('a')[0];
        }
        else {
            link = playlist.find('a')[current];
        }
        run($(link), audio[0]);
    });
}
function run(link, player) {
    player.src = link.attr('href');
    var par = link.parent();
    par.addClass('active').siblings().removeClass('active');
    player.load();
    player.play();
}
