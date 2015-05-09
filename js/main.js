$( document ).ready(function() {

    $('ul.language-list li:first a').click(function(e) {
        $('.language-list').toggleClass('active');
            e.preventDefault();
        })
        $('.language-list').mouseleave(function() {
            $('.language-list').removeClass('active');
        });

});