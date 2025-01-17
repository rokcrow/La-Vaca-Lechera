var loaded = false;
var iniciado = false;
function presionoKey(evt) {
  if(iniciado) {
    cubeta.moverCubeta(evt);
  }
  else {
    if(loaded) {
      var texto = document.getElementById("content").getElementsByTagName("div")[0];
      var imagen = document.getElementById("content").getElementsByTagName("img")[0];
      var canvas = document.getElementById("fondo");
      canvas.style.display = "block";
      var container = document.getElementById("content");
      container.removeChild(imagen); container.removeChild(texto);
      vacalechera.iniciar();
      iniciado = true;
    }
  }
}

function clickeo (evt) {
	if(iniciado) {
	cubeta.moverCubeta2(evt);
	}
	else {
		if(loaded) {
		  var texto = document.getElementById("content").getElementsByTagName("div")[0];
		  var imagen = document.getElementById("content").getElementsByTagName("img")[0];
		  var canvas = document.getElementById("fondo");
		  canvas.style.display = "block";
		  var container = document.getElementById("content");
		  container.removeChild(imagen); container.removeChild(texto);
		  vacalechera.iniciar();
		  iniciado = true;
		}
	}
}

var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');
var ASSET_MANAGER = new AssetManager();

var vacalechera;
var vaca;
var cubeta;

ASSET_MANAGER.queueDownload("./imagenes/vaca_normal.png");
ASSET_MANAGER.queueDownload("./imagenes/vaca_disparo.png");
ASSET_MANAGER.queueDownload('./imagenes/vacaCaminaSprite.png');
ASSET_MANAGER.queueDownload("./imagenes/granjero_cubeta_abajo.png");
ASSET_MANAGER.queueDownload("./imagenes/granjero_cubeta_arriba.png");
ASSET_MANAGER.queueDownload("./imagenes/chorro.png");
ASSET_MANAGER.queueDownload("./imagenes/chorro_chico.png");





ASSET_MANAGER.downloadAll(function() {
    document.getElementById("content").getElementsByTagName("div")[0].innerHTML = "Presiona cualquier tecla para continuar"
    vacalechera = new Juego(ctx);
    vaca = new Vaca(vacalechera, 780, 200);
    cubeta = new Cubeta(vacalechera, 200, 200);
    window.addEventListener('keydown',presionoKey,true);
	window.addEventListener('click',clickeo,true);
    vacalechera.addEntidad(vaca);
    vacalechera.addEntidad(cubeta);    
    loaded = true;
});
