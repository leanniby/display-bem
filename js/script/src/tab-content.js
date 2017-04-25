$(document).ready(function() {
    var list = $('.tab-content_list');
    var current_text = $('.tab-content__current-text');

    function showItem(e){
        var je = $(e);
        list.children().removeClass('tab-content__item--current');
        je.addClass('tab-content__item--current');
        current_text.html(je.find('.tab-content__item-text').html());
    };

    showItem(list.find(':first'));

    list.children().hover(function(e) {
        showItem(e.currentTarget);
    });
});