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
      VK_Link.addEventListener('click', function() {
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

  </ol>
  
  ```javascript
  console.log("I'm a code block!");
  ```
  
</details>
