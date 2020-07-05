  

    let images =[];   
    var imageholder = document.getElementById('imageholder');               
    var image =document.querySelectorAll("img");
    var dropzone = document.getElementById("dropZone");
    let draggedItem = null;
    var dragging =[];
    for(i=0; i<image.length;i++){
        images.push(image[i]);
        localStorage.setItem("dragged", JSON.stringify(dragging));
        images[i].addEventListener('dragstart',function(e){
        draggedItem=this;
       // imageholder.appendChild(this);
         setTimeout(function(){
             draggedItem.style.display = 'block';
         }, 0);
        });
        images[i].addEventListener('dragend',function(){
            draggedItem=this;
            setTimeout(function(){
                draggedItem.style.display = 'block';              
            }, 0);
        });
        dropzone.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        dropzone.addEventListener('dragenter', function(e){
            e.preventDefault();
        });
        dropzone.addEventListener('drop',function(e){
            this.append(draggedItem);
            
            $('.editingZone i').hide();
            $(draggedItem).resizable();
           // console.log(draggedItem);
            var nameDiv=document.getElementsByClassName('ui-resizable');
            console.log(nameDiv);
            $('#button').click(savedItem);

            function savedItem(){
            var outerWidth = $(nameDiv).outerWidth();
            var outerHeight = $(nameDiv) .outerHeight();
            var  dimElements = {Width:  outerWidth, outerHeight: outerHeight };
            console.log(draggedItem);
            dragging.push(dimElements);
            localStorage.setItem("dragged", JSON.stringify(dragging));
            $("#presets").append(draggedItem);
           // imageholder.appendChild(draggedItem);
            $('.editingZone').empty();
            $('.editingZone').append($('#icon'));          
        }     
       /*%K7@4LnTDwbwgrAQex^Y */
        });
    }
  
     
/*
var dropzone = document.getElementById('dropzone'),
var   draggable = document.getElementById('draggable');


function onDragStart(event) {
    event.dataTransfer.setData('text/html', null); //cannot be empty string
}

function onDragOver(event) {
    var counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText, 10) + 1;
}   

draggable.addEventListener('dragstart', onDragStart, false);
dropzone.addEventListener('dragover', onDragOver, false);
*/

/*

       // images.addEventListener('mousedown',mouseDown);
        function mouseDown(e){
          let src= e.target;
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup',mouseup);
            let prevX= e.clientX;
            let prevY= e.clientY;
            function mousemove(e){
                let newX= prevX-e.clientX;
                let newY= prevY-e.clientY;
                const rect= image.getBoundingClientRect();

                image.style.left = rect.left -newX +"px";
                image.style.top = rect.top -newY +"px";

                prevX= e.clientX;
                prevY= e.clientY;
            }
            function mouseup(e){
                alert("mouseUp");
                window.removeEventListener('mousemove', mousemove);
                window.removeEventListener('mouseup',mouseup);
            }
        }
*/