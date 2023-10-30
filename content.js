const html=document.querySelector("html");

document.onkeydown=e=>{
  // Ctrl+Shift+Alt+Q
  if(e.altKey&&e.ctrlKey&&e.shiftKey&&e.code=="KeyQ"){
    if(true){ //html.classList.contains("color") || window.prompt("開発者専用操作です")=="2023"){
      html.classList.toggle("color");return false;
    }
  }
  return html.classList.contains("color") || (/Numpad[0-9]|Digit[0-9]/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
}

document.oncontextmenu=e=>{
  // ブロックを並べる領域以外での右クリックは禁止
  return html.classList.contains("color") || e.target.closest(".injectionDiv")!==null
}

// ポップアップでやる
// window.open("https://scratch.mit.edu/projects/editor/","_blank","scrollbars=yes,resizable=yes,fullscreen=yes")