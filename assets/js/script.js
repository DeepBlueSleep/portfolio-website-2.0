$(document).ready(function() {
    currentLang = 1;

    function langInit() {
        /* Changes flag depending on switch position */
        if ($('.switch input').is(":checked")) {
            $("#flag").attr('src', 'assets/img/chinese.png')
        }
        else {
            $("#flag").attr('src', 'assets/img/english.png')
        }
    }

    function translate() {
        if (currentLang == 0) {
            currentLang = 1;
            $('.chinese').css('display', 'initial');
            $('.english').css('display', 'none');
        }
        else {
            currentLang = 0;
            $('.english').css('display', 'initial');
            $('.chinese').css('display', 'none');
        }
    }

    langInit();
    translate();

    $('.switch input').on('change', function () {
        langInit();
        translate();
    })

});