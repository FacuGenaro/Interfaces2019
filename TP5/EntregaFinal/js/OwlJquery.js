$('#continuar').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2.1
        },
        600: {
            items: 3.5
        },
        1000: {
            items: 4.5
        }
    }
})

$('#tendenciasS').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2.1
        },
        600: {
            items: 3.5
        },
        1000: {
            items: 4.5
        }
    }
})

$('#tendenciasP').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 1.2
        },
        1000: {
            items: 2.2
        }
    }
})

$('#estrenosViernes').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
        0: {
            items: 1.05
        },
        600: {
            items: 1.1
        },
        1000: {
            items: 1.1
        }
    }
})

$('#estrenosViernes').on('mouseout', function () {
    $('#estrenosViernes').trigger('play.owl.autoplay', [10000])
})
$('#estrenosViernes').on('mouseover', function () {
    $('#estrenosViernes').trigger('stop.owl.autoplay')
})

$('#recomendaciones').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2.1
        },
        600: {
            items: 3.5
        },
        1000: {
            items: 4.5
        }
    }
})