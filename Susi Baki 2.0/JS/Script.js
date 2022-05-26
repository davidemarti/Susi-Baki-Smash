/* Funzione Che Fa Si Che Ogni Volta Che Si Clicca Un Preciso Pulsante Programmato Il Display Diventa None E Appaia Una Nuova Schermata */

valuepoints = 0

/* Quando Viene Caricata Non Deve Visualizzare = La Schermata Modalita Di Gioco / Impostazioni Audio / Modalita Di Gioco Standard */
$("body").ready(function(){
  $(".Container-Loader").css("display", "none"); /* Schermata = Caricamento */
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
  $(".Container-StandardGameMode").css("display", "none"); /* Schermata = Modalita Di Gioco Standard */
  $(".Container-Counter").css("display", "none"); 
  $(".Container-Hud-Game").css("display", "none");
  $("#Baki-1").css("display", "none");
  $("#Baki-2").css("display", "none");
  $("#Baki-3").css("display", "none");
  $("#Baki-4").css("display", "none");
  $("#Baki-5").css("display", "none");
  $(".Container-FinishGame").css("display", "none");
});

/* Quando Viene Cliccato Il Bottone Acconsenti Visualizza = Il Loader */
$(".Btn-YouAgree").click(function(){
  $(".Container-YouAgree").css("display", "none"); /* Schermata = Acconsenti Per Giocare */
  $(".Container-Loader").css("display", "flex"); /* Schermata = Caricamento */
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
})

/* Quando Viene Cliccato Il Bottone Acconsenti Visualizza = Il Loader E Dopo 2 Secondi Visualizza = Schermata Home*/
$(".Btn-YouAgree").click(function(){

  setTimeout(function(){

    $(".Container-Loader").css("display", "none"); /* Schermata = Caricamento */
    $(".Container-Home").css("display", "flex"); /* Schermata = Seleziona La Modalita Di Gioco */

  }, 1000);

})

/* Quando Viene Cliccato Il Bottone Audio Visualizza = Schermata Seleziona Modalita Di Gioco */
$(".Btn-AudioSettings").click(function(){
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "flex"); /* Schermata = Impostazioni Audio */
})

