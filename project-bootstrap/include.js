function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-include");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            if(elmnt.getAttribute("data-include") === "./header/header.html"){
              const page = window.location.pathname.split("/");
              const currentPage = page[page.length-1].split(".")[0];
              const currentPageId = `${currentPage}-page`;
              const links = elmnt.firstElementChild.firstElementChild.children[2].firstElementChild.children;
              for(let i of Object.entries(links)){
                const link = i[1].firstElementChild;
                if(currentPageId === link.getAttribute("id")){
                  link.classList.add("active");
                } else{
                  link.classList.remove("active");
                }
              }
            } 
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();
