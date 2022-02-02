window.onload = function () {
    // var el = document.createElement("span");

    var printButton = document.createElement("button");
    printButton.classList.add("gray-btn");
    printButton.setAttribute('href', "yourlink.html");
    printButton.setAttribute("style", "background: linear-gradient(to bottom,#f7f7f7 0,#cdcdcd 100%); font-weight: 700; font-size: 12px; height: 30px; border: 1px solid #d8d8d8;cursor:pointer;");
    printButton.setAttribute('id', 'lob');
    printButton.innerHTML = "Bulk Print";
    var div = document.getElementsByClassName('gray-btn-big')[1];
    insertAfter(div, printButton);

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    document.getElementById("lob").addEventListener("click", createPopup, true);

    function runScriptOnPage() {
        var actualCode = 'previewLetterWithDoc(1)';
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head || document.documentElement).appendChild(script);
        // console.log("script run perfectly");
        systemFlow();
        // setTimeout(fun, 1000);

    }
    function markAsPrinted() {
        var actualCode = 'print_letter()';
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head || document.documentElement).appendChild(script);

    }
    function closePrintPopUp() {
        document.getElementsByClassName('btn-default')[0].click();
    }
    function systemFlow() {
        // ShowLoader();
        setTimeout(closeSystemPopUp, 2);
        // setTimeout(closePrintPopUp, 2);
        setTimeout(letter_content, 2000);
        // setTimeout(StopLoader, 2000);
        exitPopUp();
    }
    function closeSystemPopUp() {
        document.getElementsByClassName('ui-icon ui-icon-closethick')[9].click();

    }
    
    function letter_content() {
        var content = document.getElementById('editorcontent').value;
        // setTimeout(closeSystemPopUp, 20);
        // console.log(content);
        var count = (content.match(/class="pageBreak"/g) || []).length;
        // console.log(count);
        lettersCount = count / 3;
        console.log("There are ", lettersCount, "letter(s).");
        // if (lettersCount > 1) {
        //     console.log("The letters are more than one");
        // }
        // else {
        //     console.log("There is only 1 letter");
        // }
        // var i = 0;
        var firstLetter = content.split(/<div class="pageBreak" style="page-break-after:always; display: inline-block;">/);
        // console.log(firstLetter);
        var Letters = firstLetter.length;
        var totalLetters = Letters - 1;
        // console.log(totalLetters);
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
                // letterBodyText = firstLetter[i+1];
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
                var removeLastStyling = textOfNextArray.split(/<input type=/);
                letterDoc1 = removeLastStyling[0];
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
                var removeLastStyling2 = textOfNextArray2.split(/<input type=/);
                letterDoc2 = removeLastStyling2[0];
                // letterDoc2 = textOfNextArray2;
                // console.log("Above is ", i, "part of an array");
                i++;
            }

            let { fromName,
                fromAddres_line1,
                fromState,
                fromCity,
                fromZip,
                toName,
                toAddres_line1,
                toState,
                toCity,
                toZip,
                letterBodyText } = body(letterBody);
            // console.log("This is start of next letter");
            var fileText = letterBodyText + letterDoc1 + letterDoc2;
            LobAPI(toName, toAddres_line1, toState, toCity, toZip, fromName, fromAddres_line1, fromState, fromCity, fromZip, fileText);
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
                var oldFromName = fromAddressLines[j];
                var fromName = oldFromName.replace(/\s+/g, ' ').trim();
                var fromAddres_line1 = fromAddressLines[j + 1];
                var oldFromState = fromAddressLines[j + 2];

                for (k = 0; k <= 0; k++) {
                    var fromCityState = oldFromState.split(",");
                    // console.log(fromCityState);
                    var fromCity = fromCityState[k].replace(/\s+/g, ' ').trim();;
                    var fromStateZip = fromCityState[k + 1].split(" ");
                    var fromState = fromStateZip[k + 1];
                    var fromZip = fromStateZip[k + 2].replace(/<\/p>\/?[^>]+(>|$)/g, "").trim();
                }

            }
            // console.log(i," Line");
            // console.log(fromAddress[i]);
        }
        for (i = 2; i <= 2; i++) { //for breaking the first paragraph to send to Lob for To, TO Address_lin1 etc.
            var divide = "<br />";
            var toAddressLines = fromAddress[i].split(divide);
            for (j = 0; j <= 0; j++) { //Grabing To Address lines
                var oldToName = toAddressLines[j];
                var toName = oldToName.replace(/\s+/g, ' ').trim();
                var oldtoAddres_line1 = toAddressLines[j + 1];
                var toAddres_line1 = oldtoAddres_line1.replace(/<p\/?[^>]+(>|$)/g, "").trim();
                var oldToState = toAddressLines[j + 2];
                for (k = 0; k <= 0; k++) {
                    var toCityState = oldToState.split(",");
                    // console.log(toCityState);
                    var toCity = toCityState[k].replace(/\s+/g, ' ').trim();;
                    var toStateZip = toCityState[k + 1].split(" ");
                    var toState = toStateZip[k + 1];
                    var toZipEscape = toStateZip[k + 2].replace(/<\/p>\/?[^>]+(>|$)/g, "").trim(); //removing </p> at the end
                    // var toZipDeletingExtraDigits = toZipEscape.split("-");
                    // var toZip = toZipDeletingExtraDigits[k];
                    var toZip = toZipEscape;
                }
                // var toCity = oldToState.split(",");
                // var toState = oldToState.replace(/<\/p>\/?[^>]+(>|$)/g, "").trim();

            }
            // console.log(i," Line");
            // console.log(fromAddress[i]);

        }
        //letterBodyText
        var letterBodyText1 = letterBody.replace(fromAddress[1], " "); //generating body text without from address
        var letterBodyText2 = letterBodyText1.replace(fromAddress[2], " "); //generating body text without to address
        // var letterBodyText3 = letterBodyText2.replace(fromAddress[3], " "); //generating body text without letter date
        var letterBodyText3 = letterBodyText2.replace(/<p>/, " ").trim();
        var letterBodyText4 = letterBodyText3.replace(/<p>/, " ");


        var letterBodyText5 = letterBodyText4.replace(/&nbsp;&nbsp;&nbsp;&nbsp\;/g, " ").trim(); //removing extra breaks in ordered list
        var letterBodyText6 = letterBodyText5.split("<img src="); //seperating signature image
        var letterBodyText = letterBodyText6[0];
        // console.log(letterBodyText);
        var letterUserSignature = letterBodyText4[1];

        return {
            fromName,
            fromAddres_line1,
            fromState,
            fromCity,
            fromZip,
            toName,
            toAddres_line1,
            toState,
            toCity,
            toZip,
            letterBodyText
        }
    }

    function LobAPI(toName, toAddres_line1, toState, toCity, toZip, fromName, fromAddres_line1, fromState, fromCity, fromZip, fileText) {
        ShowLoader();
        const toAdd = {
            'name': toName,
            'address_line1': toAddres_line1,
            'address_city': toCity,
            'address_state': toState,
            'address_zip': toZip
        };
        const fromAdd = {
            'name': fromName,
            'address_line1': fromAddres_line1,
            'address_city': fromCity,
            'address_state': fromState,
            'address_zip': fromZip
        };
        const to = JSON.stringify(toAdd);
        const from = JSON.stringify(fromAdd);

        var data = "to=" + to + "&from=" + from + "&color=false&file=<html style=\'padding-top: 3in; margin: .5in;\'><body>" + fileText + "</body></html>";
        console.log(data);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.status);
                // console.log(this.responseText);
                // console.log(this.responseText);
                // console.log(this.responseText);
                // const checkId = JSON.parse(this.responseText);
                // console.log(typeof(checkId));
                // console.log(this.responseText.search("id"));
                // console.log(checkId.status_code);
                if (this.status !== 200) {
                    var ErrorCode = this.status;
                    StopLoader();
                    errorPopUp(ErrorCode);
                }
                else if (this.status === 200) {
                    markAsPrinted();
                    setTimeout(closePrintPopUp, 2);
                    StopLoader();
                    successPopUp();
                }
                // else {
                //     var ErrorCode = checkId.status_code;
                //     StopLoader();
                //     errorPopUp(ErrorCode);
                // }
            }
        });

        xhr.open("POST", "https://api.lob.com/v1/letters");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic dGVzdF8wMzIxNDdkZWU2OWMwNmI4ZWE5NDZlNTkyYjJlZGJiYWQyNDo=");

        xhr.send(data);
    }
    function createPopup() {
        wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("style", "position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%; overflow: hidden;");
        wrapperDiv.classList.add("ui-widget-overlay");

        iframeElement = document.createElement("iframe");
        iframeElement.setAttribute("style", "width: 100%; height: 100%; scrolling: no!Important; overflow: hidden;");
        iframeElement.classList.add("ui-dialog", "ui-widget", "ui-widget-content", "ui-corner-all", "ui-draggable", "intro");

        wrapperDiv.appendChild(iframeElement);

        modalDialogParentDiv = document.createElement("div");
        modalDialogParentDiv.setAttribute("style", "position: fixed; width: 500px; border: 3px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");


        modalDialogSiblingDiv = document.createElement("div");

        modalDialogTextDiv = document.createElement("div");
        modalDialogTextDiv.setAttribute("style", "text-align:left; font-size: 15px; margin: 20px 10px 0px 10px;");

        modalDialogTextSpan = document.createElement("span");
        modalDialogText = document.createElement("strong");
        modalDialogText.innerHTML = "Are you sure you want to print all selected letters now? Proceeding will generate an auto request to print and mark selected letters as printed instantly.";


        modalDialogSiblingButtonsDiv = document.createElement("div");

        modalDialogButtonDiv = document.createElement("div");
        modalDialogButtonDiv.setAttribute("style", "text-align:right; margin-top:80px");

        modalDialogButtonSpan = document.createElement("span");
        modalDialogTextButton1 = document.createElement("button");
        modalDialogTextButton1.setAttribute("id", "Yes");
        modalDialogTextButton1.setAttribute("style", "font-size: 15px; padding: 5px 12px 5px; margin-top: 1px; margin-right: 15px;")
        modalDialogTextButton1.innerHTML = "Yes!";
        modalDialogTextButton2 = document.createElement("button");
        modalDialogTextButton2.setAttribute("id", "No");
        modalDialogTextButton2.setAttribute("style", "font-size: 15px; padding: 5px 12px 5px; margin-top: 1px;")
        modalDialogTextButton2.innerHTML = "Not Now!";


        breakElement = document.createElement("br");
        imageElement = document.createElement("img");
        imageElement.src = chrome.extension.getURL("spinner_progress.gif");

        modalDialogTextSpan.appendChild(modalDialogText);
        modalDialogButtonSpan.appendChild(modalDialogTextButton1);
        modalDialogButtonSpan.appendChild(modalDialogTextButton2);
        modalDialogTextDiv.appendChild(modalDialogTextSpan);
        modalDialogButtonDiv.appendChild(modalDialogButtonSpan);

        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(imageElement);

        modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
        modalDialogSiblingButtonsDiv.appendChild(modalDialogButtonDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingButtonsDiv);


        document.body.appendChild(wrapperDiv);
        document.body.appendChild(modalDialogParentDiv);

        document.documentElement.scrollTop = document.getElementById("modalDialogParentDiv"); // scroll to view the dialog box

        document.getElementById("Yes").addEventListener("click", runScriptOnPage, true);
        document.getElementById("No").addEventListener("click", exitPopUp, true);
    }
    function ShowLoader() {
        var y = document.getElementById("frame_loader");
        y.style.display = "block";
        // var x = document.getElementById("ajax_loader_new");
        // x.style.display = "block";
    }
    function StopLoader() {
        // var x = document.getElementById("ajax_loader_new");
        // if (x.style.display === "block") {
        //     x.style.display = "none";
        // }
        var y = document.getElementById("frame_loader");
        if(y.style.display = "block") {
            y.style.display = "none";
        }

    }
    function exitPopUp() {
        document.body.removeChild(modalDialogParentDiv);
        document.body.removeChild(wrapperDiv);
    }
    function errorPopUp(ErrorCode) {
        console.log("Data was not sent");
        wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("style", "position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%; overflow: hidden;");
        wrapperDiv.classList.add("ui-widget-overlay");

        iframeElement = document.createElement("iframe");
        iframeElement.setAttribute("style", "width: 100%; height: 100%; scrolling: no!Important; overflow: hidden;");
        iframeElement.classList.add("ui-dialog", "ui-widget", "ui-widget-content", "ui-corner-all", "ui-draggable", "intro");

        wrapperDiv.appendChild(iframeElement);

        modalDialogParentDiv = document.createElement("div");
        modalDialogParentDiv.setAttribute("style", "position: fixed; width: 500px; border: 3px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");


        modalDialogSiblingDiv = document.createElement("div");

        modalDialogTextDiv = document.createElement("div");
        modalDialogTextDiv.setAttribute("style", "text-align:left; font-size: 15px; margin: 20px 10px 0px 10px;");

        modalDialogTextSpan = document.createElement("span");
        modalDialogText = document.createElement("strong");
        modalDialogText.innerHTML = "There was an error while sending your letter(s), Error Code: " +ErrorCode+" Please check Lob errors <a href=\"https://docs.lob.com/#tag/Errors\" target=\"_blank\">here</a>.";


        modalDialogSiblingButtonsDiv = document.createElement("div");

        modalDialogButtonDiv = document.createElement("div");
        modalDialogButtonDiv.setAttribute("style", "text-align:right; margin-top:80px");

        modalDialogButtonSpan = document.createElement("span");
        modalDialogTextButton1 = document.createElement("button");
        modalDialogTextButton1.setAttribute("id", "No");
        modalDialogTextButton1.setAttribute("style", "font-size: 15px; padding: 5px 12px 5px; margin-top: 1px;")
        modalDialogTextButton1.innerHTML = "Ok";

        breakElement = document.createElement("br");
        imageElement = document.createElement("img");
        imageElement.src = chrome.extension.getURL("spinner_progress.gif");

        modalDialogTextSpan.appendChild(modalDialogText);
        modalDialogButtonSpan.appendChild(modalDialogTextButton1);
        modalDialogTextDiv.appendChild(modalDialogTextSpan);
        modalDialogButtonDiv.appendChild(modalDialogButtonSpan);

        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(imageElement);

        modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
        modalDialogSiblingButtonsDiv.appendChild(modalDialogButtonDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingButtonsDiv);


        document.body.appendChild(wrapperDiv);
        document.body.appendChild(modalDialogParentDiv);

        document.documentElement.scrollTop = document.getElementById("modalDialogParentDiv"); // scroll to view the dialog box

        // document.getElementById("Yes").addEventListener("click", runScriptOnPage, true);
        document.getElementById("No").addEventListener("click", exitPopUp, true);
    }
    function successPopUp() {
        // console.log("Success fully sent");
        wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("style", "position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%; overflow: hidden;");
        wrapperDiv.classList.add("ui-widget-overlay");

        iframeElement = document.createElement("iframe");
        iframeElement.setAttribute("style", "width: 100%; height: 100%; scrolling: no!Important; overflow: hidden;");
        iframeElement.classList.add("ui-dialog", "ui-widget", "ui-widget-content", "ui-corner-all", "ui-draggable", "intro");

        wrapperDiv.appendChild(iframeElement);

        modalDialogParentDiv = document.createElement("div");
        modalDialogParentDiv.setAttribute("style", "position: fixed; width: 500px; border: 3px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");


        modalDialogSiblingDiv = document.createElement("div");

        modalDialogTextDiv = document.createElement("div");
        modalDialogTextDiv.setAttribute("style", "text-align:left; font-size: 15px; margin: 20px 10px 0px 10px;");

        modalDialogTextSpan = document.createElement("span");
        modalDialogText = document.createElement("strong");
        modalDialogText.innerHTML = "All selected letters were successfully sent for printing.";


        modalDialogSiblingButtonsDiv = document.createElement("div");

        modalDialogButtonDiv = document.createElement("div");
        modalDialogButtonDiv.setAttribute("style", "text-align:right; margin-top:80px");

        modalDialogButtonSpan = document.createElement("span");
        modalDialogTextButton1 = document.createElement("button");
        modalDialogTextButton1.setAttribute("id", "No");
        modalDialogTextButton1.setAttribute("style", "font-size: 15px; padding: 5px 12px 5px; margin-top: 1px;")
        modalDialogTextButton1.innerHTML = "Ok";

        breakElement = document.createElement("br");
        imageElement = document.createElement("img");
        imageElement.src = chrome.extension.getURL("spinner_progress.gif");

        modalDialogTextSpan.appendChild(modalDialogText);
        modalDialogButtonSpan.appendChild(modalDialogTextButton1);
        modalDialogTextDiv.appendChild(modalDialogTextSpan);
        modalDialogButtonDiv.appendChild(modalDialogButtonSpan);

        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(breakElement);
        // modalDialogTextDiv.appendChild(imageElement);

        modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
        modalDialogSiblingButtonsDiv.appendChild(modalDialogButtonDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingDiv);
        modalDialogParentDiv.appendChild(modalDialogSiblingButtonsDiv);


        document.body.appendChild(wrapperDiv);
        document.body.appendChild(modalDialogParentDiv);

        document.documentElement.scrollTop = document.getElementById("modalDialogParentDiv"); // scroll to view the dialog box

        // document.getElementById("Yes").addEventListener("click", runScriptOnPage, true);
        document.getElementById("No").addEventListener("click", exitPopUp, true);
    }
    // //popup form submission
    // document.getElementById("ok_btn").addEventListener("click", btnPressed, true);
    // function btnPressed() {
    //     var x = document.getElementById("APIkey").value;
    //     console.log(x);
    // }



};
