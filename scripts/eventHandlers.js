/*
//eventHandlers.js -- This file contains JavaScript functions to handle user 
   interaction and update app state and appearance.
*/

/* TO DO: Fill in with functions to handle events and update app. */

/////////////////////////////
//UTILITY AND HELPER FUNCTIONS
/////////////////////////////

/* bindListenerToClassName -- Given a (CSS) class name, a function, and a listener type (e.g., "click"),
this function iterates through all elements with the class, binding the event listener function to 
the appropriate listener type. 
This is a utility function that allows us to bind the same function to all elements of a class. */
function bindListenerToClassName(className, func, listenerType) {
  var classes = document.getElementsByClassName(className);
  for (var i = 0; i < classes.length; ++i) {
    classes[i].addEventListener(listenerType,func);
  }
}

/* sideMenuItemClick: This function does the side menu housekeeping in cases where the item clicked 
   (of class sideMenuItem) is actually a redirect to another page.  
*/
var sideMenuItemClick = function() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("menuBtnIcon").classList.remove("fa-times");
  document.getElementById("menuBtnIcon").classList.add("fa-bars");
}

////////////////////
//USER INPUT HANDLERS
/////////////////////

//document click: If the user clicks anywhere in the document while the side menu is open, we need to
//close the menu, toggle the menu state, and re-enable all buttons/input fields on the page.
       
//menuBtn click: When the top-left side menu button is clicked, we need to act based on which menu is
//presently displayed -- hamburger or left arrow. 

//modeBtnClick: Function that can be bound to mode button click event.  