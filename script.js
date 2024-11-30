$(document).ready(function () {
    var envelope = $("#envelope");
    var valentineText = $(".valentine");
    var hearts = $(".heart");

    envelope.click(function () {
        if (envelope.hasClass("open")) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        addPulseEffect();  
        resetHeartsVisibility(); 
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        addPulseEffect();  
    }

    function addPulseEffect() {
        valentineText.addClass("pulse");  
    }

    function resetHeartsVisibility() {
        hearts.css("opacity", "1");  
        hearts.each(function() {
            $(this).off("animationend").on("animationend", function() {
                $(this).css("opacity", "0");  
            });
        });
    }
});

