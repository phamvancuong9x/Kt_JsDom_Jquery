const getElmArrowLeft = $('.arrow_left')
const getElmArrowRight=$('.arrow_right')
const getElmSliderItem=$('.slider__item')
const lengthSlider= getElmSliderItem.length;
function arrowLeft(index){
    getElmArrowLeft.click(function(){
        for(let i=0;i<=index;i++){ 
            if(i==index){
                getElmSliderItem[index].classList.remove('active')
                getElmSliderItem[0].classList.add('active')
            }
            if(getElmSliderItem[i].classList.contains('active'))
            {
                getElmSliderItem[i].classList.remove('active')
                getElmSliderItem[i+1].classList.add('active')
                return;
            }
        }
    })
}
function arrowRight(index){
    getElmArrowRight.click(function(){
        for(let i=index;i>=0;i--){
            if(i==0){
                getElmSliderItem[0].classList.remove('active')
                getElmSliderItem[index].classList.add('active')
            }
            if(getElmSliderItem[i].classList.contains('active'))
            {
                getElmSliderItem[i].classList.remove('active')
                getElmSliderItem[i-1].classList.add('active')
                return;
            }
        }
    })
}
arrowRight(lengthSlider-1);
arrowLeft(lengthSlider-1)