/* Quando Viene Cliccato Il Bottone Torna Alla Home Visualizza = Schermata Home */
$(".Btn-BackToHomeFromAudioSettings").click(function(){
  $(".Container-Home").css("display", "flex"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
})

/* Quando Viene Cliccato Il Bottone Play Visualizza = Schermata Seleziona Modalita Di Gioco */
$(".Btn-Play").click(function(){
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "flex"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
})

/* Quando Viene Cliccato Il Bottone Torna Alla Home Visualizza = Schermata Home */
$(".Btn-BackToHomeFromSelectGamemode").click(function(){
  $(".Container-Home").css("display", "flex"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
})

$(".Btn-StandardGamemode").click(function(){
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
  $(".Container-StandardGameMode").css("display", "flex"); /* Schermata = Modalita Di Gioco Standard */
})

/* Quando Viene Cliccato Il Bottone Torna Alla Home Visualizza = Schermata Seleziona Modalita Di Gioco */
$(".BackToHomeFromStandardGameMode").click(function(){
  $(".Container-Home").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-SelectGamemode").css("display", "flex"); /* Schermata = Seleziona La Modalita Di Gioco */
  $(".Container-AudioSettings").css("display", "none"); /* Schermata = Impostazioni Audio */
  $(".Container-StandardGameMode").css("display", "none"); /* Schermata = Modalita Di Gioco Standard */
})

$(".Btn-Restart").click(function(){
  window.location.reload();
})



/* Schermata Home / Seleziona Modalita Di Gioco / Impostazioni Audio */



/* Funzione Per Il Cursore Custom */
const Cursor = document.querySelector("#Cursor");

window.addEventListener("mousemove", (e) => {
  Cursor.style.left = e.pageX + "px";
  Cursor.style.top = e.pageY + "px";
  Cursor.setAttribute("data-fromTop", Cursor.offsetTop - scrollY);
});
window.addEventListener("scroll", () => {
  const fromTop = Cursor.getAttribute("data-fromTop");
  Cursor.style.top = scrollY + parseInt(fromTop) + "px";
});
window.addEventListener("click", () => {
  if (Cursor.classList.contains("click")) {
    Cursor.classList.remove("click");
    void Cursor.offsetWidth;
    Cursor.classList.add("click");
  } else {
    Cursor.classList.add("click");
  }
});

/* Esegue Tutti I Callback Che Gli Sono Stati Dati */
function UserInteractionObtained(){
  PlaySound();
  FullScreen();
  PlaySoundTrackHome();
}

/* Funzione Per Riprodurre Il Suono Ogni Volta Che Viene Cliccato Un Button */
function PlaySound(){
  document.getElementById("ButtonClick").play();
}

/* Funzione Per Settare Lo Screen Al 100% */
function FullScreen(){
  setTimeout(function(){
  document.documentElement.requestFullscreen();
  }, 1000);
}

/* Funzione Per Riprodurre La SoundTrack Appena Viene Caricata La Home */
function PlaySoundTrackHome(){
  setTimeout(function(){
    document.getElementById("SoundTrackHome").play();
  }, 1000);
}

/* Funzione Per Lo Slider + Cambio Immagine In Base Al Valore Dello Slider */
function Slider(){

var Slider = document.getElementById("Slider");
var VolumePercent = document.getElementById("VolumePercent");
var ReproduceSoundTrack = document.getElementById("SoundTrackHome")

  Slider.oninput = function(){
    VolumePercent.innerHTML = this.value;
    ReproduceSoundTrack.volume = this.value / 100;

  if (this.value == 0) ImgVolumeChange.innerHTML = '<img src="Img/NoSound.png">';
    else if (this.value <= 25) ImgVolumeChange.innerHTML = '<img src="Img/Sound25.png">';
    else if (this.value <= 60) ImgVolumeChange.innerHTML = '<img src="Img/Sound60.png">';
    else if (this.value <= 100) ImgVolumeChange.innerHTML = '<img src="Img/Sound100.png">';
  }
}

/* Schermata Game = Modalita Standard / Game = Modalita Hardcore */

$(".Btn-StandardGamemode").click(function(){
  document.getElementById("SoundTrackHome").pause();
})

$(".BackToHomeFromStandardGameMode").click(function(){
  document.getElementById("SoundTrackHome").play();
})

/* Cambia Il Colore In Giallo Del = Cursore / Bakis / HUD */
function ChangeHudInColorYellow(){
  $("#Cursor").css("border", "8px solid #FEDA75");

  $("#Counter").css("color", "#FEDA75");
  $("#Timer").css("color", "#FEDA75");
  $("#Points").css("color", "#FEDA75");
  $("#Finish").css("color", "#FEDA75");
  $(".FinalScore").css("color", "#FEDA75");


  $("#Baki-1").css("background-color", "#FEDA75");
  $("#Baki-2").css("background-color", "#FEDA75");
  $("#Baki-3").css("background-color", "#FEDA75");
  $("#Baki-4").css("background-color", "#FEDA75");
  $("#Baki-5").css("background-color", "#FEDA75");
}

/* Cambia Il Colore In Arancione Del = Cursore / Bakis / HUD */
function ChangeHudInColorOrange(){
  $("#Cursor").css("border", "8px solid #FFBE79");

  $("#Counter").css("color", "#FFBE79");
  $("#Timer").css("color", "#FFBE79");
  $("#Points").css("color", "#FFBE79");
  $("#Finish").css("color", "#FFBE79");
  $(".FinalScore").css("color", "#FFBE79");


  $("#Baki-1").css("background-color", "#FFBE79");
  $("#Baki-2").css("background-color", "#FFBE79");
  $("#Baki-3").css("background-color", "#FFBE79");
  $("#Baki-4").css("background-color", "#FFBE79");
  $("#Baki-5").css("background-color", "#FFBE79");
}

/* Cambia Il Colore In Rosso Del = Cursore / Bakis / HUD */
function ChangeHudInColorRed(){
  $("#Cursor").css("border", "8px solid #FF5151");

  $("#Counter").css("color", "#FF5151");
  $("#Timer").css("color", "#FF5151");
  $("#Points").css("color", "#FF5151");
  $("#Finish").css("color", "#FF5151");
  $(".FinalScore").css("color", "#FF5151");


  $("#Baki-1").css("background-color", "#FF5151");
  $("#Baki-2").css("background-color", "#FF5151");
  $("#Baki-3").css("background-color", "#FF5151");
  $("#Baki-4").css("background-color", "#FF5151");
  $("#Baki-5").css("background-color", "#FF5151");
}

/* Cambia Il Colore In Viola Del = Cursore / Bakis / HUD */
function ChangeHudInColorPurple(){
  $("#Cursor").css("border", "8px solid #9966CC");

  $("#Counter").css("color", "#9966CC");
  $("#Timer").css("color", "#9966CC");
  $("#Points").css("color", "#9966CC");
  $("#Finish").css("color", "#9966CC");
  $(".FinalScore").css("color", "#9966CC");


  $("#Baki-1").css("background-color", "#9966CC");
  $("#Baki-2").css("background-color", "#9966CC");
  $("#Baki-3").css("background-color", "#9966CC");
  $("#Baki-4").css("background-color", "#9966CC");
  $("#Baki-5").css("background-color", "#9966CC");
}

/* Cambia Il Colore In Blu Del = Cursore / Bakis / HUD */
function ChangeHudInColorBlue(){
  $("#Cursor").css("border", "8px solid #A5D3FE");

  $("#Counter").css("color", "#A5D3FE");
  $("#Timer").css("color", "#A5D3FE");
  $("#Points").css("color", "#A5D3FE");
  $("#Finish").css("color", "#A5D3FE");
  $(".FinalScore").css("color", "#A5D3FE");


  $("#Baki-1").css("background-color", "#A5D3FE");
  $("#Baki-2").css("background-color", "#A5D3FE");
  $("#Baki-3").css("background-color", "#A5D3FE");
  $("#Baki-4").css("background-color", "#A5D3FE");
  $("#Baki-5").css("background-color", "#A5D3FE");
}

/* Cambia Il Colore In Verde Del = Cursore / Bakis / HUD */
function ChangeHudInColorGreen(){
  $("#Cursor").css("border", "8px solid #B2F695");

  $("#Counter").css("color", "#B2F695");
  $("#Timer").css("color", "#B2F695");
  $("#Points").css("color", "#B2F695");
  $("#Finish").css("color", "#B2F695");
  $(".FinalScore").css("color", "#B2F695");


  $("#Baki-1").css("background-color", "#B2F695");
  $("#Baki-2").css("background-color", "#B2F695");
  $("#Baki-3").css("background-color", "#B2F695");
  $("#Baki-4").css("background-color", "#B2F695");
  $("#Baki-5").css("background-color", "#B2F695");
}

function Countdown(){
  var Time = 3;
    var Timer = setInterval(function(){
      document.getElementById("Counter").innerHTML = Time;
      Time -= 1;
    if(Time == -1){
      clearInterval(Timer);
      document.getElementById("Counter").innerHTML = "⠀" + "GO!";
    }
  }, 1000);
}

function TimerGame(){
  var TimeGame = 60
  var TimerGame = setInterval(function(){
      document.getElementById("TimeGame").innerHTML = TimeGame;
      TimeGame -= 1;
  if(TimeGame == -1){
      clearInterval(TimerGame);
      $("#Timer").css("display", "none");
      $("#Points").css("display", "none");
      $(".Container-FinishGame").css("display", "flex");
      document.getElementById("Finish").innerHTML = "FINISH!";
      document.getElementById("FinalPuntiScore").innerHTML = valuepoints;
      
      }
  }, 1000);
};
  
function AddPoints(){

  var clickbgmenocentro = 100

  valuepoints += 100;
  
  document.getElementById("Points").innerHTML = valuepoints;

}

$(".Container-SpawnBakis").click(function(){

  valuepoints -= 100

  document.getElementById("Points").innerHTML = valuepoints;

})

function RandomPositionBaki1() {
  var $Baki1 = $("#Baki-1");

  $("#Baki-1").click(function(){
      $("#Baki-1").css("display", "none"); 
  });

  $Baki1.each(function(){
      var _this = $(this);
 
      _this.fadeOut(500, function() {
          var maxLeft = $(".Container-SpawnBakis").width() - _this.width();
          var maxTop = $(".Container-SpawnBakis").height() - _this.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1))
          var topPos = Math.floor(Math.random() * (maxTop + 1))
 
          _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
      });
  });
}


