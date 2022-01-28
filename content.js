window.onload = function() {
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

    // document.getElementById("lob").onclick = function () {
    //     fun();
    //     // previewLetterWithDoc()
    // };
    // function fun() {
    //     // var letters = document.getElementById('hidden_value').value
    //     // alert(letters);
    //     var content = document.getElementById('editorcontent').value;
    //     alert(content);
    // }
    document.getElementById("lob").addEventListener("click", runScriptOnPage, true)
    // document.getElementById("lob").addEventListener("click", fun, true)
    function runScriptOnPage() {
        var actualCode = 'previewLetterWithDoc(1)';
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head || document.documentElement).appendChild(script);
        script.remove();

        setTimeout(letter_content, 2000);
        // setTimeout(fun, 1000);
    }

    function letter_content() {
        var content = document.getElementById('editorcontent').value;
        // console.log(content);
        var count = (content.match(/class="pageBreak"/g) || []).length;
        console.log(count);
        lettersCount = count / 3;
        console.log("There are =", lettersCount);
        if (lettersCount > 1) {
            console.log("The letters are more than one");
        }
        else {
            console.log("There is only 1 letter");
        }
        // var i = 0;
        var firstLetter = content.split(/<div class="pageBreak" style="page-break-after:always; display: inline-block;">/);
        // console.log(firstLetter);
        var Letters = firstLetter.length;
        var totalLetters = Letters - 1;
        console.log(totalLetters);
        var i = 0;
        var j = 0;

        for (i = 1; i <= totalLetters;) {
            var letterBody = "";
            var letterDoc1 = "";
            var letterDoc2 = "";
            var firstMatch = "";
            var firstText = firstLetter[i];
            var firstFind = "<p>";
            var firstMatch = firstText.includes(firstFind);
            if (i <= totalLetters && firstMatch != "") {
                // console.log(firstLetter[i]);
                letterBody = firstLetter[i];
                // console.log("Above is ", i, "part of an array");
                i++;
                if (i <= totalLetters) {
                    var find1 = "";
                    var textOfNextArray = firstLetter[i];
                    var toFind1 = "<img style=";
                    var find1 = textOfNextArray.includes(toFind1);
                }
            }

            if (i <= totalLetters && find1 != "") {
                // console.log(textOfNextArray);
                letterDoc1 = textOfNextArray;
                // console.log("Above is ", i, "part of an array");
                i++;
                if (i <= totalLetters) {
                    var find2 = "";
                    var textOfNextArray2 = firstLetter[i];
                    var toFind2 = "<img style=";
                    var find2 = textOfNextArray2.includes(toFind2);
                }
            }

            if (i <= totalLetters && find2 != "") {
                // console.log(textOfNextArray2);
                letterDoc2 = textOfNextArray2;
                // console.log("Above is ", i, "part of an array");
                i++;
            }
            console.log("This is start of next letter");
            var fileText = letterBody + letterDoc1 + letterDoc2;
            // console.log(fileText);
            body(letterBody);
            letterBody = "";
            letterDoc1 = "";
            letterDoc2 = "";
        }
    }
    function body(letterBody) {
        var fromAddress = letterBody.split(/<p>/);
        // console.log(fromAddress);
        for (i = 1; i <= 1; i++) { //for breaking the first paragraph to send to Lob for From, Address_lin1 etc.
            var divide = "<br />";
            var fromAddressLines = fromAddress[i].split(divide);
            for (j = 0; j <= 0; j++) { //Grabing From Address lines
                var fromName = fromAddressLines[j];
                var fromAddres_line1 = fromAddressLines[j + 1];
                var fromState = fromAddressLines[j + 2];
                console.log("From Name = ", fromName);
                console.log("Address Line 1 = ", fromAddres_line1);
                console.log("From State = ", fromState);
            }
            // console.log(i," Line");
            // console.log(fromAddress[i]);
        }
        for (i = 2; i <= 2; i++) { //for breaking the first paragraph to send to Lob for To, TO Address_lin1 etc.
            var divide = "<br />";
            var toAddressLines = fromAddress[i].split(divide);
            for (j = 0; j <= 0; j++) { //Grabing To Address lines
                var toName = toAddressLines[j];
                var toAddres_line1 = toAddressLines[j + 1];
                var toState = toAddressLines[j + 2];
                console.log("To Name = ", toName);
                console.log("To Line 1 = ", toAddres_line1);
                console.log("To State = ", toState);
            }
            // console.log(i," Line");
            // console.log(fromAddress[i]);
        }

    }
};