function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openStreamTabs(){
    var url = window.location.href;

    var partsArray = url.split('-');
    var KA_URL = "http://www.kissasian.ch/drama/";
    var DC_URL = "https://dramacool9.com/drama-detail/"
    for (var i = 1; i < partsArray.length; i++){
        KA_URL = KA_URL + partsArray[i] + "-";
        DC_URL = DC_URL + partsArray[i] + "-";
    }
    KA_URL = KA_URL.substring(0, KA_URL.length - 1);
    DC_URL = DC_URL.substring(0, DC_URL.length - 1);

    openInNewTab(KA_URL);
    openInNewTab(DC_URL);
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
    window.removeEventListener("load", load, false); // Listener entfernen, da nicht mehr benötigt

    var elements = document.getElementsByClassName("film-cover");
    if(elements.length == 0){
        return;
    }

    var innerHTML = "<div class=\"btn-group group-manage-list dropdown m-b-sm btn-block\"><a href=\"#\" id=\"extension-link\" class=\"btn m-b-sm white btn-manage-list main col-xs-10 col-sm-9\">Stream</a></div>";
    elements[0].appendChild(createElement(innerHTML));

    var link = document.getElementById('extension-link');
    link.addEventListener('click', function() {
        openStreamTabs();
    });
}, false);
