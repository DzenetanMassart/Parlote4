let heads = head_moche[0];
let generate = '<div id ="' + heads.bougeable + '">';
generate += '<img src="' + heads.head_link + '" id ="' + heads.head_id + '"/>';
generate += '<img src="' + heads.bouche_zero_link + '" id ="' + heads.bouche_zero_id + '"/>';
generate += '<img src="' + heads.bouche_link + '" id ="' + heads.bouche_id + '"/>';
generate += '</div>';
document.getElementById("generate").innerHTML = generate;



let tete_moche = document.getElementById(heads.head_id);
let bouche_fixe_moche = document.getElementById(heads.bouche_zero_id);
let bouche_moche = document.getElementById(heads.bouche_id);


// On gère l'intensité
let values_moche;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext_moche = new AudioContext();
        analyser_moche = audioContext_moche.createAnalyser();
        microphone_moche = audioContext_moche.createMediaStreamSource(stream);
        javascriptNode_moche = audioContext_moche.createScriptProcessor(2048, 1, 1);

        analyser_moche.smoothingTimeConstant = 0.8;
        analyser_moche.fftSize = 1024;

        microphone_moche.connect(analyser_moche);
        analyser_moche.connect(javascriptNode_moche);
        javascriptNode_moche.connect(audioContext_moche.destination);
        javascriptNode_moche.onaudioprocess = function() {
            array_moche = new Uint8Array(analyser_moche.frequencyBinCount);
            analyser_moche.getByteFrequencyData(array_moche);
            values_moche = 0;

            length_moche = array.length;
            for (let i = 0; i < length; i++) {
                values_moche += (array_moche[i]);
            }

            average_moche = values_moche / length;


            //On impose une limite à la machoire !
            if (average_moche < 60) {
                bouche_moche.style.top = Math.round(average_moche) / 2 + "px";
                tete_moche.style.transform = "scale(" + (Math.round(average_moche) / 100 + 1) + "," + (Math.round(average_moche) / 500 + 1) + ")"
            } else {
                bouche_moche.style.top = 30 + "px";
                tete.style.transform = "scale(" + (Math.round(average_moche) / 100 + 1) + "," + (Math.round(average_moche) / 500 + 1) + ")"
            }
        }
    })
    .catch(function(err) {});