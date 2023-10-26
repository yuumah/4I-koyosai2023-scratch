html=document.querySelector("html");
document.onkeydown=e=>{
  if(e.altKey&&e.ctrlKey&&e.shiftKey&&e.code=="KeyQ"){
    html.classList.toggle("color");return false;
  }
  return true;
}