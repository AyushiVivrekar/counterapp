        const countElement = document.getElementById('count');
        const increaseBtn = document.getElementById('incrButton');
        const decreaseBtn = document.getElementById('descButton');
        const resetBtn = document.getElementById("resetButton")

        let count = 0;

        function updateCount() {
            countElement.textContent = count;
            updateColor()
        }
         
        function updateColor(){
            if(count>0){
                countElement.style.color ="green"
            }
            else if(count<0){
                countElement.style.color ="red"
            }
            else{
                countElement.style.color = "black"
            }
        } 

        increaseBtn.addEventListener('click', () => {
            count++;
            updateCount();
        });

        decreaseBtn.addEventListener('click', () => {
            count--;
            updateCount();
        })

        resetBtn.addEventListener('click',() =>{
            count =0;
            updateCount();

            
        })

    
