var randomNumber = Math.floor((Math.random() * 102) + 19);

var wins = 0;
var losses = 0;

$("#random-number").text(randomNumber);

$("#wins-text").text("Wins: " + wins);
$("#losses-text").text("Losses: " + losses);

var counter = 0;

var crystalValue = 0;

var gem1 = Math.floor((Math.random() * 12) + 1);
var gem2 = Math.floor((Math.random() * 12) + 1);
var gem3 = Math.floor((Math.random() * 12) + 1);
var gem4 = Math.floor((Math.random() * 12) + 1);
    //gem 1

    // var imageCrystal1 = $("<img>");
    // imageCrystal1.addClass("gem1");
    // imageCrystal1.attr("src", "assets/images/gem1.jpg");
    // imageCrystal1.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    // $("#gem1").append(imageCrystal1);
    
    // // //gem 2

    // var imageCrystal2 = $("<img>");
    // imageCrystal2.addClass("gem2");
    // imageCrystal2.attr("src", "assets/images/gem2.jpg");
    // imageCrystal2.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    // $("#gem2").append(imageCrystal2);

    // //gem 3

    // var imageCrystal3 = $("<img>");
    // imageCrystal3.addClass("gem-image");
    // imageCrystal3.attr("src", "assets/images/gem4.jpg");
    // imageCrystal3.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    // $("#gem3").append(imageCrystal3);

    // //gem 4

    // var imageCrystal4 = $("<img>");
    // imageCrystal4.addClass("gem-image");
    // imageCrystal4.attr("src", "assets/images/gem3.jpg");
    // imageCrystal4.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    // $("#gem4").append(imageCrystal4);

    function resetTheGame() {
        var randomNumber = Math.floor((Math.random() * 102) + 19);
        $("#random-number").text(randomNumber);

        counter = 0;

        crystalValue = 0;

        gem1 = Math.floor((Math.random() * 12) + 1);
        gem2 = Math.floor((Math.random() * 12) + 1);
        gem3 = Math.floor((Math.random() * 12) + 1);
        gem4 = Math.floor((Math.random() * 12) + 1);

        $("#total-score-text").text("0");
    }

    function won() {
        alert("You won");
        wins++;
        $("#wins-text").text("Wins: " + wins);
        resetTheGame();
    }

    function lose() {
        alert("You lose");
        losses++;
        $("#losses-text").text("Losses: " + losses);
        resetTheGame();
    }

    $('.gem1').on ('click', function(){
        crystalValue = crystalValue + gem1;
    
        //console.log(crystalValue);
        counter += crystalValue;
    
        $("#total-score-text").text(crystalValue);

        if (crystalValue === randomNumber) {
            //alert("You won");
            won();
        }
        else if (crystalValue > randomNumber) {
            //alert("You lose");
            lose();
        }
    });  

    $('.gem2').on ('click', function(){
        crystalValue = crystalValue + gem2;
    
        //console.log(crystalValue);
        counter += crystalValue;
    
        $("#total-score-text").text(crystalValue);
        if (crystalValue === randomNumber) {
            //alert("You won");
            won();
        }
        else if (crystalValue > randomNumber) {
            //alert("You lose");
            lose();
        }
    }); 

    $('.gem3').on ('click', function(){
        crystalValue = crystalValue + gem3;
    
        //console.log(crystalValue);
        counter += crystalValue;
    
        $("#total-score-text").text(crystalValue);
        if (crystalValue === randomNumber) {
            //alert("You won");
            won();
        }
        else if (crystalValue > randomNumber) {
            //alert("You lose");
            lose();
        }
    }); 

    $('.gem4').on ('click', function(){
        crystalValue = crystalValue + gem4;
    
        //console.log(crystalValue);
        counter += crystalValue;
    
        $("#total-score-text").text(crystalValue);
        if (crystalValue === randomNumber) {
            //alert("You won");
            won();
        }
        else if (crystalValue > randomNumber) {
            //alert("You lose");
            lose();
        }
    }); 

    // $(".gem-image").on("click", function() {

    //     crystalValue = ($(this).attr("data-crystalvalue"));
    //     crystalValue = parseInt(crystalValue);

    //     //console.log(crystalValue);
    //     counter = crystalValue;
    //     counter += crystalValue;

    //     $("#total-score-text").text(crystalValue);
    
    //   });