//empty array
myData = [];

const prettifyDate = (myDate) => {
  const myNewDate = myDate.split("-");
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};
const createNote = () => {
  var data = "";
  myData.map((item, index) => {
    data += `
      <div class="manageNote" id="${index}">
      <button class="deleteBtn" onclick="deleteNote('${index}')"><span class="glyphicon glyphicon-remove"></span></button>
      <p class="info">${item.info}</p> <br/> <br/>
      <div class="dateNtime">${prettifyDate(item.date)} <br/> 
      ${item.time}</div>
      </div>
      `;
  });
  document.getElementById("dataNote").innerHTML = data;
};
//making string to object
const checkForData = () => {
  myData = JSON.parse(localStorage.getItem("notes"));
  if (myData == null) {
    myData = [];
  } else {
    createNote();
  }
};

checkForData();
//form function
const myAction = () => {
  var note = new Object();
  note.info = document.getElementById("taskInfo").value;
  note.date = document.getElementById("taskDate").value;
  note.time = document.getElementById("taskTime").value;
  myData.push(note);
  //making object to a json(string)
  localStorage.setItem("notes", JSON.stringify(myData));
  createNote();
  // fade in
  fadeNote();
  //reset form
  document.getElementById("form").reset();
};

//fade in notes
const fadeNote = () => {
  var lastNote = myData.length - 1;
  var elNote = document.getElementById(`${lastNote}`);
  elNote.classList.add("fadeIn");
};

//delete note function
const deleteNote = (index) => {
  myData.splice(index, 1);
  // myData = myData.filter((note) => note.info != key);
  localStorage.setItem("notes", JSON.stringify(myData));
  createNote();
};
