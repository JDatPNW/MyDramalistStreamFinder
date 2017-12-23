function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openStreamTabs(Selection){
    var url = window.location.href;

    var partsArray = url.split('-');
    var KA_URL = "http://www.kissasian.ch/drama/"; //KissAsian
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

    if (Selection == "Select_All" || Selection == "Select_KA")
      openInNewTab(KA_URL);
    if (Selection == "Select_All" || Selection == "Select_DC")
      openInNewTab(DC_URL);
    if (Selection == "Select_All" || Selection == "Select_DN")
      openInNewTab(DN_URL);
    if (Selection == "Select_All" || Selection == "Select_GDJ")
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
    var Regex = /https:\/\/mydramalist.com\/[1-9]+[^\/]*/;
    if (Regex.test(window.location.href)){  //Regex check
      var elements = document.getElementsByClassName("film-cover");
      if(elements.length == 0){
          return;
      }

      var innerHTML = "<div id=\"Stream_Buttons\" class=\"btn-group group-manage-list dropdown m-b-sm btn-block\"> ";
      innerHTML    += "<button id=\"Stream_Open_All_Links\" class=\"btn m-b-sm white btn-manage-list main col-xs-10 col-sm-9\" \">Stream Drama</button> ";
      innerHTML    += "<button id=\"Stream_Dropdown\" class=\"btn m-b-sm white btn-clist col-xs-2 col-sm-3\" data-toggle=\"dropdown\"><i class=\"fa fa-list\"></i></button> ";
      innerHTML    += "<div class=\"dropdown-menu dropdown-menu-right manage-clist\">";
      innerHTML    += "<div class=\"text-center p-a\">";
      innerHTML    += "<button id =\"KA_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\">KissAsian</button> ";
      innerHTML    += "<button id =\"DC_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\">DramaCool</a>";
      innerHTML    += "<button id =\"DN_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>DramaNice</a>";
      innerHTML    += "<button id =\"GDJ_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>GoodDrama Japanese</a>";
      innerHTML    += "</div> </div>";

      elements[0].appendChild(createElement(innerHTML));

      var All_Links = document.getElementById('Stream_Open_All_Links');
      All_Links.addEventListener('click', function() {
          openStreamTabs("Select_All");
      });

      var KA_Link = document.getElementById('KA_Dropdown');
      KA_Link.addEventListener('click', function() {
          openStreamTabs("Select_KA");
      });

      var DC_Link = document.getElementById('DC_Dropdown');
      DC_Link.addEventListener('click', function() {
          openStreamTabs("Select_DC");
      });

      var DN_Link = document.getElementById('DN_Dropdown');
      DN_Link.addEventListener('click', function() {
          openStreamTabs("Select_DN");
      });

      var GDJ_Link = document.getElementById('GDJ_Dropdown');
      GDJ_Link.addEventListener('click', function() {
          openStreamTabs("Select_GDJ");
      });
};
}, false);
