/*!
 *  
 *  Copy Right (c)2015 
 *  author	: Abu Dzunnuraini
 *  email	: almprokdr@gmail.com
*/
var apps=(function($){
	var pub={
		showlampu: function (o){ 
			this.hidealllampu(); $('#lampu-'+o).show(); var c='white';
			if(warna) switch(o){ case 'kuning': c='yellow'; break; case 'merah': c='red'; break;}
			$('.count-text').css('color',c);
		},
		hidealllampu: function (){$('#lampu-hijau').hide();$('#lampu-kuning').hide();$('#lampu-merah').hide();},
		start: function (){
			var count=new Date(new Date().valueOf()+waktu*60*1000);
			this.showlampu('hijau'); $('#main').show();
			$('#count').countdown(count,'start').on('finish.countdown', function (){ apps.showlampu('merah'); }); 
			if(!stschek) this.chekyellow();
		},
		hapus: function (){
			$('#main').hide();
		},
		chekyellow: function (){
			stschek=true;
			var a=$('#count').text();
			if(a==='01:00'){ this.showlampu('kuning'); stschek=false; return;}
			setTimeout('apps.chekyellow()',1000);
		}
	};
	return pub;
})(jQuery);
