$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var balloonWidthOffset = $('#b2').width()/2;
		$(window).resize(function(){
			vw = $(window).width()/2;

			if(vw > 400) {
				$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
				$('#b22').animate({top:240, left: vw-250},500);
				$('#b33').animate({top:240, left: vw-150},500);
				$('#b44').animate({top:240, left: vw-50},500);
				$('#b55').animate({top:240, left: vw+50},500);
				$('#b66').animate({top:240, left: vw+150},500);
			} else {
				$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
				$('#b22').animate({top:240, left: vw-150-balloonWidthOffset},500);
				$('#b33').animate({top:240, left: vw-75-balloonWidthOffset},500);
				$('#b44').animate({top:240, left: vw - balloonWidthOffset},500);
				$('#b55').animate({top:240, left: vw+75 - balloonWidthOffset},500);
				$('#b66').animate({top:240, left: vw+150 - balloonWidthOffset},500);
			}
			
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#done').click(function(){
		$('.container').fadeOut('slow');
		$('.ballooncenter').fadeOut('slow');
		$('.alldark').fadeIn('slow');
		interval = setInterval(() =>{
			var sounds = document.getElementById('hbdsong');
			var newVolume = sounds.volume - 0.1;
			// Check if the newVolume is greater than zero
			if(newVolume >= 0){
				sounds.volume = newVolume;
			}
			else{
				// Stop fade
				clearInterval(interval);
				sounds.volume = 0;
				sounds.pause();
				sounds.currentTIme = 0;
			}
		}, 200);		
	});
		
	$('#wish_message').click(function(){
		vw = $(window).width()/2;
		var balloonWidthOffset = $('#b2').width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		if(vw > 400) {
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
		} else {
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b22').animate({top:240, left: vw-150-balloonWidthOffset},500);
			$('#b33').animate({top:240, left: vw-75-balloonWidthOffset},500);
			$('#b44').animate({top:240, left: vw - balloonWidthOffset},500);
			$('#b55').animate({top:240, left: vw+75 - balloonWidthOffset},500);
			$('#b66').animate({top:240, left: vw+150 - balloonWidthOffset},500);
		}
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1000).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(2000);
			if(i==52){
				$("p:nth-child(51)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					$('#done').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});