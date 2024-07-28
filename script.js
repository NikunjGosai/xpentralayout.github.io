$(document).ready(function () { 

    // pay now btn 
    $(document).on("click", ".trans-amt__pay-btn", function() {
        $(".trans-amt__main-wrap").hide();
        $(".trans-amt-cards__wrap").show();
    });

    // right section clickability
    $(document).on("click", ".entry-details__sidebar", function() {
        $(".entry-details__sidebar, .upcoming-holdys__sidebar").toggleClass("active");
    });

    // right section clickability
    $(document).on("click", ".upcoming-holdys__sidebar", function() {
        $(".upcoming-holdys__sidebar, .entry-details__sidebar").toggleClass("active");
    });

    // transaction mob clickability
    $(document).on("click", ".trans-mob__wrapper", function() {
        $(".trans-mob__wrapper, .accounts-mob__wrapper").toggleClass("active");
    });

    // accounts mob clickability
    $(document).on("click", ".accounts-mob__wrapper", function() {
        $(".accounts-mob__wrapper, .trans-mob__wrapper").toggleClass("active");
    });

    // balance summary mob clickability
    $(document).on("click", ".balance-sum__link", function() {
        $(".balance-sum__link, .account-num__wrap, .trans-mob__wrapper, .upcoming-mob__wrap, .footer-wrapper").toggleClass("active");
    });
});
