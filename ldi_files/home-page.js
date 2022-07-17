jQuery(document).ready(function($){

    var peopleEngagement = $(".home-saber-demo").width();
    var winddowsWidth = $(window).width();
    if(winddowsWidth >= 1366)
        $(".home-saber-demo").height(peopleEngagement * 0.31);
});

jQuery('document').ready(function(){
    if (jQuery(window).width() <= 767) {
        jQuery('#menu-list ul li a').css('color','rgb(7, 30, 52)');
    }
    if (jQuery(window).width() > 767) {
        jQuery('#menu-list ul li a').css('color','#fff');
    }
    if (jQuery(window).scrollTop() > 0) {
        jQuery('#menu-header').css('background-color','#fff');
    } 
    else {
    jQuery('#menu-header').css('background-color','transparent');
    // jQuery("#menu-list a").css({ 'color': '#fff'});
    jQuery("#menu-list > div > nav > ul > li > ul > li > a").css({ 'color': '#071E34'});
    jQuery("#menu-list > div > nav > ul > li > ul > li").mouseover(function() {
        jQuery(this).find('a').css({ 
             'color': '#071E34',
             'background': '#F4F7FB'});
    }).mouseout(function() {
        jQuery(this).find('a').css({ 'color': '#071E34', 'background': '#fff'});
    });
    }

    jQuery(window).scroll(function (event) {

        var scroll = jQuery(window).scrollTop();
 
        if(scroll > 0){
            jQuery('#menu-header').css('background-color','#fff');
            jQuery("#menu-list a").css({ 'color': '#071E34'});
            
            jQuery("#menu-list > div > nav > ul > li > ul > li").mouseover(function() {
                
                jQuery(this).find('a').css({ 'background': '#06B5B3',
                    'color': '#fff'});
                }).mouseout(function() {
                    jQuery(this).find('a').css({ 'color': '#071E34', 'background': '#fff'});
            });
    
        }
        else{
            jQuery('#menu-header').css('background-color','transparent');
            jQuery("#menu-list a").css({ 'color': '#fff'});
            jQuery("#menu-list > div > nav > ul > li > ul > li > a").css({ 'color': '#071E34'});
            jQuery("#menu-list > div > nav > ul > li > ul > li").mouseover(function() {
                jQuery(this).find('a').css({
                    'color': '#071E34',
                    'background': '#F4F7FB'});
                }).mouseout(function() {
                jQuery(this).find('a').css({ 'color': '#071E34', 'background': '#fff'});
            });
            
        }
    });
});