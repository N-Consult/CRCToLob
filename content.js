
// const loadScript = async ()=>{
//     var jQueryScript = document.createElement('script');  
//     await jQueryScript.setAttribute('src','https://code.jquery.com/jquery-3.6.0.min.js');
//     await document.head.appendChild(jQueryScript);
//     window.alert("s=script loaded");

// }
//      loadScript();
// window.alert("Chrome Extension Ready To Go");
// window.alert("laoded");
// console.log("result ", tony);
// $(document).ready(function(){
// window.alert("Jquery ran")
// });
// let paragraphs  = document.getElementsByTagName('a');
// for (elt of paragraphs) {
//     elt.style['background-color'] = '#FF00FF' ;
// }

// var button = document.createElement("button");
// document.body.appendChild(button);

// let btn = document.getElementById("previewLetterWithDoc");
// var printButton = document.createElement("button");
// printButton.innerHTML = "Do Something";


// var btnclass = document.getElementsByClassName('gray-btn-big')[1];
// var printButton = document.createElement("button");
// // printButton.setAttribute('content', 'Do Something');
// printButton.innerHTML = "Do Something";
// printButton.classList.add("gray-btn-big");
// printButton.classList.add("gray-btn");
// btnclass.append(printButton);

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// var el = document.createElement("span");
var printButton = document.createElement("button");
printButton.classList.add("gray-btn");
printButton.setAttribute('href', "yourlink.html");
printButton.setAttribute('id', 'lob');
printButton.innerHTML = "Print through Lob";
var div = document.getElementsByClassName('gray-btn-big')[1];
insertAfter(div, printButton);

document.getElementById("lob").onclick = function () {
    fun();
    previewLetterWithDoc()
};
function fun() {
    var letters = document.getElementById('hidden_value').value
    alert(letters);
}
// function previewLetterWithDoc(1) {
//     if ($('#hidden_value').val() != '') {
//         var filter_type = $('#teamdropdown1').val();
//         $('#frame_loader').show();
//         var datastring = "lid=" + $('#hidden_value').val() + "&doc=" + 1 + "&round=" + 1;
//         $("#preview_letter_place").dialog("open");
//         $("#preview_letter_place").parents('.ui-draggable').addClass('intro');
//         $.ajax({
//             url: base_url() + 'everything/preview_letter',
//             data: datastring,
//             type: 'POST',
//             success: function (data) {
//                 $("#preview_letter_content").html(data);
//                 $("#editorcontent").val(data);
//                 $("#preview_letter_place").show();
//                 $('#frame_loader').hide();
//             }
//         });
//         return false;
//     } else {
//         alert('Please select at least one letter');
//         return false;
//     }
// }