function RandomPositionBaki2() {
  var $Baki2 = $("#Baki-2");

  $("#Baki-2").click(function(){
      $("#Baki-2").css("display", "none"); 
  });

  $Baki2.each(function(){
      var _this = $(this);

      _this.fadeOut(500, function() {
          var maxLeft = $(".Container-SpawnBakis").width() - _this.width();
          var maxTop = $(".Container-SpawnBakis").height() - _this.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1))
          var topPos = Math.floor(Math.random() * (maxTop + 1))

          _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
      });
  });
}

function RandomPositionBaki3() {
  var $Baki3 = $("#Baki-3");

  $("#Baki-3").click(function(){
      $("#Baki-3").css("display", "none"); 
  });

  $Baki3.each(function(){
      var _this = $(this);

      _this.fadeOut(500, function() {
          var maxLeft = $(".Container-SpawnBakis").width() - _this.width();
          var maxTop = $(".Container-SpawnBakis").height() - _this.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1))
          var topPos = Math.floor(Math.random() * (maxTop + 1))

          _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
      });
  });
}

function RandomPositionBaki4() {
  var $Baki4 = $("#Baki-4");

  $("#Baki-4").click(function(){
      $("#Baki-4").css("display", "none"); 
  });

  $Baki4.each(function(){
      var _this = $(this);

      _this.fadeOut(500, function() {
          var maxLeft = $(".Container-SpawnBakis").width() - _this.width();
          var maxTop = $(".Container-SpawnBakis").height() - _this.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1))
          var topPos = Math.floor(Math.random() * (maxTop + 1))

          _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
      });
  });
}

