// get all the needed data thru queryselectors
const todoText= document.querySelector('.todoItem');
const getBtn = document.querySelector('.addBtn');
const getUl = document.getElementsByTagName('ul')[0];

// to add event listeners 
getBtn.addEventListener('click', getMemoBtn);

getUl.addEventListener('click', auxBtn, false);
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
        compBtn.innerHTML= '<p>_/</p>';
         createDiv.appendChild(compBtn);

         //trashBtn
         const trashBtn = document.createElement('button');
         trashBtn.classList.add('trash_Btn');
          trashBtn.innerHTML= '<p>x</p>';
           createDiv.appendChild(trashBtn);
        //clear text input
        todoText.value= "" ;
   
};

function auxBtn(e){
const itemClicked = e.target;

//delete btn when clicked
if(itemClicked.classList[0] === 'trash_Btn'){
   itemClicked.parentElement.remove();
}
   //complete btn
   if (itemClicked.classList[0] === 'doneBtn'){
      const todo = itemClicked.parentElement
      todo.classList.toggle('donBtn');
   }

}
