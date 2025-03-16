document.addEventListener("DOMContentLoaded", function() {
  // your code here
    function onSubmit(event){
      //This will prevent my form from refreshing whenever i click on my submit button(Create New Task)
      event.preventDefault()

      //here we are getting the input values that i enter in my form
      const input = document.getElementById('new-task-description')
      const userInput = document.getElementById('user')
    
      //Here i am using trim in order to deal with the whitespaces that i may accidentally enter
      const text = input.value.trim()
      const userText = userInput.value.trim()
      
      
      //this clears my input field and userInput after my task is added in my to do list
      input.value= '';
      userInput.value = '';

      //this wiill help in ignoring any empty input on my task input and my user input
      if(text === '' || userText==='');
   
      

      //here we are creating the new list  in my todo list that i input
      const list = document.getElementById('tasks')
      //this is creating the list items in an unordered manner
      const listItems=document.createElement('li');
      listItems.textContent= `${text} ~ ${userText}`;



     
      //Here i am creating the delete button that will enable me to delete any task that i have completed
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x'

      //Here it is listening for an event which is click...when i click my button it will delete it.
      deleteButton.addEventListener('click',function(){
        listItems.remove()
      });

      //This is adding an element to the parent node(listItems)
      listItems.appendChild(deleteButton);
      list.appendChild(listItems);


    }






    

    const form = document.getElementById('create-task-form');
    const submit= document.getElementById('sub');
    form.addEventListener('submit',onSubmit)
    
    
});
