if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
// google map scrolling off with mouse wheel
$('.map-responsive').on('click',function() {
    $('.map-responsive iframe').css("pointer-events", "auto");
});
$(".map-responsive").on('mouseleave',function() {
    $('.map-responsive iframe').css("pointer-events", "none");
});


// Standard google maps function
function initialize() {
    var lotusvenkat = new google.maps.LatLng(13.042334, 80.242802);
    var sameera = new google.maps.LatLng(13.066647, 80.270112);
    var barkit = new google.maps.LatLng(13.034192, 80.235831);
    var myOptions = {
        zoom: 8,
        center: lotusvenkat,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    TestMarker();


    var marker = new google.maps.Marker({
    position: sameera,
    map: map,
    title: 'Hello World!'
  });
  
  
   var marker1 = new google.maps.Marker({
    position: lotusvenkat,
    map: map,
    title: 'Hello World!'
  });
  
  var marker2 = new google.maps.Marker({
    position: barkit,
    map: map,
    title: 'Hello World!'
  });
  
}

// Function for adding a marker to the page.
function addMarker(location) {
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Testing the addMarker function
function TestMarker() {
    CentralPark = new google.maps.LatLng(37.7699298, -122.4469157);
    addMarker(CentralPark);
}



$(window).load(function() {
    $('#thumbnails').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#flex-slider'
    });

    $('#flex-slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#thumbnails",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});