var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://code.jquery.com/jquery-3.6.0.min.js');
document.head.appendChild(jQueryScript);
console.log("Chrome Extension Ready To Go");
// let paragraphs  = document.getElementsByTagName('a');
// for (elt of paragraphs) {
//     elt.style['background-color'] = '#FF00FF' ;
// }

// var button = document.createElement("button");
// document.body.appendChild(button);

// let btn = document.getElementById("previewLetterWithDoc");
// var printButton = document.createElement("button");
// printButton.innerHTML = "Do Something";


var btnclass = document.getElementsByClassName('gray-btn-big')[1];
var printButton = document.createElement("button");
// printButton.setAttribute('content', 'Do Something');
printButton.innerHTML = "Do Something";
printButton.classList.add("gray-btn-big");
printButton.classList.add("gray-btn");
btnclass.append(printButton);

