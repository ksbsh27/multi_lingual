
//time
$timer = 3000;
// element
$images = document.querySelectorAll("img");
// first image
$images[0].classList.style.opacity="1";

//img number
$imgNum = 0;
function showImg(){
    //all image '.show' reset
    for($i=0; $i < $images.length; $i++){
        $images[$i].classList.remove('show');
    }

    //imgNumber last?
    if($imgNum == $images.length -1){
        $imgNum = 0;
    }else{
        $imgNum++;
    }

    //now imgNumber add '.show'
    $images[$imgNum].classList.add('show');
    showImgTimer();
}

//timerFunction
function showImgTimer () {
    setTimeout(showImg, $timer);
}
showImgTimer();