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
        console.log('111');
        $(".m_nav_list").toggle();
        $(".m_nav").toggle();
        $(".open_nav").toggleClass("open");
    });
});