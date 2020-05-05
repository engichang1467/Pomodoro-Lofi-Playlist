let playlist
let tracks
let current
let link

init()
function init()
{
    current = 0
    let audio = $('audio')
    playlist = $('#playlist')
    tracks = playlist.find('li a')
    let len = tracks.length - 1;
    (audio[0] as HTMLAudioElement).volume = .50
    playlist.find('a').click(function(e)
    {
        e.preventDefault()
        let link = $(this)
        current = link.parent().index()
        run(link, audio[0])
    })

    audio[0].addEventListener('ended',function(e)
    {
        current++
        if(current == len){
            current = 0
            link = playlist.find('a')[0]
        }else{
            link = playlist.find('a')[current]    
        }
        run($(link), audio[0])
    })
}


function run(link, player){
    player.src = link.attr('href');
    let par = link.parent();
    par.addClass('active').siblings().removeClass('active');
    player.load();
    player.play();
}