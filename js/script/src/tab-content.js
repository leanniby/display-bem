function initTabContent() {
    var list = $('.tab-content__list');
    var current_text = $('.tab-content__current-text');

    function showItem(e) {
        var je = $(e.currentTarget);
        list.children().removeClass('tab-content__item--current');
        je.addClass('tab-content__item--current');
        current_text.html(je.find('.tab-content__item-text').html());
    };

    showItem(list.find(':first'));

    list.on('mouseenter', '.tab-content__item', showItem);
};

$(document).ready(initTabContent);