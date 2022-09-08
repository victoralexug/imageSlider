let sliderimage = document.querySelectorAll('.slide'),
            arrowleft = document.querySelector('#arrow-left'),
            arrowright = document.querySelector('#arrow-right'),
            current = 0;
        
        function reset(){
            for(let i = 0; i < sliderimage.length; i++){
                sliderimage[i].style.display = 'none';
            }
        }

        function startslide(){
            reset();
            sliderimage[0].style.display = 'block';
        }
        
        function slideleft(){
            reset();
            sliderimage[current - 1].style.display = 'block';
            current--;
        }

        function slideright(){
            reset();
            sliderimage[current + 1].style.display = 'block';
            current++;
        }

        arrowleft.addEventListener('click', function(){
            if(current === 0){
                current = sliderimage.length;
            }
            slideleft();
        });

        arrowright.addEventListener('click', function(){
            if(current === sliderimage.length - 1){
                current = - 1;
            }
            slideright();
        });

        startslide();
