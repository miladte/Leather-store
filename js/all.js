

  $(function() {


// slider
    $(".owl-sl").owlCarousel({
      items: 1,
      rtl: true,
      margin: 25,
      dots: true,
      nav: false,
      responsive : {
        768 : {
          items: 2,
        },
        992 : {
          items: 3,
        },
        1200 : {
          items: 4,
        },
      }
    });

    $(".slider-2").owlCarousel({
      items: 1,
      rtl: true,
      margin: 10,
      dots: true,
      nav: false,
      loop: true,
      responsive : {
        768 : {
          items: 2,
        },
        992 : {
          items: 4,
        },
        1200 : {
          items: 5,
        },
      }
    });

    $(window).on( "scroll", function() {
      if( $(window).scrollTop() > 800 )  {
          $('.top').addClass('active');
      } else {
          $('.top').removeClass('active');
      }
  } );

  });