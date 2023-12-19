var aside_ul_li_sub_ui = document.querySelectorAll(".aside_ul_li_sub_ui");
var aside_sub_ul = document.querySelectorAll(".aside_sub_ul");


for (var i = 0; i < aside_sub_ul.length; i++) {
    aside_sub_ul[i].style.display = 'none';
}


Array.from(aside_ul_li_sub_ui).forEach(link => {
    link.addEventListener('click', function(event) {
        for (var i = 0; i < aside_sub_ul.length; i++) {
            if(link.querySelector(".aside_sub_ul") != aside_sub_ul[i]){
                aside_sub_ul[i].style.display = 'none';
            }
        }
    if (link.querySelector(".aside_sub_ul").style.display == 'none') {
        link.querySelector(".aside_sub_ul").style.display = 'block';
    }else{
        link.querySelector(".aside_sub_ul").style.display = 'none';   
    }
});
});