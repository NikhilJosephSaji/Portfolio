
/* ---------Begin Timer ------------*/

$(function () {

    /* Counters  */
    if ($(".section-counters .start").length > 0) {
        $(".section-counters .start").each(function () {
            var stat_item = $(this),
                offset = stat_item.offset().top;
            $(window).scroll(function () {
                if ($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

    // another custom callback for counting to infinity
    $('#infinity').data('countToOptions', {
        onComplete: function (value) {
            count.call(this, {
                from: value,
                to: value + 1
            });
        }
    });

    $('#infinity').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});
/* ---------End Timer ------------*/

//--------------------------------------------------
//                   Begin profilo Filter
//--------------------------------------------------

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
            }, true);
        }
    });    
})()

//--------------------------------------------------
//                   End profilo Filter
//--------------------------------------------------

/* ------- Begin Loading Screen for 5 Sec and Show Body ----------*/

document.querySelector("#loader").style.visibility = "visible";
document.querySelector("body").style.visibility = "hidden";
setTimeout(function () {
    document.querySelector("#loader").style.visibility = "hidden";
    document.querySelector("body").style.visibility = "visible";
}, 4000);

/* ------- End Loading Screen for 5 Sec and Show Body ----------*/

/* ------- Begin Loading Screen until body loads compeletly ----------*/

//document.onreadystatechange = function () {
//    if (document.readyState !== "complete") {
//        document.querySelector(
//            "body").style.visibility = "hidden";
//        document.querySelector(
//            "#loader").style.visibility = "visible";
//    } else {
//        document.querySelector(
//            "#loader").style.visibility = "hidden";
//        document.querySelector(
//            "body").style.visibility = "visible";
//    }
//};

/* ------- End Loading Screen until body loads compeletly ----------*/

/////// #Begin On Click on Menu Hide the Expanded NavBar on Toggle Button
$("a").on('click', function (event) {
    var navbtns = document.getElementById("navbarToggler");
    navbtns.classList.remove("show");
});
/////// #End On Click on Menu Hide the Expanded NavBar on Toggle Button

/////////////// #Begin OnScroll Offset with Animation(Delay)
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 80
    }, 250, 'linear');
});
/////////////// #End OnScroll Offset with Animation(Delay)

////////////////////# Begin NameChange for Responsive UI
var x = window.matchMedia("(max-width: 464px)")

NameTrim(x) // Call listener function at run time
x.addListener(NameTrim) // Attach listener function on state changes

function NameTrim(x) {
    var name = document.getElementById("Name_Header");
    var nav = document.getElementById("HeaderNav_Bar");
    var caros = document.getElementById("carouselCaptions");
    if (x.matches) { // If media query matches             
        name.innerHTML = "  Nikhil";
        nav.classList.remove("myprof-border-lg");
        caros.classList.add("myprof-padding");
    }
    else {
        name.innerHTML = "  Nikhil Joseph Saji";
        nav.classList.add("myprof-border-lg");
        caros.classList.remove("myprof-padding");
    }
}
//////////////////////////#end NameChange for Responsive UI

/* ------- Begin Download Resume Click Function ----------*/

function Dwonload_Clik() {
    document.getElementById("LoadingText").innerHTML = "Downloading...";
    $('#ModalLoad').modal('show');
    setTimeout(function () {
        $('#ModalLoad').modal('hide');
        window.location.href = 'NikhilJosephSajiResume.pdf';
    }, 3000);
}

/* ------- End Download Resume Click Function ----------*/

/* ------- Begin Portfoio Click Function ----------*/

function protfolio_Click(page, loadingText) {
    if (loadingText != "") {
        document.getElementById("LoadingText").innerHTML = loadingText;
    }
    $('#ModalLoad').modal('show');
    setTimeout(function () {
        $('#ModalLoad').modal('hide');
        var myModal = new bootstrap.Modal(document.getElementById(page), {
            keyboard: false,
            backdrop: true,
            focus: true
        });
        myModal.show();
    }, 3000);
}

/* --------- End Portfoio Click Function ----------*/

/* ------- Begin No Data Found Click Function ----------*/

function NoData_Click() {
    $('#ModalLoad').modal('show');
    setTimeout(function () {
        $('#ModalLoad').modal('hide');
        var myModal = new bootstrap.Modal(document.getElementById('NoDataModal'), {
            keyboard: false,
            backdrop: true,
            focus: true
        });
        myModal.show();
        setTimeout(function () { myModal.hide(); }, 2000);
    }, 2000);
}

/* --------- End No Data Found Click Function ----------*/

/* ------- Begin Custom Profile Filter ----------*/

////////function FilterClick(value) {
////////    var btn = document.getElementById('Portfoliofilters').children;
////////    var myPortfolio = document.getElementsByClassName('portfolio-items');
////////    for (var j = 0; j < myPortfolio.length; j++) {
////////        myPortfolio[j].classList.add('d-none');
////////    }
////////    for (var i = 0; i < btn.length; i++) {
////////        if (value == i) {
////////            btn[i].classList.add("active");
////////        }
////////        else {
////////            btn[i].classList.remove("active");
////////        }
////////        if (value == 0) {
////////            for (var j = 0; j < myPortfolio.length; j++) {
////////                myPortfolio[j].classList.remove('d-none', 'portfolio-hidden');
////////            }
////////        }
////////        if (value == 1) {
////////            var myCollapse = document.getElementsByClassName('portfolio-items app');
////////            for (var j = 0; j < myCollapse.length; j++) {
////////                myCollapse[j].classList.remove('d-none', 'portfolio-hidden');               
////////            }
////////        }
////////        if (value == 2) {
////////            var myCollapse = document.getElementsByClassName('portfolio-items web');
////////            for (var j = 0; j < myCollapse.length; j++) {
////////                myCollapse[j].classList.remove('d-none', 'portfolio-hidden');               
////////            }
////////        }
////////    }
////////}

/* --------- End Custom Profile Filter ----------*/
