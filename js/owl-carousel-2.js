
  $(document).ready(function() {
    $("#owl-demo").owlCarousel({
        loop: true, // Enables continuous looping
        autoplay: true, // Enables auto-play
        autoplayTimeout: 3000, // Auto-play delay in milliseconds
        autoplayHoverPause: true, // Pause auto-play on mouse hover
        responsive: {
            0: { items: 1 },   // Mobile (up to 479px)
            480: { items: 2 }, // Small tablets (480px and up)
            768: { items: 3 }, // Tablets (768px and up)
            992: { items: 4 }, // Laptops (992px and up)
            1200: { items: 5 } // Desktops (1200px and up)
        }
    });
});


  