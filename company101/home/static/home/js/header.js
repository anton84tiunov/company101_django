var header_icon_div = document.querySelector('#header_icon_div');
var header_nav_ui = document.querySelector('#header_nav_ui');
var header_nav_li_search = document.querySelector('#header_nav_li_search');
var header_search_form = document.querySelector('#header_search_form');
var header_but_search = document.querySelector('#header_but_search');
var header_input_search = document.querySelector('#header_input_search');
var header_search_form_result = document.querySelector('#header_search_form_result');
var header_search_ul_result = document.querySelector('#header_search_ul_result');
var header_select_search = document.querySelector("#header_select_search");
var header_icon_button_menu_t = document.querySelector("#header_icon_button_menu_t");
var header_icon_button_menu_td = document.querySelector("#header_icon_button_menu_td");

var mediaQuery = window.matchMedia("(max-width: 480px)");

header_search_form.style.display = 'none';
header_search_form_result.style.display = 'none';
header_search_ul_result.innerHTML = '';


if (mediaQuery.matches) {
    header_nav_ui.style.display = 'none';
    // header_nav_ui.style.width = "10%";
    // header_nav_ui.style.visibility = 'hidden';
    // header_icon_button_menu_t.src = "./static/home/img/menu_t.svg";
    // header_icon_button_menu_td.src = "./static/home/img/menu_td.svg";
}else{
    header_nav_ui.style.display = 'grid';
    // header_nav_ui.style.width = "100%";
    // header_nav_ui.style.visibility = 'visible';
    // header_icon_button_menu_t.src = "./static/home/img/close_t.svg";
    // header_icon_button_menu_td.src = "./static/home/img/close_td.svg";
}

mediaQuery.addEventListener('change', function(event) {
    if (mediaQuery.matches) {
        header_nav_ui.style.display = 'none';
    }else{
        header_nav_ui.style.display = 'grid';
    }
});



// width: 30px;
// height: 30px;

header_icon_div.addEventListener('click', function(event) {
    if (header_nav_ui.style.display == 'none') {
        header_nav_ui.style.display = 'grid';
        // header_nav_ui.style.height = '5px';
    //     header_nav_ui.style.width = "100%";
    //     header_nav_ui.style.transition = "1s all ease";
    // header_nav_ui.style.visibility = 'visible';
        header_icon_button_menu_t.src = "/static/home/img/close_t.svg";
        header_icon_button_menu_td.src = "/static/home/img/close_td.svg";
    }else{
        header_nav_ui.style.display = 'none';
        // header_nav_ui.style.height = 'auto';
    //      header_nav_ui.style.width = "10%";
    //      header_nav_ui.style.transition = "1s all ease";
    // header_nav_ui.style.visibility = 'hidden';
        header_icon_button_menu_t.src = "/static/home/img/menu_t.svg";
        header_icon_button_menu_td.src = "/static/home/img/menu_td.svg";
        
    }
});

header_nav_li_search.addEventListener('click', function(event) {
    // alert('header_nav_li_search');
    if (header_search_form.style.display == 'none') {
        header_search_form.style.display = 'grid';
        // header_search_form_result.style.display = 'block';
    }else{
        header_search_form_result.style.display = 'none';
        header_search_form.style.display = 'none';
        header_input_search.value = "";
        header_search_ul_result.innerHTML = '';
    }
});



header_but_search.addEventListener('click', function(event) {
    // alert('header_nav_li_search');
    if (header_input_search.value) {
        var search_result = '';

        const data = { 
            "str": header_input_search.value,
            "select": header_select_search.value
          };
          
          fetch('/search/str/', {
            method: 'POST',
            headers: {
                // "X-CSRFToken": token,
                // 'X-CSRFToken': csrftoken,
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
                search_result = data;
                if (header_input_search.value) {
                    header_search_ul_result.innerHTML = '';
                    header_search_form_result.style.display = 'block';
                    if(header_select_search.value === "all" || header_select_search.value === "news" ){
                        if(search_result['news']){
                            search_result['news'].forEach(n => {
                                var li = document.createElement("li");
                                var a = document.createElement("a");
                                a.setAttribute("href",`/news/${n['id']}`);
                                a.appendChild(document.createTextNode(n['title']));
                                li.appendChild(a);
                                header_search_ul_result.appendChild(li);
                            });
                        }
                    }
                    if(header_select_search.value === "all" || header_select_search.value === "product" ){

                        if(search_result['product']){
                            search_result['product'].forEach(n => {
                                var li = document.createElement("li");
                                var a = document.createElement("a");
                                a.setAttribute("href",`/market/product/${n['id']}`);
                                a.appendChild(document.createTextNode(n['model']));
                                li.appendChild(a);
                                header_search_ul_result.appendChild(li);
                            });
                        }
                    }
                    if(header_select_search.value === "all" || header_select_search.value === "service" ){

                        if(search_result['service']){
                            search_result['service'].forEach(n => {
                                var li = document.createElement("li");
                                var a = document.createElement("a");
                                a.setAttribute("href",`/service/service/${n['id']}`);
                                a.appendChild(document.createTextNode(n['name']));
                                li.appendChild(a);
                                header_search_ul_result.appendChild(li);
                            });
                        }
                    }
                    if(header_select_search.value === "all" || header_select_search.value === "works" ){

                        if(search_result['works']){
                            search_result['works'].forEach(n => {
                                var li = document.createElement("li");
                                var a = document.createElement("a");
                                a.setAttribute("href",`/works/work/${n['id']}`);
                                a.appendChild(document.createTextNode(n['title']));
                                li.appendChild(a);
                                header_search_ul_result.appendChild(li);
                            });
                        }
                    }
                    console.log(search_result);
                }else{
                    header_search_form_result.style.display = 'none';
                    header_search_ul_result.innerHTML = '';
                }
            })
            .catch((error) => {
              console.log('Error:', error);
            });
    
      
    }else{
        header_search_form_result.style.display = 'none';
        header_search_ul_result.innerHTML = '';
    }


});



// element.style.cssText = 'color: blue; border: 1px solid black'
// element.setAttribute('style', 'color:red; border: 1px solid blue;')




//  function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
 } else {
        setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        // document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
    //   document.getElementById('slider').checked = true;
    }
})();