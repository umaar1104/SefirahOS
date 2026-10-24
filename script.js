
     function update(){
            var time = new Date().toLocaleDateString();
            var timetext = document.querySelector("#time")
            timetext.innerHTML = time;
    }
        setInterval(update, 1000)
 dragElement(document.getElementById("theme"))
dragElement(document.getElementById("mydiv"));
dragElement(document.querySelector("#notes"))
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcome = document.querySelector("#mydiv")

function closeWindow(element){
  element.style.display = "none"
}

var open = document.querySelector("#openWindow")
var close = document.querySelector("#closeWindow")

open.addEventListener("click", function(){
   openWindow(welcome)
})
close.addEventListener("click", function(){
   closeWindow(welcome)
})
var selectedIcon = undefined
function selectIcon(element){
  element.classList.add("selected")
  selectedIcon = element
}
function deselectIcon(element){
  element.classList.remove("selected")
  selectedIcon = undefined
}
function handleTap(element){
  if(element.classList.contains("selected")){
    deselectIcon(element)
    let targetWindow = document.querySelector(element.dataset.target);
    if (targetWindow) {
      openWindow(targetWindow);
    }
  }else{
    if (selectedIcon !== undefined) {
      deselectIcon(selectedIcon);
    }
    selectIcon(element);
  }
}
var theme = document.querySelector("#theme")
var notes = document.querySelector("#notes")
var notesClose = document.querySelector("#notesclose")
var openNotes = document.querySelector("#openNotes")
var themeClose = document.querySelector("#themeclose")
var themeIcon = document.querySelector("#themeIcon")
themeClose.addEventListener("click",() => closeWindow(theme))
notesClose.addEventListener("click",() => closeWindow(notes))
openNotes.addEventListener("click", () => openWindow(notes))
themeIcon.addEventListener("click", () => openWindow(theme))
var topbar = document.querySelector("#top")
var biggestIndex = 1;
let header1 = document.querySelector("#mydivheader")
let header2 = document.querySelector("#notesheader")

   header1.addEventListener("mousedown", () => 
    handleWindowTap(welcome)
  )
header2.addEventListener("mousedown", () => 
    handleWindowTap(notes)
  )
function handleWindowTap(element){
    biggestIndex += 1;
    element.style.zIndex = biggestIndex;
    topbar.style.zIndex = biggestIndex + 1;
}
function openWindow(element){
  element.style.display = "inline-block"
  biggestIndex++;
  element.style.zIndex = biggestIndex
  topbar.style.zIndex = biggestIndex + 1;
}

var content = [
  {
    title: "Welcome",
    date: "06/28/2023",
    content: `
              <p contenteditable="True"  style="background-color: #0000;">
          <span contenteditable="true">Welcome to <strong>Aizen Notes</strong>
            </br>
            </br>
            <img src=""
              style="width: 96px; border-radius: 16px" />
            </br>
            </br>
                You can write there your ideas and thoughts
          </span>
        <span contenteditable="true">
        
        </span>
        </p>
        
      `
  },
 {title: "Welcome",
    date: "06/28/2023",
    content: `
      <p contenteditable="True" style="background-color: #F0000;">
      <span contenteditable="true">Welcome to <strong>Hacker Notes</strong></span>
      <br><br>
      <img src="" style="width: 96px; border-radius: 16px;" />
      <br><br>
      This is a place where I store my thoughts as they come to mind.
      </p>
    `} 
]
function setNotesContent(index){
  var notesContent = document.querySelector("#notesContent")
  notesContent.innerHTML = content[index].content
}

setNotesContent(0)
function addToSideBar(index) {
	var sidebar = document.querySelector("#sidebar")
  var note = content[index]
var newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p style="margin: 0px;">
      ${note.title}
    </p>
    <p style="font-size: 12px; margin: 0px;">
      ${note.date}
    </p>
  `
  newDiv.addEventListener("click", function(){
    setNotesContent(index)
  })
  sidebar.appendChild(newDiv)
 
} 
 for(let i = 0; i < content.length;i++){
     addToSideBar(i)
  } 

var themehead = document.querySelector("#themeheader")
function changeTheme(image){
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) )," + "url(" + image + ")"
}
