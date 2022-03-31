
//time
$timer = 3000;
// element
$images = document.querySelectorAll("img");
// first image
$images[0].classList.add('show');
console.log($images);

//img number
$imgNum = 0;
function showImg(){
    //all image view reset
    for($i=0; i < $images.length; i++){
        $images[i].classList.remove('show');
    }
    
    for($i=0; i < $images.length -1 ; i++)
    $imgNum = 0;
}