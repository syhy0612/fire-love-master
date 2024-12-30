$(function() {
    $('#yes').click(function(event) {
        modal('我就知道念念一定会答应的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('有委屈和伟哥说', A);
    });
});

function A() {
    modal('不开心和伟哥说', B);
}

function B() {
    modal('有烦恼和伟哥说', C);
}

function C() {
    modal('伟哥会做饭 ', J);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('房产证上写你名', H);
}

function H() {
    modal('我会做饭', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('希望念念跟我分享日常呀', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
