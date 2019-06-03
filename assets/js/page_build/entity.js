document.getElementById("infos").innerHTML = "<p>Bienvenue dans cette troisième version de \"Parlote\"! </p>";
document.getElementById("infos").innerHTML += "<p>Dzénetan Massart vous propose trois bases pour créer un personnage (Canvas & Image) qui parle en fonction de l'";
document.getElementById("infos").innerHTML += "intensité du son dans votre microphone! </p><p> Le répertoire Github associé se trouve ici: <a href=\"https://github.com/DzenetanMassart/Parlote3\">https://github.com/DzenetanMassart/Parlote3<a>";



// On gère l'intensité
let array;
let values;
let length;
let average;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            average = values / length;
            //On impose une limite à la machoire !
            if (average < 60) {
                bouche.style.top = Math.round(average) / 2 + "px";
                tete.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
            } else {
                bouche.style.top = 30 + "px";
                tete.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
            }

            document.getElementById("infos").innerHTML = "<p>Bienvenue dans cette troisième version de \"Parlote\"! </p>";
            document.getElementById("infos").innerHTML += "<p>Dzénetan Massart vous propose trois bases pour créer un personnage (Canvas & Image) qui parle en fonction de l'intensité du son dans votre microphone ! </p>";
            document.getElementById("infos").innerHTML += "<p> Le répertoire Github associé se trouve ici: <a href=\"https://github.com/DzenetanMassart/Parlote3\">https://github.com/DzenetanMassart/Parlote3<a></p>";
            document.getElementById("infos").innerHTML += "<p>L'intensité du son (en décibels) est égale à: </p><p class=\"average\"> " + average + "</p>";
        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });