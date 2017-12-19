
//default max values for the randomizer function,
//if you have more then 4 images in the folder change these numbers
var maxNumber = 3;
var minNumber = 1;

function randomNumber(max = maxNumber, min = minNumber){
    return Math.floor((Math.random() * max) + min);
}

function randomizeBackground(){
    $("html").css("background", "url(res/bgs/bg" + randomNumber() + ".jpg) no-repeat center center fixed");
}

function randomizeImage(){
    $("#image").attr("src", "res/images/img" + randomNumber() + ".jpg");
    $("#image").show();
}