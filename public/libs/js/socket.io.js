/*!
 *  Copy Right (c)2015 
 *  author	: Abu Dzunnuraini
 *  email	: almprokdr@gmail.com
*/
function launchFullscreen(o) { if(o.requestFullscreen) o.requestFullscreen(); else if(o.mozRequestFullScreen) o.mozRequestFullScreen(); else if(o.webkitRequestFullscreen) o.webkitRequestFullscreen(); else if(o.msRequestFullscreen) o.msRequestFullscreen();}
function exitFullscreen() { if(document.exitFullscreen) document.exitFullscreen(); else if(document.mozCancelFullScreen) document.mozCancelFullScreen(); else if(document.webkitExitFullscreen) document.webkitExitFullscreen();}
var socket = io();
(function(){
	socket.on('start', function(msg){ apps.start(); });
	socket.on('stop', function(msg){ apps.hapus(); });
})();
