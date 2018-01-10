(function () {
	var speed = 5, //this is where you set the average speed of all the cars. The individual car speeds are derived from this number.
		extraArea = 25, //the car pictures are each 50px wide. The wider you make the area before and after the picture, the easier they are to catch.

		$hooray = $('#track .hooray'),
		$prize = $('#track .hooray span'),
		state = 0,
		prizes = ['4th', '2nd', '1st', '3rd'];

	$(".start").click(function () {
		$(this).removeClass('active');
		state = 0;
		$('.car').css({
			'width': (50 + (2 * extraArea)) + 'px'
		});
		$('.car1').css({
			'-webkit-animation': 'car ' + (speed + 1) + 's linear infinite',
			'animation': 'car ' + (speed + 1) + 's linear infinite'
		});
		$('.car2').css({
			'-webkit-animation': 'car ' + (speed - 1) + 's linear infinite',
			'animation': 'car ' + (speed - 1) + 's linear infinite'
		});
		$('.car3').css({
			'-webkit-animation': 'car ' + (speed - 1.5) + 's linear infinite',
			'animation': 'car ' + (speed - 1.5) + 's linear infinite'
		});
		$('.car4').css({
			'-webkit-animation': 'car ' + (speed - 1.5) + 's linear infinite',
			'animation': 'car ' + speed + 's linear infinite'
		});

		$('.car').removeClass('paused').css({
			'left': '900px'
		});

	});


	$('.car').click(function () {
		console.info('state: ' + state);
		if (state == 0) {
			$('.car').addClass('paused').css({
				'-webkit-animation-play-state': 'paused',
				'animation-play-state': 'paused'
			});
			state = 1;

			var carNum = $(this).attr('class').split(' ')[1];
			carNum = carNum.split('car')[1];
			$prize.html(prizes[carNum - 1]);

			$hooray.addClass('active');
		}
	});

		//what would a funfair be without a giant useless prize?
	$('.collect').click(function() {
		$('#teddy').fadeIn('slow');
	});

	$('#teddy .closeTeddy').click(function() {
		$('#teddy').fadeOut('slow');
	});

	$('.again').click(function() {

		$hooray.removeClass('active');
		$('.start').addClass('active');
		return false;
	});

})();
