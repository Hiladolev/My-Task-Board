//array
let notes = [];

const prettifyDate = (myDate) => {
  const myNewDate = myDate.split("-");
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};
const createNote = () => {
  let data = "";
  notes.map((item, index) => {
    data += `
      <div class="note" id="${index}">
      <button class="deleteBtn" onclick="deleteNote('${index}')"><span class="glyphicon glyphicon-remove"></span></button>
      <p class="info">${item.info}</p> <br/> <br/>
      <div class="dateNtime">${prettifyDate(item.date)} <br/> 
      ${item.time}</div>
      </div>
      `;
  });
  document.getElementById("myNotes").innerHTML = data;
};
//making string to object
const checkForData = () => {
  notes = JSON.parse(localStorage.getItem("notes"));
  if (notes == null) {
    notes = [];
  } else {
    createNote();
  }
};

checkForData();
//form function
const myAction = () => {
  let note = new Object();
  note.info = document.getElementById("taskInfo").value;
  note.date = document.getElementById("taskDate").value;
  note.time = document.getElementById("taskTime").value;
  notes.push(note);
  //making object to a json(string)
  localStorage.setItem("notes", JSON.stringify(notes));
  createNote();
  fadeNote();
  //reset form
  document.getElementById("form").reset();
};

//fade in notes function
const fadeNote = () => {
  let lastNote = notes.length - 1;
  let fadeLastNote = document.getElementById(`${lastNote}`);
  fadeLastNote.classList.add("fadeIn");
};

//delete note function
const deleteNote = (index) => {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  createNote();
};
