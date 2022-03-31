
//time
$timer = 3000;
// element
$images = document.querySelectorAll("img");
// first image
$images[0].classList.add('show');

//img number
$imgNum = 0;
function showImg(){
    //all image '.show' reset
    for($i=0; $i < $images.length; $i++){
        $images[$i].classList.remove('show');
    }

    if($imgNum == $images.length -1){
        $imgNum = 0;
    }else{
        $imgNum++;
    }

    $images[$imgNum].classList.add('show');
    showImgTimer();
}

function showImgTimer () {
    setTimeout(showImg, $timer);
}
showImgTimer();