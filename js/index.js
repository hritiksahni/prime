        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btnbottle');
        let currentSlide = 1;
    
        var manualNav = function(manual){

            slides.forEach((slide) => {
                slide.classList.remove('active');

                btns.forEach((btnbottle) =>{
                    btnbottle.classList.remove('active')
                })
            })


            slides[manual].classList.add('active');
            btns[manual].classList.add('active');
        }

        btns.forEach((btnbottle, i) => {
            btnbottle.addEventListener("click", () => {
                manualNav(i)
                currentSlide = i
            })
        })


        var repeat = function(){
            let active = document.getElementsByClassName('active');
            let i = 0;

            var repeater = () => { 
                setTimeout(
                    function(){
                    [...active].forEach((activeSlide) => {
                        activeSlide.classList.remove('active')
                    });

                    slides[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;

                    if(slides.length == i){
                        i = 0;
                    }

                    repeater();
                }, 4000);
            }
            repeater();
        }
        repeat();







        // var meta = document.querySelector('.other-item-metamoon')
        // var grape = document.querySelector('.other-item-grape')
        // var ice = document.querySelector('.other-item-icepop')



        
        // const togglemeta = () => {
        //     meta.classList.add('visible')
        //     grape.classList.remove('visible')
        //     ice.classList.remove('visible')
        // }


        // const togglegrape = () => {
        //     meta.classList.remove('visible')
        //     grape.classList.add('visible')
        //     ice.classList.remove('visible')
        // }


        // const toggleice = () => {
        //     meta.classList.remove('visible')
        //     grape.classList.remove('visible')
        //     ice.classList.add('visible')
        // }

        // const removevisible = () => {

        //     meta.classList.remove('visible')
        //     grape.classList.remove('visible')
        //     ice.classList.remove('visible')
            

        // }


        // meta.addEventListener('click',() => toggleice())





