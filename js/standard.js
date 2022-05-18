$("body").ready(function(){
    $(".container-counter").css("display", "none");
    $(".hud-game").css("display", "none");
    $("#baki1").css("display", "none"); 
    $("#baki2").css("display", "none"); 
    $("#baki3").css("display", "none"); 
    $("#baki4").css("display", "none"); 
    $("#baki5").css("display", "none"); 
  });

/* Curosre */
const cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth;
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

function ChangeColorYellow(){
    $("#cursor").css("border", "8px solid #FEDA75");

    $("#counter").css("color", "#FEDA75");
    $("#baki1").css("background-color", "#FEDA75");
    $("#baki2").css("background-color", "#FEDA75");
    $("#baki3").css("background-color", "#FEDA75");
    $("#baki4").css("background-color", "#FEDA75");
    $("#baki5").css("background-color", "#FEDA75");
    $("#timer").css("color", "#FEDA75");
    $("#points").css("color", "#FEDA75");
}

function ChangeColorOrange(){
    $("#cursor").css("border", "8px solid #FFBE79");

    $("#counter").css("color", "#FFBE79");
    $("#baki1").css("background-color", "#FFBE79");
    $("#baki2").css("background-color", "#FEDA75");
    $("#baki3").css("background-color", "#FEDA75");
    $("#baki4").css("background-color", "#FEDA75");
    $("#baki5").css("background-color", "#FEDA75");
    $("#timer").css("color", "#FFBE79");
    $("#points").css("color", "#FFBE79");

}

function ChangeColorRed(){
    $("#cursor").css("border", "8px solid #FF5151");

    $("#counter").css("color", "#FF5151");
    $("#baki1").css("background-color", "#FF5151");
    $("#baki2").css("background-color", "#FEDA75");
    $("#baki3").css("background-color", "#FEDA75");
    $("#baki4").css("background-color", "#FEDA75");
    $("#baki5").css("background-color", "#FEDA75");
    $("#timer").css("color", "#FF5151");
    $("#points").css("color", "#FF5151");
}

function ChangeColorPurple(){
    $("#cursor").css("border", "8px solid #9966CC");

    $("#counter").css("color", "#9966CC");
    $("#baki").css("background-color", "#9966CC");
    $("#timer").css("color", "#9966CC");
    $("#points").css("color", "#9966CC");
}

function ChangeColorBlue(){
    $("#cursor").css("border", "8px solid #A5D3FE");

    $("#counter").css("color", "#A5D3FE");
    $("#baki1").css("background-color", "#A5D3FE");
    $("#baki2").css("background-color", "#FEDA75");
    $("#baki3").css("background-color", "#FEDA75");
    $("#baki4").css("background-color", "#FEDA75");
    $("#baki5").css("background-color", "#FEDA75");
    $("#timer").css("color", "#A5D3FE");
    $("#points").css("color", "#A5D3FE");
}

function ChangeColorGreen(){
    $("#cursor").css("border", "8px solid #B2F695");

    $("#counter").css("color", "#B2F695");
    $("#baki1").css("background-color", "#B2F695");
    $("#baki2").css("background-color", "#FEDA75");
    $("#baki3").css("background-color", "#FEDA75");
    $("#baki4").css("background-color", "#FEDA75");
    $("#baki5").css("background-color", "#FEDA75");
    $("#timer").css("color", "#B2F695");
    $("#points").css("color", "#B2F695");
}

function Countdown(){
    var time = 3;
    var timer = setInterval(function(){
        document.getElementById("counter").innerHTML = time;
        time -= 1;
    if(time == -1){
        clearInterval(timer);
        document.getElementById("counter").innerHTML = "⠀" + "GO!";
        }
    }, 1000);
};

function TimerGame(){
    var timegame = 90
    var timergame = setInterval(function(){
        document.getElementById("timegame").innerHTML = timegame;
        timegame -= 1;
    if(timegame == -1){
        clearInterval(timergame);
        document.getElementById("timegame").innerHTML = "FINISH!";
        return SpawnBaki();
        }
    }, 1000);
};


    function RandomPositionBaki1() {
        var $baki1 = $("#baki1");

        $("#baki1").click(function(){
            $("#baki1").css("display", "none"); 
        });
 
        $baki1.each(function(){
            var _this = $(this);
       
            _this.fadeOut(500, function() {
                var maxLeft = $(".container-spawnbaki").width() - _this.width();
                var maxTop = $(".container-spawnbaki").height() - _this.height();
                var leftPos = Math.floor(Math.random() * (maxLeft + 1))
                var topPos = Math.floor(Math.random() * (maxTop + 1))
       
                _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
            });
        });
    }


    function RandomPositionBaki2() {
        var $baki2 = $("#baki2");

        $("#baki2").click(function(){
            $("#baki2").css("display", "none"); 
        });

        $baki2.each(function(){
            var _this = $(this);
   
            _this.fadeOut(500, function() {
                var maxLeft = $(".container-spawnbaki").width() - _this.width();
                var maxTop = $(".container-spawnbaki").height() - _this.height();
                var leftPos = Math.floor(Math.random() * (maxLeft + 1))
                var topPos = Math.floor(Math.random() * (maxTop + 1))
   
                _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
            });
        });
    }

    function RandomPositionBaki3() {
        var $baki3 = $("#baki3");

        $("#baki3").click(function(){
            $("#baki3").css("display", "none"); 
        });

        $baki3.each(function(){
            var _this = $(this);
   
            _this.fadeOut(500, function() {
                var maxLeft = $(".container-spawnbaki").width() - _this.width();
                var maxTop = $(".container-spawnbaki").height() - _this.height();
                var leftPos = Math.floor(Math.random() * (maxLeft + 1))
                var topPos = Math.floor(Math.random() * (maxTop + 1))
   
                _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
            });
        });
    }

    function RandomPositionBaki4() {
        var $baki4 = $("#baki4");

        $("#baki4").click(function(){
            $("#baki4").css("display", "none"); 
        });

        $baki4.each(function(){
            var _this = $(this);
   
            _this.fadeOut(500, function() {
                var maxLeft = $(".container-spawnbaki").width() - _this.width();
                var maxTop = $(".container-spawnbaki").height() - _this.height();
                var leftPos = Math.floor(Math.random() * (maxLeft + 1))
                var topPos = Math.floor(Math.random() * (maxTop + 1))
   
                _this.css({ left: leftPos, top: topPos }).fadeIn(100); 
            });
        });
    }

    function RandomPositionBaki5() {
        var $baki5 = $("#baki5");

        $("#baki1").click(function(){
            $("#baki5").css("display", "none"); 
        });

        $baki5.each(function(){
            var _this = $(this);
   
            _this.fadeOut(500, function() {
                var maxLeft = $(".container-spawnbaki").width() - _this.width();
                var maxTop = $(".container-spawnbaki").height() - _this.height();
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

}

var valuepoints = 0

function AddPoints(){

    valuepoints += 100;
    
    document.getElementById("points").innerHTML = valuepoints;
}

function StartGame(){
    $(".container-startgame").css("position", "absolute").animate({
        top:  -2000
    }, 2000);

    setTimeout(function() {
        $(".container-startgame").css("display", "none"); 
        $(".hud-game").css("display", "block");
        Countdown();
    },1300);

    setTimeout(function() {
        $(".container-counter").css("display", "block");
        Countdown();
    },900);
    
    setTimeout(function() {
        $("#counter").css("display", "none");
    },5800);

    setTimeout(function() {
        TimerGame();
    },3850);

    setTimeout(function() {
        SpawnBaki();
    },5000);
};