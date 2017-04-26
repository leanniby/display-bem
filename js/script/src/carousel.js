$(document).ready(function() {
    var leftUIEl = $('.carousel__arrow-left');
    var rightUIEl = $('.carousel__arrow-right');
    var elementsList = $('.carousel__list');
    var isAnimated = false;

    var widthItem = 300;
    var offsetItem = 20;
    var interval = 500;

    var itemsTotal = elementsList.children().length;
    var needItem = Math.ceil((elementsList.width() - itemsTotal * (widthItem + offsetItem)) / (widthItem + offsetItem)) + 1;
    while (needItem > 0) {
        var countItem = Math.min(needItem, itemsTotal);
        elementsList.children(':last').after(elementsList.children().slice(0, countItem).clone(true));
        needItem = needItem - countItem;
    }

    var ofssetList = (elementsList.width()/2 - (widthItem+offsetItem)/2)%(widthItem + offsetItem)- widthItem - offsetItem/2;
    var middleItem = Math.ceil((elementsList.width()/2 - widthItem/2)/(widthItem + offsetItem))+1;
    elementsList.css('left', ofssetList);
    elementsList.css('width', (elementsList.children().length + 2) * (widthItem + offsetItem));
    elementsList.find(':nth-child('+middleItem+')').addClass('carousel__list-element--current');

    leftUIEl.click(function() {
        if (isAnimated)
            return;
        isAnimated = true;
        var numItem = elementsList.children().length % itemsTotal;
        elementsList.find(':nth-child('+middleItem+')').removeClass('carousel__list-element--current');
        elementsList.children(':last').after(elementsList.children().slice(numItem, numItem+1).clone(true));
        elementsList.find(':nth-child('+(middleItem+1)+')').addClass('carousel__list-element--current');
        elementsList.animate({ left : ofssetList - widthItem - offsetItem + 'px' }, interval, function () {
            elementsList.css('left', ofssetList);
            elementsList.children().slice(0,1).remove();
            isAnimated = false;
        });
    });

    rightUIEl.click(function() {
        if (isAnimated)
            return;
        isAnimated = true;
        elementsList.css('left', ofssetList - widthItem - offsetItem + 'px');
        elementsList.find(':nth-child('+middleItem+')').removeClass('carousel__list-element--current');
        elementsList.children(':first').before(elementsList.children().slice(itemsTotal-1, itemsTotal).clone(true));
        elementsList.find(':nth-child('+middleItem+')').addClass('carousel__list-element--current');
        elementsList.animate({left: ofssetList}, interval, function () {
            elementsList.children().slice(-1).remove();
            isAnimated = false;
        });
    });
});