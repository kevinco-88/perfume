$(document).ready(function () {
    $('.js-located').click(function(){
        $('html,body').animate({scrollTop: $('.location').offset().top},1000)
    });

    $('.js-female').click(function(){
        $('html,body').animate({scrollTop: $('.products').offset().top},1000)
    });
    $('.navbar-brand').click(function(){
        $('html,body').animate({scrollTop: $('.bestseller').offset().top},1000)
    });
    $('.js-kids').click(function(){
        $('html,body').animate({scrollTop: $('.products').offset().top},1000)
    });
    $('.js-contact').click(function(){
        $('html,body').animate({scrollTop: $('.section-form').offset().top},1000)
   });

});
$(document).ready(function () {
    document.addEventListener('scroll', function (e) {
        if (window.innerHeight <= window.scrollY) {
            $("nav").addClass('sticky');
        } else if (window.innerHeight > window.scrollY) {
            $("nav").removeClass('sticky');
        }
    });

});

$(document).ready(function () {
    $('.js-located').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-vendodhja').offset().top},1000)
    });

    $('.js-female').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-products').offset().top},1000)
    });

    $('.js-kids').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-products').offset().top},1000)
    });

});

$(document).ready(function(){

    $('#section_show1').hide();
    $('#section_show2').hide();

    $('#section1').click(function show(element){
        $('#section_show2').hide();
        $('#section_show3').hide();
        var element = $('#section_show1').toggle(0, 'none');
    });
    
    $('#section2').click(function show(element){
        $('#section_show1').hide();
        $('#section_show3').hide();
        var element = $('#section_show2').toggle(0, 'none');
    });




});
$(document).ready(function(){

    $('.js--menu-bar').click(function(){
        var nav=$('.js--main-nav');
        
        nav.slideToggle(200)
    });

});
$(document).ready(function(){
 
    $('#theButton').click(function show(element){
        var element = $('.navi').toggle(0, 'none');
    });

    $(document).ready(function(){
             
        $('#theButton').click(function show(element){
            var element = $('.mobile-nav-icon').toggleClass('activ');
        });
       
       
    });

});