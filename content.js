function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openStreamTabs(){
    var url = window.location.href;

    var partsArray = url.split('-');
    var KA_URL = "http://www.kissasian.ch/drama/"; //KissAsia
    var DC_URL = "https://dramacool9.com/drama-detail/" //DramaCool
    var DN_URL = "https://ondramanice.io/drama/" //DramaNice
    var GDJ_URL = "http://www.gooddrama.to/japanese-drama/" //GoodDrama_JP

    for (var i = 1; i < partsArray.length; i++){
        KA_URL = KA_URL + partsArray[i] + "-";
        DC_URL = DC_URL + partsArray[i] + "-";
        DN_URL = DN_URL + partsArray[i] + "-";
        GDJ_URL = GDJ_URL + partsArray[i] + "-";
    }
    KA_URL = KA_URL.substring(0, KA_URL.length - 1);
    DC_URL = DC_URL.substring(0, DC_URL.length - 1);
    GDJ_URL = GDJ_URL.substring(0, GDJ_URL.length - 1);
    DN_URL += "detail";

    openInNewTab(KA_URL);
    openInNewTab(DC_URL);
    openInNewTab(DN_URL);
    openInNewTab(GDJ_URL);
}

function createElement( str ) {
    var frag = document.createDocumentFragment();
    var elem = document.createElement('div');
    elem.innerHTML = str;

    while (elem.childNodes[0]) {
        frag.appendChild(elem.childNodes[0]);
    }
    return frag;
}

window.addEventListener("load", function load(event) {
  window.removeEventListener("load", load, false); // Remove Listener, not needed anymore
    var Regex = /https:\/\/mydramalist.com\/[1-9]+.*/;
    if (Regex.test(window.location.href)){

    var elements = document.getElementsByClassName("film-cover");
    if(elements.length == 0){
        return;
    }


    var innerHTML = "<div id=\"Steam_Buttons\" class=\"btn-group group-manage-list dropdown m-b-sm btn-block\"> ";
    innerHTML += "<button id=\"Stream_Open_All_Links\" class=\"btn m-b-sm white btn-manage-list main col-xs-10 col-sm-9\" \">Stream Drama</button> ";
    innerHTML += "<button id=\"Stream_Dropdown\" class=\"btn m-b-sm white btn-clist col-xs-2 col-sm-3\" data-toggle=\"dropdown\"><i class=\"fa fa-list\"></i></button> ";
    innerHTML += "<div class=\"dropdown-menu dropdown-menu-right manage-clist\"> <div class=\"text-center p-a\">";
    innerHTML += "<a id \"KA\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\" rel=\"nofollow\">KissAsia</a> ";
    innerHTML += "<a class=\"dropdown-item m-t-sm m-b-sm btn-create-list\" rel=\"nofollow\"> Create a List</a>";
    innerHTML += "<a class=\"dropdown-item m-t-sm m-b-sm btn-create-list\" rel=\"nofollow\"><i class=\"fa fa-plus\"></i> Create a List</a> </div> </div>";

    /*
    var innerHTML = "<div class=\"btn-group group-manage-list dropdown m-b-sm btn-block\"><a href=\"#\" ";
    innerHTML += "id=\"extension-link\" class=\"btn m-b-sm white btn-manage-list main col-xs-10 col-sm-9\">Stream</a></div>";

    innerHTML += " <button class=\"btn m-b-sm white btn-clist col-xs-2 col-sm-3\" data-toggle=\"dropdown\"><i class=\"fa fa-list\"></i></button> <div data-rid=\"23950\" class=\"dropdown-menu dropdown-menu-right manage-clist\"> <div class=\"text-center p-a\"><i class=\"fa fa-spin fa-spinner\"></i></div> <div class=\"dropdown-divider\"></div> <a class=\"dropdown-item m-t-sm m-b-sm btn-create-list\" rel=\"nofollow\"><i class=\"fa fa-plus\"></i> Create a List</a> </div> </div>"
*/
    elements[0].appendChild(createElement(innerHTML));

    var link = document.getElementById('Stream_Open_All_Links');
    link.addEventListener('click', function() {
        openStreamTabs();
    });

    var link = document.getElementById('KA');
    link.addEventListener('click', function() {
        openStreamTabs();
    });
};
}, false);
