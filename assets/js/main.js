const imgUrlArray = [
    '/assets/image/z4691792245994_5e8a3f1708a23397a9df038d69ace3ee.jpg',
    '/assets/image/z4691792584281_318f88e445da522e3378296d2ec8dc3f.jpg',
    '/assets/image/z4691792824295_101451c4b1062845902ebc172b88f8c0.jpg',
]
let curentImageIndex = 0

function changeImage(){
    const imageURL = imgUrlArray[curentImageIndex]
    document.querySelector('.banner').style.background=`url(${imageURL})`
    document.querySelector('.banner').style.backgroundSize=`auto`
    curentImageIndex = (curentImageIndex +1)% imgUrlArray.length

    if(curentImageIndex === 0){
        curentImageIndex == 0
    }
}

setInterval(changeImage,3000)