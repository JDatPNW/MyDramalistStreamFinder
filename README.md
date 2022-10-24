# MyDramalistStreamFinder
Links dynamically to Netflix, Amazon Prime, Kokowa, YouTube and Viki straight from the MDL drama page.

### Installation
**<ins>You can now [Download](https://chrome.google.com/webstore/detail/mdl-stream-finder/opmdpgkejhnplnbfccekmagkbnjmcmgd) the Extension from the Chrome Webstore for free.</ins>**


   - [Download](https://github.com/JDatPNW/MyDramalistStreamFinder/archive/refs/heads/master.zip)
   - Move the folder to the desired directory on your PC
   - Unzip the folder
   - Open the Extension Settings:
      - Either type 'chrome://extensions/' in as the URL
      - Or go to three dots in the top right -> More tools -> Extensions
   - Drag and Drop the unzipped folder into the Chrome Extension Settings Window

### Usage
  On MDL you should now see another button now that is labeled "Stream Drama". (Depending on your PC, this could take a second, since it will only appear once the page is fully loaded.)
  ![screenshot](https://i.imgur.com/ee3Qtxa.png)

  This will open a drop down menu that shows you the sites where you can search for the show. (It searches for the show even if it does not exist)  

  ![screenshot](https://i.imgur.com/zuctAAH.png)

  Once you click on the site you want a new tab will open that will search for that show on that site. Again, it will also search for the show if it does not exist. It does save time by making it all just one click.

### Adding your own Sites
<details>
  <summary>Adding your own sites</summary>
  <ol>
  <li>
  After Line <b>74</b> add an additional line as such:
  
  ```javascript
      innerHTML    += "<button id =\"YourPage_dropdown\" class=\"dropdown-item m-t-sm m-b-sm btn-create-list\"</i>YourPage</a>";

  ```
  Where <i>YourPage_Dropdown</i> is a variable, so you should reuse that exact value later, and where <i>YourPage</i> at the very end is the Text that will appear on the MDL Website, so you can pick it freely.
  Right after that should be this line:
  
  ```javascript
  innerHTML    += "</div> </div>";
  ```
  If that is the case then you positioned it correctly
  </li>
  
  <li>
  Next you should create a copy of the code block that looks like this:
  
  ```javascript
      var YourPage_Link = document.getElementById('YourPage_Dropdown');
      YourPage.addEventListener('click', function() {
          openStreamTabs("Select_YourPage");
      });
  ```
  Make sure that <i>YourPage_Dropdown</i> is spelled exactly the same way as it was in step 1. Also, <i>Select_YourPage</i> is a function name, so it should also be spelled exactly the same way later on, so pay atetntion here. Position your code block after the last one of the same logic (in the original file that would be right after line <b>105</b>. Right after the YouYube block.
  </li>
  
  <li>
   Now you need to figure out the logic and the syntax of the websites search funtion. This is not as difficult as it sounds. Let's look at how Viki does that:
   To do that I will go to Viki and just do a test search. I will search for "TEST DRAMA" on Viki and look at the URL that is created by that. 

  ```javascript
   https://www.viki.com/search?q=TEST%20SHOW
  ```
   This tells us that the URL will always begin with <i>https://www.viki.com/search?q=</i> followed by our test string, where spaces are replaced with <i>%20</i>. 
   Let us pretend here that our URL for our new site looks like this:

  ```javascript
   https://www.yourpage.com/search?q=TEST-SHOW
  ```
   The URL begins with <i>https://www.yourpage.com/search?q=</i> and seperates the terms with "-".
   So after line <b>15</b> in the original we will add our own new variable. 
   
  ```javascript
       var YourPage_URL = "https://www.yourpage.com/search?q=";
  ```
   You can tell that we only included the string up until our search term would start. <i>YourPage_URL</i> is a new variable, so make sure to type it the same way every time!
   
  </li>
  
  <li>
   Now after line <b>22</b> of the original file we will add on top of our just created variable. The logic already exists so it is easy. Just do it like this:
  
  ```javascript
        YourPage_URL = YourPage_URL + partsArray[i] + "-";
  ```
   Make sure <i>YourPage_URL</i> is spelled the same way as above and also make sure that you use the right seperator. In our example that was <i>-</i>, so we put that in between the <i>" "</i> at the end of the line!
   
  </li>
  
  <li>
      Since I wrote this code for fun it is not perfect, the next bit is proof of that. The logic we just added ads the seperator after every word, also after the last one. Of course the last word should not have that added, so we need to subtract that again. So just add 
   
  ```javascript
    YourPage_URL = YourPage_URL.substring(0, YourPage_URL.length - 1);
  ```
   after line <b>25</b> of the original file. Here, again, make sure you spell the variable name correctly and where here it says <i>1</i> just count the number of characters of the seperator. Here it was just <i>-</i> so it is just one. For Viki it would have been 3 for example.
   
   Here there is another possibility. If the Page that you are trying to add adds more to the URL after the search term you also need to add that here. Let us assume the URT was actually this:
   
  ```javascript
   https://www.yourpage.com/search?q=TEST-SHOW?more_from_the_page
  ```
   We can see that after our seasrch term there is this argument: <i>?more_from_the_page</i>. We need to add this as well.
   Do this as such:
   Create a variable right after the one we created in the previous step and call it by a new name:
   
  ```javascript
    var YourPage_PostFix = "more_from_the_page";
  ```
   then we will add more code in the line right after the ine we created when we did this:
   
  ```javascript
    YourPage_URL = YourPage_URL.substring(0, YourPage_URL.length - 1);
  ```
   The code we will add is simple:
   
  ```javascript
    YourPage_URL = YourPage_URL + YourPage_PostFix;
  ```
  </li>
  
  <li>
   Lastly, we need to add the functionality that will open the page. To do so we need to add code right after line <b>41</b> in the original.
   
  ```javascript
   if (Selection == "Select_YourPage")
   openInNewTab(YourPage_URL);
  ```
   Again, make sure that both variables are written correctly!
   This should do it, your code should now look something like this:
  </li>
  </ol>
  
  ```javascript
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
    var YourPage_URL = "https://www.yourpage.com/search?q=";
    var YourPage_PostFix = "more_from_the_page";


    for (var i = 0; i < partsArray.length - 1; i++){
        VK_URL = VK_URL + partsArray[i] + "%20";
        NF_URL = NF_URL + partsArray[i] + "%20";
        AP_URL = AP_URL + partsArray[i] + "+";
        KK_URL = KK_URL + partsArray[i] + "%20";
        YT_URL = YT_URL + partsArray[i] + "+";
        YourPage_URL = YourPage_URL + partsArray[i] + "-";

    }
    VK_URL = VK_URL.substring(0, VK_URL.length - 3);
    NF_URL = NF_URL.substring(0, NF_URL.length - 3);
    AP_URL = AP_URL.substring(0, AP_URL.length - 1);
    AP_URL = AP_URL + AP_PostFix;
    KK_URL = KK_URL.substring(0, KK_URL.length - 3);
    YT_URL = YT_URL.substring(0, YT_URL.length - 1);
    YourPage_URL = YourPage_URL.substring(0, YourPage_URL.length - 1);
    YourPage_URL = YourPage_URL + YourPage_PostFix;



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
    if (Selection == "Select_YourPage")
      openInNewTab(YourPage_URL);

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

      var YourPage_Link = document.getElementById('YourPage_Dropdown');
      YourPage_Link.addEventListener('click', function() {
          openStreamTabs("Select_YourPage");
      });
};
}, false);
  ```
  
</details>