function RandomPositionBaki5() {
  var $Baki5 = $("#Baki-5");

  $("#Baki-5").click(function(){
      $("#Baki-5").css("display", "none"); 
  });

  $Baki5.each(function(){
      var _this = $(this);

      _this.fadeOut(500, function() {
          var maxLeft = $(".Container-SpawnBakis").width() - _this.width();
          var maxTop = $(".Container-SpawnBakis").height() - _this.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 1))
          var topPos = Math.floor(Math.random() * (maxTop + 1))

          _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
      });
  });
}



function SpawnBaki(){ 

  setInterval(function(){

  setTimeout(function() {
      RandomPositionBaki1();
  },0);

  setTimeout(function() {
      RandomPositionBaki2();
  },400);

  setTimeout(function() {
      RandomPositionBaki3();
  },900);

  setTimeout(function() {
      RandomPositionBaki4();
  },1500);

  setTimeout(function() {
      RandomPositionBaki5();
  },2100);

  }, 2000);

  setInterval(function(){

  setTimeout(function() {
    $("#Baki-1").css("display", "none");
    $("#Baki-2").css("display", "none");
    $("#Baki-3").css("display", "none");
    $("#Baki-4").css("display", "none");
    $("#Baki-5").css("display", "none");
  },60050);

}, 1);
  
}

/* Ogni Volta Che Viene Cliccato Il Bottone Start Vengono Eseguiti Tutti I Callback E Non... Delle Funzioni Scritte Nella Parte Superiore */
function StartGame(){
  $(".Container-StartGame").css("position", "absolute").animate({
      top:  -2000
  }, 2000);

  setTimeout(function() {
    $(".Container-Hud-Game").css("display", "flex"); 
    $(".Container-Counter").css("display", "flex");
    Countdown();
  },1300);

  setTimeout(function() {
    $(".Container-Counter").css("display", "none");
  },5800);

  setTimeout(function() {
    TimerGame();
  },3850);

  setTimeout(function() {
    SpawnBaki();
  },5000);

}