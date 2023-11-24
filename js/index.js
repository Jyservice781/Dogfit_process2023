$(function(){
    $(window).on('scroll', function(){
        $('.display>.pc').addClass('top');
        $('.display>.mobile').addClass('top');
    });//scroll
        $(window).scroll( function(){
            $('.display').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1'},1500);
                }
            }); 
        });

});//doc