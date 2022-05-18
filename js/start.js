/* Quando La Pagina HTML Carica Gli Elementi Che Non Devono Essere Caricati Sono I Seguenti */
$("body").ready(function(){
  $(".title-selectmode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Titolo Seleziona La Modalita Di Gioco" / Display: NONE */
  $(".btn-backtohomefromselectmode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Torna Alla Home" / Display: NONE */
  $(".btn-standardmode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Chill" / Display: NONE */
  $(".textmodechill").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Chill" / Display: NONE */
  $(".btn-hardcoremode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Tryhard" / Display: NONE */
  $(".textmodetryhard").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Tryhard" / Display: NONE */
  $(".title-audiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Titolo Impostazioni Audio" / Display: NONE */
  $(".btn-backtohomefromaudiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Bottone Torna Alla Home" / Display: NONE */
  $(".container-slidersound").css("display", "none"); /* Schermata = Impostazioni Audio / "Slider Per Abbassare/Alzare Il Volume Della Soundtrack" / Display: NONE */
});

/* Quando Si Passa Dalla Schermata Home Alla Schermata Della Selezione Della Modalita Di Gioco Non Devono Essere Caricatati Questi Elemnti (None) E Invece Devono Essere Caricati Questi Elementi (Block) */
$(".btn-play").click(function(){
  $(".title-home").css("display", "none"); /* Schermata = Home / "Titolo Home" / Display: NONE */
  $(".btn-play").css("display", "none"); /* Schermata = Home / "Bottone Play" / Display: NONE */
  $(".title-selectmode").css("display", "block"); /* Schermata Seleziona La Modalita Di Gioco =  / "Titolo Titolo Seleziona La Modalita Di Gioco" / Display: BLOCK */
  $(".btn-backtohomefromselectmode").css("display", "block"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Torna Alla Home" / Display: BLOCK */
  $(".btn-standardmode").css("display", "block"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Chill" / Display: BLOCK */
  $(".textmodechill").css("display", "block"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Chill" / Display: BLOCK */
  $(".btn-hardcoremode").css("display", "block"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Tryhard" / Display: BLOCK */
  $(".textmodetryhard").css("display", "block"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Tryhard" / Display: BLOCK */
  $(".btn-audiosettings").css("display", "none"); /* Schermata = Home / "Bottone Audio" / Display: NONE */
  $(".title-audiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Titolo Impostazioni Audio" / Display: NONE */
  $(".btn-backtohomefromaudiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Bottone Torna Alla Home" / Display: NONE */
  $(".container-slidersound").css("display", "none"); /* Schermata = Impostazioni Audio / "Slider Per Abbassare/Alzare Il Volume Della Soundtrack" / Display: NONE */
});

/* Quando Si Passa Dalla Schermata Della Selezione Della Modalita Di Gioco Alla Schermata Home Non Devono Essere Caricatati Questi Elemnti (None) E Invece Devono Essere Caricati Questi Elementi (Block) */
$(".btn-backtohomefromselectmode").click(function(){
  $(".title-home").css("display", "block"); /* Schermata = Home / "Titolo Home" / Display: BLOCK */
  $(".btn-play").css("display", "block"); /* Schermata = Home / "Bottone Play" / Display: BLOCK */
  $(".title-selectmode").css("display", "none"); /* Schermata Seleziona La Modalita Di Gioco =  / "Titolo Titolo Seleziona La Modalita Di Gioco" / Display: NONE */
  $(".btn-backtohomefromselectmode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Torna Alla Home" / Display: NONE */
  $(".btn-standardmode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Chill" / Display: NONE */
  $(".textmodechill").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Chill" / Display: NONE */
  $(".btn-hardcoremode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Tryhard" / Display: NONE */
  $(".textmodetryhard").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Tryhard" / Display: NONE */
  $(".btn-audiosettings").css("display", "block"); /* Schermata = Home / "Bottone Audio" / Display: BLOCK */
  $(".title-audiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Titolo Impostazioni Audio" / Display: NONE */
  $(".btn-backtohomefromaudiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Bottone Torna Alla Home" / Display: NONE */
  $(".container-slidersound").css("display", "none"); /* Schermata = Impostazioni Audio / "Slider Per Abbassare/Alzare Il Volume Della Soundtrack" / Display: NONE */
});

/* Quando Si Passa Dalla Schermata Home Alla Schermata Delle Impostazioni Audio Non Devono Essere Caricatati Questi Elemnti (None) E Invece Devono Essere Caricati Questi Elementi (Block) */
$(".btn-audiosettings").click(function(){
  $(".title-home").css("display", "none"); /* Schermata = Home / "Titolo Home" / Display: NONE */
  $(".btn-play").css("display", "none"); /* Schermata = Home / "Bottone Play" / Display: NONE */
  $(".title-selectmode").css("display", "none"); /* Schermata Seleziona La Modalita Di Gioco =  / "Titolo Titolo Seleziona La Modalita Di Gioco" / Display: NONE */
  $(".btn-backtohomefromselectmode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Torna Alla Home" / Display: NONE */
  $(".btn-standardmode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Chill" / Display: NONE */
  $(".textmodechill").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Chill" / Display: NONE */
  $(".btn-hardcoremode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Tryhard" / Display: NONE */
  $(".textmodetryhard").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Tryhard" / Display: NONE */
  $(".btn-audiosettings").css("display", "none"); /* Schermata = Home / "Bottone Audio" / Display: NONE */
  $(".title-audiosettings").css("display", "block"); /* Schermata = Impostazioni Audio / "Titolo Impostazioni Audio" / Display: BLOCK */
  $(".btn-backtohomefromaudiosettings").css("display", "block"); /* Schermata = Impostazioni Audio / "Bottone Torna Alla Home" / Display: BLOCK */
  $(".container-slidersound").css("display", "block"); /* Schermata = Impostazioni Audio / "Slider Per Abbassare/Alzare Il Volume Della Soundtrack" / Display: BLOCK */
});

/* Quando Si Passa Dalla Schermata Delle Impostazioni Audio Alla Schermata Home Non Devono Essere Caricatati Questi Elemnti (None) E Invece Devono Essere Caricati Questi Elementi (Block) */
$(".btn-backtohomefromaudiosettings").click(function(){
  $(".title-home").css("display", "block"); /* Schermata = Home / "Titolo Home" / Display: BLOCK */
  $(".btn-play").css("display", "block"); /* Schermata = Home / "Bottone Play" / Display: BLOCK */
  $(".title-selectmode").css("display", "none"); /* Schermata Seleziona La Modalita Di Gioco =  / "Titolo Titolo Seleziona La Modalita Di Gioco" / Display: NONE */
  $(".btn-backtohomefromselectmode").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Bottone Torna Alla Home" / Display: NONE */
  $(".btn-standardmode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Chill" / Display: NONE */
  $(".textmodechill").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Chill" / Display: NONE */
  $(".btn-hardcoremode").css("display", "none"); /*Schermata = Seleziona La Modalita Di Gioco / "Bottone Tryhard" / Display: NONE */
  $(".textmodetryhard").css("display", "none"); /* Schermata = Seleziona La Modalita Di Gioco / "Scritta Come Funziona La Modalita Di Gioco Tryhard" / Display: NONE */
  $(".btn-audiosettings").css("display", "block"); /* Schermata = Home / "Bottone Audio" / Display: BLOCK */
  $(".title-audiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Titolo Impostazioni Audio" / Display: NONE */
  $(".btn-backtohomefromaudiosettings").css("display", "none"); /* Schermata = Impostazioni Audio / "Bottone Torna Alla Home" / Display: NONE */
  $(".container-slidersound").css("display", "none"); /* Schermata = Impostazioni Audio / "Slider Per Abbassare/Alzare Il Volume Della Soundtrack" / Display: NONE */
});

/* Funzione Collegata Agli Onclick Dei Bottoni Che Ogni Volta Che Essi Vengono Premuti Fa Partire Un Suono*/
function PlaySound(){
  document.getElementById("clickbutton").play();
}

function PlaySoundAndClosePage(){
  document.getElementById("clickbutton").play();

  setTimeout(function() {
    window.close()
}, 700);
}

var slider = document.getElementById("slider");
var volumeShow = document.getElementById("volume_show");
var soundtrack = document.getElementById("soundtrack")

slider.oninput = function(){
  volumeShow.innerHTML = this.value;
  soundtrack.volume = this.value / 100;
}