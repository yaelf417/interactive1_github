

$(document).ready(function () {
    $('.imgh')
        .mousedown(function () {
        $(this).attr("src", "images/it_was_the_dog_small.png");
    })
        .mouseup(function () {
        $(this).attr("src", "images/button.png");
    });
});