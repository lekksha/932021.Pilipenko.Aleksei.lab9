let equal_pressed = false;
document.addEventListener('DOMContentLoaded', function(){
    // event listeners for numbers
    document.querySelectorAll("button[class *='_']").forEach(element =>{
        element.addEventListener('click',function(element){
            if(equal_pressed)
            {
                document.querySelector('input').value = "";
                document.querySelector('.input-gray').textContent = "";
                equal_pressed = false;
            }
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == true && document.querySelector('input').value.slice(-1) != '.')
            {
                document.querySelector('.input-gray').textContent = "";
            }
            document.querySelector('input').value+=element.target.textContent;
            document.querySelector('.input-gray').textContent+=element.target.textContent;
        })
    });
    // place dot
    document.querySelector('.dot').addEventListener('click', function(){
        if(document.querySelector('input').value.slice(-1) != '.')
        {
            document.querySelector('input').value+= '.';
            document.querySelector('.input-gray').textContent+='.'
        }
    })
    // clear event listener
    document.querySelector('.delete').addEventListener('click',function(){
        document.querySelector('input').value = "";
        document.querySelector('.input-gray').textContent = "";
    })
    // delete one symbol
    document.querySelector('.left').addEventListener('click', function(){
        document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
        document.querySelector('.input-gray').textContent=document.querySelector('.input-gray').textContent.slice(0,-1);
    })
    // operation
    document.querySelectorAll('.operation').forEach(element =>{
        element.addEventListener('click', function(element){
            if (equal_pressed){equal_pressed = false;}
            if(document.querySelector('input').value.length!=0 ){
                if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 1)
                {
                    document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
                    document.querySelector('.input-gray').textContent =document.querySelector('.input-gray').textContent.slice(0,-1);
                }
                document.querySelector('.input-gray').textContent+=element.target.textContent;
                document.querySelector('input').value+=element.target.textContent;
            }
        });
    })
    // calculate answer (event listener)
    document.querySelector('.equals').addEventListener('click',function(){
        if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 0)
        {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('.input-gray').textContent = document.querySelector('input').value;
            equal_pressed = true
        }

    })
})
