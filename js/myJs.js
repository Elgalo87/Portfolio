$(() => {
    const $backGround = $("img[alt='laptop1']");
    /* Effects Plugins*/
    $(".animsition").animsition({
        inClass: 'fade-in-right-lg',
        outClass: 'fade-out-right-lg',
        loading: false,
        inDuration: 1500,
        outDuration: 800,
    });
    // $(".header-content-inner").animsition({
    //     inClass: 'fade-in-up-lg',
    //     outClass: 'fade-out-up-lg',
    //     inDuration: 3000,
    //     outDuration: 1000,
    // });
    /*
      POPUP
     */
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    //Changing The img src
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 9000);

    //Adding the backTop button on('scroll')
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('#back-to-top').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');



    //NoConflicmode
    jQuery.noConflic

    //Gallery
    //Effect slide left and right
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 50,
    });

    $('[data-toggle="tooltip"]').tooltip();
});
// Triggered the form by time
function explode() {
    $("a.popup-with-form").trigger('click');
    $("#test-form").fadeIn(3000);
}

setTimeout(explode, 10000);
