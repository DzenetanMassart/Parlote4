// Pour rendre draggable un élément et pouvoir donc le bouger à la souris !
let BOUGEPOSITION = document.getElementById("parlote_png_move");
BOUGEPOSITION.style.position = "absolute";

dragElement(document.getElementById("parlote_png_move"));

function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.zIndex = 3;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        elmnt.style.zIndex = 2;
    }
}



// On gère l'intensité
let arrayPOSITION;
let valuesPOSITION;
let lengthPOSITION;
let averagePOSITION;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContextPOSITION = new AudioContext();
        analyserPOSITION = audioContext.createAnalyser();
        microphonePOSITION = audioContext.createMediaStreamSource(stream);
        javascriptNodePOSITION = audioContext.createScriptProcessor(2048, 1, 1);

        analyserPOSITION.smoothingTimeConstant = 0.8;
        analyserPOSITION.fftSize = 1024;

        microphonePOSITION.connect(analyserPOSITION);
        analyserPOSITION.connect(javascriptNodePOSITION);
        javascriptNodePOSITION.connect(audioContext.destination);
        javascriptNodePOSITION.onaudioprocess = function() {
            arrayPOSITION = new Uint8Array(analyser.frequencyBinCount);
            analyserPOSITION.getByteFrequencyData(arrayPOSITION);
            valuesPOSITION = 0;

            lengthPOSITION = array.length;
            for (let i = 0; i < length; i++) {
                valuesPOSITION += (arrayPOSITION[i]);
            }

            averagePOSITION = valuesPOSITION / lengthPOSITION;
            if (averagePOSITION < 25) {
                document.getElementById("parlote_png_move").innerHTML = '<div class="parlote_png"></div>';
            } else if (averagePOSITION > 25 && averagePOSITION < 50) {
                document.getElementById("parlote_png_move").innerHTML = '<div class="parlote_png1"></div>';
            } else if (averagePOSITION > 50 && averagePOSITION < 75) {
                document.getElementById("parlote_png_move").innerHTML = '<div class="parlote_png2"></div>';
            } else {
                document.getElementById("parlote_png_move").innerHTML = '<div class="parlote_png3"></div>';
            }

        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });