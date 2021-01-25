$(document).ready(function() {

    $('.transition').mouseenter(function() {
        $('#transition').delay(800).fadeIn()
    });
    
    var behind = $('.tagline').waypoint(function(direction) {
        $(this.element).addClass('fadeIn-delay');
        this.destroy()
    }, {
        offset: '50%'
    });
    var description = $('.intro').waypoint(function(direction) {
        $(this.element).addClass('fadeIn-slower');
        this.destroy()
    }, {
        offset: '50%'
    });
    var description = $('body').waypoint(function(direction) {
        $(this.element).addClass('fadeIn-slower');
        this.destroy()
    }, {
        offset: '50%'
    });
    new ClipboardJS('.email');
    $('.email').mouseenter(function() {
        $('#hover').show()
    });
    $('.email').mouseleave(function() {
        $('#hover').hide()
    });
    $('.email').click(function() {
        document.getElementById("hover").innerHTML = "Copied! &#128588;";
        $('#hover').delay(800).fadeOut()
    })
})