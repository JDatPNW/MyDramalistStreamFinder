function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openStreamTabs(Selection){

    var name = document.getElementsByClassName("film-title")[0].textContent;
    var partsArray = name.split(' ');
    var VK_URL = "https://www.viki.com/search?q=";
    var NF_URL = "https://www.netflix.com/search?q=";
    var AP_URL = "https://www.amazon.com/s?k=";
    var AP_PostFix = "&i=prime-instant-video&ref=nb_sb_noss_2";
    var KK_URL = "https://www.kocowa.com/en_us/search/";
    var YT_URL = "https://www.youtube.com/results?search_query=";

    for (var i = 0; i < partsArray.length - 1; i++){
        VK_URL = VK_URL + partsArray[i] + "%20";
        NF_URL = NF_URL + partsArray[i] + "%20";
        AP_URL = AP_URL + partsArray[i] + "+";
        KK_URL = KK_URL + partsArray[i] + "%20";
        YT_URL = YT_URL + partsArray[i] + "+";
    }
    VK_URL = VK_URL.substring(0, VK_URL.length - 3);
    NF_URL = NF_URL.substring(0, NF_URL.length - 3);
    AP_URL = AP_URL.substring(0, AP_URL.length - 1);
    AP_URL = AP_URL + AP_PostFix;
    KK_URL = KK_URL.substring(0, KK_URL.length - 3);
    YT_URL = YT_URL.substring(0, YT_URL.length - 1);


    if (Selection == "Select_VK")
      openInNewTab(VK_URL);
    if (Selection == "Select_NF")
      openInNewTab(NF_URL);
    if (Selection == "Select_AP")
      openInNewTab(AP_URL);
    if (Selection == "Select_KK")
      openInNewTab(KK_URL);
    if (Selection == "Select_YT")
      openInNewTab(YT_URL);
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
    var Regex = /https:\/\/mydramalist.com\/[0-9]+[^\/]*$/;
    if (Regex.test(window.location.href)){  //Regex check
      var elements = document.getElementsByClassName("film-cover");
      if(elements.length == 0){
          return;
      }

      var innerHTML = "<div id=\"Stream_Buttons\" style=\"margin-bottom: -0.25rem !important\" class=\"btn-group group-manage-list dropdown m-b-sm btn-block\"> ";
      innerHTML    += "<button id=\"Stream_Open_All_Links\" class=\"btn white main col-xs-10 col-sm-9\" data-toggle=\"dropdown\">Stream Drama</button> ";
      innerHTML    += "<button id=\"Stream_Dropdown\" class=\"btn white btn-clist col-xs-2 col-sm-3\" data-toggle=\"dropdown\"><i class=\"fa fa-list\"></i></button> ";
      innerHTML    += "<div class=\"dropdown-menu dropdown-menu-right manage-clist\">";
      innerHTML    += "<div class=\"text-center p-a\">";
      innerHTML    += "<button id =\"VK_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\">Viki</button> ";
      innerHTML    += "<button id =\"NF_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\">Netflix</a>";

      innerHTML    += "<button id =\"AP_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>Amazon Prime</a>";
      innerHTML    += "<button id =\"KK_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>Kokowa</a>";
      innerHTML    += "<button id =\"YT_Dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>Youtube</a>";
      innerHTML    += "</div> </div>";

      elements[0].insertBefore(createElement(innerHTML), elements[0].childNodes[elements[0].childNodes.length - 2]);
      //elements[0].appendChild(createElement(innerHTML));


      var VK_Link = document.getElementById('VK_Dropdown');
      VK_Link.addEventListener('click', function() {
          openStreamTabs("Select_VK");
      });

      var NF_Link = document.getElementById('NF_Dropdown');
      NF_Link.addEventListener('click', function() {
          openStreamTabs("Select_NF");
      });


      var AP_Link = document.getElementById('AP_Dropdown');
      AP_Link.addEventListener('click', function() {
          openStreamTabs("Select_AP");
      });

      var KK_Link = document.getElementById('KK_Dropdown');
      KK_Link.addEventListener('click', function() {
          openStreamTabs("Select_KK");
      });

      var YT_Link = document.getElementById('YT_Dropdown');
      YT_Link.addEventListener('click', function() {
          openStreamTabs("Select_YT");
      });
};
}, false);
