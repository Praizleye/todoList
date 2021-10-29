// get all the needed data thru queryselectors
const todoText= document.querySelector('.todoItem');
const getBtn = document.querySelector('.addBtn');
const getUl = document.querySelector("ul.todoWrapper");
const select = document.querySelector(".select");

// to add event listeners 
getBtn.addEventListener('click', getMemoBtn);

getUl.addEventListener('click', auxBtn, false);

select.addEventListener("click", filterSelect);


//function
function getMemoBtn(e){
   e.preventDefault();
     
   //create div element
      const createDiv= document.createElement('div');
      createDiv.classList.add('todoContainer');
      getUl.appendChild(createDiv);

      // create li element
      const createLi= document.createElement('li');
      const gettextInput= document.createTextNode(todoText.value);
        createLi.appendChild(gettextInput);
        createDiv.appendChild(createLi);
         
        //create completed button
        const compBtn = document.createElement('button');
       compBtn.classList.add('doneBtn');
        compBtn.innerHTML= '<svg  class= "ticked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.39 22.73"><defs><style>.cls-1{fill:#fff;stroke:#1d1d1b;stroke-miterlimit:10;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M34.19,6.18,11.39,21.54A3.31,3.31,0,0,1,6.77,21L1,12.38A3.3,3.3,0,0,1,2.2,7.91h0a3.29,3.29,0,0,1,4.61.52l2.46,3.65a3.31,3.31,0,0,0,4.62.52L30.83,1.19a3.3,3.3,0,0,1,4.61.52h0A3.3,3.3,0,0,1,34.19,6.18Z"/></g></g></svg>';
         createDiv.appendChild(compBtn);

         //trashBtn
         const trashBtn = document.createElement('button');
         trashBtn.classList.add('trash_Btn');
          trashBtn.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.34 25.27"><defs><style>.cls-1{fill:#fff;stroke:#1d1d1b;stroke-miterlimit:10;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M20,24.46h0A1.93,1.93,0,0,1,17.48,24l-6.86-9.16h0L3.81,23.24a1.94,1.94,0,0,1-2.57.34h0A1.61,1.61,0,0,1,.87,21.2l7.55-9.28L2.07,3.43a1.62,1.62,0,0,1,.46-2.36h0A2,2,0,0,1,5.1,1.5l5.65,7.55,6.41-7.87A1.94,1.94,0,0,1,19.73.84h0a1.61,1.61,0,0,1,.37,2.38L13,12l7.55,10.1A1.61,1.61,0,0,1,20,24.46Z"/></g></g></svg>';
           createDiv.appendChild(trashBtn);
        //clear text input
        todoText.value= "" ;
   
};

function auxBtn(e){
const itemClicked = e.target;

//delete btn when clicked
if(itemClicked.classList[0] === 'trash_Btn'){
   const todo=itemClicked.parentElement;
   console.log(todo);
  todo.classList.add('fall');
   
  todo.addEventListener("transitionend", ()=> {
     todo.remove();
  });
   
}
   //complete btn
   if (itemClicked.classList[0] === 'doneBtn'){
      const todo=itemClicked.parentElement;
      todo.classList.toggle('donBtn');
   }
  
}



function filterSelect(e){
  const todos = getUl.childNodes;
 //getUl.text.remove();
  ///html/body/ul/text()

  todos.forEach( function(todo) {
  
     switch (e.target.value){

        case "All":
      todo.style.display = "flex";
         break;
        
        case "Completed":
     if (todo.classList.contains("donBtn")){
         todo.style.display= "flex";
        
      }
      else{
         todo.style.display="none";

      }
         break;
        
        case "UnComplete":
         if (!todo.classList.contains("donBtn")){
            todo.style.display= "flex";
         }
         else{
            todo.style.display="none";
         }
         break;
        
     }
  });

}
