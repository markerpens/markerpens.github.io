document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("rotr-page")) {
        initreckoningoftherift();
    } else if (document.body.classList.contains("lotr-page")) {
        initlegacyoftherift();
    } else if (document.body.classList.contains("bh-page")) {
        initbeyondhope();
    }
});

function initreckoningoftherift() {
    // Button function to switch between ironhand ability sections
    $(function () {
        var buttons = [];
        //Get all element buttons put them to array
        $('.elementrow > .elementbtn').each(function () {
            buttons.push($(this).attr('data-btn'));
        });

        //Index of currently displayed section
        var currentSection = 0;
        //Show the inital slide
        $('.ironhand-section').hide();
        $('#' + buttons[currentSection]).show();

        //Click on buttons will show the specific section
        $('.elementbtn').on('click', function () {
            //Change active button onclick
            $('.elementbtn').removeClass('active');
            $(this).addClass('active');
            //First we get the data-btn attribute
            let btnId = $(this).attr('data-btn');
            //Now we hide all content items shown
            $('.ironhand-section').hide();
            //And show the chosen one
            $('#' + btnId).show();
        });
    })

    // LOKIR SECTION
    var $lokirTextBox = $(".textBox"); $lokirTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($lokirTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".1").on({ click: function () { t("#change-image").attr("src", "videos/rotr-vids/lokir-dash.mp4") } }), t(".2").on({ click: function () { t("#change-image").attr("src", "videos/rotr-vids/lokir-clone.mp4") } }) });

    for (var lokirBtnContainer = document.getElementById("ability-row"), btns = lokirBtnContainer.getElementsByClassName("bt1"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt1 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // HALVAR SECTION
    var $halvarTextBox = $(".textBox-2"); $halvarTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($halvarTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".3").on({ click: function () { t("#change-image-2").attr("src", "videos/rotr-vids/halvar-smash.mp4") } }), t(".4").on({ click: function () { t("#change-image-2").attr("src", "videos/rotr-vids/halvar-monolith.mp4") } }) });

    for (var halvarBtnContainer = document.getElementById("ability-row-2"), btns = halvarBtnContainer.getElementsByClassName("bt2"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt2 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // URSA SECTION
    var $ursaTextBox = $(".textBox-3"); $ursaTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($ursaTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".5").on({ click: function () { t("#change-image-3").attr("src", "videos/rotr-vids/ursa-arrow.mp4") } }), t(".6").on({ click: function () { t("#change-image-3").attr("src", "videos/rotr-vids/ursa-bear.mp4") } }) });

    for (var ursaBtnContainer = document.getElementById("ability-row-3"), btns = ursaBtnContainer.getElementsByClassName("bt3"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt3 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // MORKVAR SECTION
    var $morkvarTextBox = $(".textBox-4"); $morkvarTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($morkvarTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".7").on({ click: function () { t("#change-image-4").attr("src", "videos/rotr-vids/morkvar-spear.mp4") } }), t(".8").on({ click: function () { t("#change-image-4").attr("src", "videos/rotr-vids/morkvar-freeze.mp4") } }) });

    for (var morkvarBtnContainer = document.getElementById("ability-row-4"), btns = morkvarBtnContainer.getElementsByClassName("bt4"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt4 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // EERIKA SECTION
    var $eerikaTextBox = $(".textBox-5"); $eerikaTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($eerikaTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".9").on({ click: function () { t("#change-image-5").attr("src", "videos/rotr-vids/eerika-uppercut.mp4") } }), t(".10").on({ click: function () { t("#change-image-5").attr("src", "videos/rotr-vids/eerika-brr.mp4") } }) });

    for (var eerikaBtnContainer = document.getElementById("ability-row-5"), btns = eerikaBtnContainer.getElementsByClassName("bt5"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt5 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // HJALLNA SECTION
    var $hjallnaTextBox = $(".textBox-6"); $hjallnaTextBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($hjallnaTextBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".11").on({ click: function () { t("#change-image-6").attr("src", "videos/rotr-vids/hjallna-mace.mp4") } }), t(".12").on({ click: function () { t("#change-image-6").attr("src", "videos/rotr-vids/hjallna-bubble.mp4") } }) });

    for (var hjallnaBtnContainer = document.getElementById("ability-row-6"), btns = hjallnaBtnContainer.getElementsByClassName("bt6"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt6 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    AOS.init();
}

function initlegacyoftherift() {
    // Button function to switch between ironhand ability sections
    $(function () {
        var buttons = [];
        //Get all element buttons put them to array
        $('.elementrow > .elementbtn').each(function () {
            buttons.push($(this).attr('data-btn'));
        });

        //Index of currently displayed section
        var currentSection = 0;
        //Show the inital slide
        $('.ironhand-section').hide();
        $('#' + buttons[currentSection]).show();

        //Click on buttons will show the specific section
        $('.elementbtn').on('click', function () {
            //Change active button onclick
            $('.elementbtn').removeClass('active');
            $(this).addClass('active');
            //First we get the data-btn attribute
            let btnId = $(this).attr('data-btn');
            //Now we hide all content items shown
            $('.ironhand-section').hide();
            //And show the chosen one
            $('#' + btnId).show();
        });
    })

    // LOKIR 
    var $textBox = $(".textBox"); $textBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($textBox).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".1").on({ click: function () { t("#change-image").attr("src", "videos/lotr-vids/spectral-laceration.mp4") } }), t(".2").on({ click: function () { t("#change-image").attr("src", "videos/lotr-vids/spectral-warlock.mp4") } }) });

    for (var btnContainer = document.getElementById("ability-row"), btns = btnContainer.getElementsByClassName("btn"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt1 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // HALVAR
    var $textBox2 = $(".textBox-2"); $textBox2.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($textBox2).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".3").on({ click: function () { t("#change-image-2").attr("src", "videos/lotr-vids/hammer-time-yuh.mp4") } }), t(".4").on({ click: function () { t("#change-image-2").attr("src", "videos/lotr-vids/legendary-monolith.mp4") } }) });

    for (var btnContainer = document.getElementById("ability-row-2"), btns = btnContainer.getElementsByClassName("bt2"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt2 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    // URSA
    var $textBox3 = $(".textBox-3"); $textBox3.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $(this).parent().find($textBox3).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".5").on({ click: function () { t("#change-image-3").attr("src", "videos/lotr-vids/munir-arrow.mp4") } }), t(".6").on({ click: function () { t("#change-image-3").attr("src", "videos/lotr-vids/harbinger-of-life.mp4") } }) });

    for (var btnContainer = document.getElementById("ability-row-3"), btns = btnContainer.getElementsByClassName("bt3"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("bt3 active"); t[0].className = t[0].className.replace("active", ""), this.className += " active" });

    AOS.init();
}

function initbeyondhope() {
    var $textBox = $(".textBox"); $textBox.eq(0).fadeIn(), $("[data-showid]").on("click", function () { var t = $("#" + this.dataset.showid); $textBox.not(t).hide(), t.stop().fadeIn() }), jQuery(document).ready(function (t) { t(".1").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/Passive2.mp4") } }), t(".2").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/Left-Click.mp4") } }), t(".3").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/Left-Shift2.mp4") } }), t(".4").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/Q.mp4") } }), t(".5").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/E.mp4") } }), t(".6").on({ click: function () { t("#change-image").attr("src", "videos/bh-vids/Salvation2.mp4") } }) }), AOS.init(); for (var btnContainer = document.getElementById("ability-row"), btns = btnContainer.getElementsByClassName("btn"), i = 0; i < btns.length; i++)btns[i].addEventListener("click", function () { var t = document.getElementsByClassName("active"); t[0].className = t[0].className.replace(" active", ""), this.className += " active" });
}