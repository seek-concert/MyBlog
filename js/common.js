;
$(document).ready(function () {
//nav
//     var obj = null;
//     var As = document.getElementById('starlist').getElementsByTagName('a');
//     obj = As[0];
//     for (i = 1; i < As.length; i++) {
//         if (window.location.href.indexOf(As[i].href) >= 0)
//             obj = As[i];
//     }
//     obj.id = 'selected';

    //m_nav open close
    $(".open_nav").click(function () {
        $(".m_nav_list").toggle();
        $(".m_nav").toggle();
        $(".open_nav").toggleClass("open");
    });
});

/*========= go top =========*/
function b(){
    h = $(window).height();
    t = $(document).scrollTop();
    if(t > h){
        $('#gotop').show();
    }else{
        $('#gotop').hide();
    }
}
$(document).ready(function(e) {
    b();
    $('#gotop').click(function(){
        $(document).scrollTop(0);
    })
});

$(window).scroll(function(e){
    b();
});