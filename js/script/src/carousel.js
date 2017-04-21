$(document).ready(function() {
    var leftUIEl = $('.carousel__arrow-left');
    var rightUIEl = $('.carousel__arrow-right');
    var elementsList = $('.carousel__list');
    var isAnimated = false;

    var widthItem = 300;
    var offsetItem = 20;
    var interval = 500;

    var itemsTotal = elementsList.children().length;
    var widthElements = itemsTotal * widthItem - offsetItem;
    var needWidth = elementsList.width() - widthElements;
    var ofssetList = (elementsList.width()/2 - widthItem/2)%(widthItem + offsetItem)-widthItem;
    var needItem = Math.ceil(needWidth / widthItem);

    elementsList.css('left', ofssetList);
    elementsList.css('width', elementsList.width() + 3 * widthItem);
    while (needItem > 0) {
        var countItem = Math.min(needItem, itemsTotal);
        elementsList.children(':last').after(elementsList.children().slice(0, countItem).clone(true));
        needItem = needItem - countItem;
    }

    leftUIEl.click(function() {
        if (isAnimated)
            return;
        isAnimated = true;
        var numItem = elementsList.children().length % itemsTotal;
        elementsList.children(':last').after(elementsList.children().slice(numItem, numItem+1).clone(true));
        elementsList.animate({ left : ofssetList - widthItem - offsetItem + 'px' }, interval, function () {
            elementsList.css('left', ofssetList);
            elementsList.children().slice(numItem, numItem+1).remove();
            isAnimated = false;
        });
    });

    rightUIEl.click(function() {
        if (isAnimated)
            return;
        isAnimated = true;
        elementsList.css('left', ofssetList - widthItem - offsetItem + 'px');
        elementsList.children(':first').before(elementsList.children().slice(itemsTotal-1, itemsTotal).clone(true));
        elementsList.animate({left: ofssetList}, interval, function () {
            elementsList.children().slice(-1).remove();
            isAnimated = false;
        });
    });
});