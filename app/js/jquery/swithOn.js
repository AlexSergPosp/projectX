var main = function(){
    $("#switch").click(function(){
        $('body').toggleClass("switchOnOf",2000);
    });
};
$(document).ready(main);