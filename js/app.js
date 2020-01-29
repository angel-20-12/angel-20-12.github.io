$ (document).ready(function(){
    $('.ba-members').slick(
       {
           speed: 1000,
           autoplaySpeed: 1000,
          // autoplay: true,
           arrows: true,  
        //    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        //    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
           slidesToShow: 4,
           slidesToScroll: 1,
           infinity: true,
           centerMode: true,
           draggable: true,
           centerPadding: String,
       })

    $('.work_data').isotope({
	});

	var filters = [];
	$('.work_nav').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter').split(" ");
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.work_data').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter( filter ) {
        filter.forEach(element => {
            if ( filters.indexOf( element ) == -1 ) {
                filters.push( element );
                filters.join(',');
            }
        });
	}
	function removeFilter( filter ) {
        filter.forEach(element => {
            var index = filters.indexOf( element);
            if ( index != -1 ) {
                filters.splice( index, 1 );
                console.log(filters.join(','));
            }
        });
	}
})