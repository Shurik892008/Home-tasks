/* task 1*/
$(function () {
    function str_rand() {
        var result = '';
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
        for (i = 0; i < 10; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        return result;
    }
    $("#gen").click(function () {
        $("#short_link").val(str_rand());
    });
});

/* task 2 */

/* $(function () {
    var images = $('img');
    images.wrap('<div class="controls" />');
    $('<a class="down" href="#">Вниз</a>').insertAfter(images);
    $('<a class="up" href="#">Вверх</a>').insertAfter(images);

    $('.up').click(function () {
        var currentImgBlock = $(this).parent();
        var prevImgBlock = currentImgBlock.prev();
        swap(currentImgBlock, prevImgBlock);
        return false;
    });

    $('.down').click(function () {
        var currentImgBlock = $(this).parent();
        var nextImgBlock = currentImgBlock.next();
        swap(nextImgBlock, currentImgBlock);
        return false;
    });
});

function swap(a, b) {
    if (a.size() > 0 && b.size() > 0) {
        a.insertBefore(b);
    }
} */