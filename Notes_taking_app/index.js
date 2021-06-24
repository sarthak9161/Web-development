
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
     add2 = [];
  } else {
    add2 = JSON.parse(notes);
  }
  // add2 = JSON.parse(localStorage.getItem("notes"));
  add2.push(addTxt.value);
   localStorage.setItem("notes", JSON.stringify(add2));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    add2 = [];
  } else {
    add2 = JSON.parse(notes);
  }
  let html = "";
  add2.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (add2.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!! Use "Add Note" section to add notes.`;
  }
}
function deleteNote(index) {
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      add2 = [];
    } else {
      add2 = JSON.parse(notes);
    }
  
    add2.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(add2));
    showNotes();
  }

  //Now we create search function
  let search=document.getElementById('searchTxt');

  search.addEventListener("input",function(){

    let inputValue=search.value.toLowerCase();
    let noteCards2=document.getElementsByClassName('noteCard');

    Array.from(noteCards2).forEach(function(element){

      let cardTxt=element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputValue)){
        element.style.display="block";
      }
      else{
        element.style.display="none"
      }
    })
  })