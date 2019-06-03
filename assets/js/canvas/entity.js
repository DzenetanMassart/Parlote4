//On déssine la tête et la bouche
function setcanvas() {
    let tete = document.getElementById("tete");
    let bouche_fixe = document.getElementById("bouche_zéro");
    let bouche = document.getElementById("bouche");

    let ctx = tete.getContext("2d");
    let bouche_zéro = bouche_fixe.getContext("2d");
    let bouche_un = bouche.getContext("2d");

    drawcanvas(ctx, bouche_un, bouche_zéro);

    function drawcanvas(ctx, bouche_un, bouche_zéro) {

        //Tete_Boule;
        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(107, 12);
        ctx.bezierCurveTo(151, 12, 187, 50, 187, 96);
        ctx.bezierCurveTo(187, 142, 151, 180, 107, 180);
        ctx.bezierCurveTo(62, 180, 26, 142, 26, 96);
        ctx.bezierCurveTo(26, 50, 62, 12, 107, 12);
        ctx.closePath();
        ctx.stroke();
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fill();

        //Tete_bouche_0;
        bouche_zéro.shadowColor = "rgba(0,0,0,0)";
        bouche_zéro.strokeStyle = "rgba(0,0,0,1)";
        bouche_zéro.lineWidth = 1;
        bouche_zéro.lineCap = "butt";
        bouche_zéro.lineJoin = "miter";
        bouche_zéro.beginPath();
        bouche_zéro.moveTo(67, 111);
        bouche_zéro.lineTo(145, 111);
        bouche_zéro.lineTo(145, 150);
        bouche_zéro.lineTo(67, 150);
        bouche_zéro.lineTo(67, 111);
        bouche_zéro.closePath();
        bouche_zéro.stroke();
        bouche_zéro.shadowOffsetX = 15;
        bouche_zéro.shadowOffsetY = 15;
        bouche_zéro.shadowBlur = 0;
        bouche_zéro.shadowColor = "rgba(0,0,0,0)";
        bouche_zéro.fillStyle = "rgba(4,0,0,1)";
        bouche_zéro.fill();

        //Bouche_1;
        bouche_un.shadowColor = "rgba(0,0,0,0)";
        bouche_un.strokeStyle = "rgba(0,0,0,1)";
        bouche_un.lineWidth = 1;
        bouche_un.lineCap = "butt";
        bouche_un.lineJoin = "miter";
        bouche_un.beginPath();
        bouche_un.moveTo(67, 111);
        bouche_un.lineTo(145, 111);
        bouche_un.lineTo(145, 157);
        bouche_un.lineTo(67, 157);
        bouche_un.lineTo(67, 111);
        bouche_un.closePath();
        bouche_un.stroke();
        bouche_un.shadowOffsetX = 15;
        bouche_un.shadowOffsetY = 15;
        bouche_un.shadowBlur = 0;
        bouche_un.shadowColor = "rgba(0,0,0,0)";
        bouche_un.fillStyle = "rgba(250,250,250,1)";
        bouche_un.fill();
    }
}