const html=document.querySelector("html");

document.onkeydown=e=>{
  // Ctrl+Shift+Alt+Q
  if(e.altKey&&e.ctrlKey&&e.shiftKey&&e.code=="KeyQ"){
    if(true){ //html.classList.contains("color") || window.prompt("開発者専用操作です")=="2023"){
      html.classList.toggle("color");return false;
    }
  }
  return html.classList.contains("color") || (!/F[1-9][0-9]?/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
  //return html.classList.contains("color") || (/Numpad[0-9]|Digit[0-9]|NumpadSubtract|Minus/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
}

document.oncontextmenu=e=>{
  // ブロックを並べる領域以外での右クリックは禁止
  return html.classList.contains("color") || e.target.closest(".injectionDiv")!==null
}

// ポップアップでやる
// window.open("https://scratch.mit.edu/projects/editor/","_blank","scrollbars=yes,resizable=yes,fullscreen=yes")

// const NG_Label=[];
// const NG_dataid=[];
// const NG_

// const canvas_elements = document.querySelectorAll(".blocklyFlyout .blocklyBlockCanvas > *");
// let blocks = {};
// let tmp = [];
// canvas_elements.forEach(elem=>{
//   tmp.push(elem);
//   if(elem.classList.contains("blocklyFlyoutLabel") || elem.classList.contains("blocklyDraggable") || elem.classList.contains("blocklyFlyoutButton")){
//     blocks[elem.getAttribute("transform").match(/translate\(\d+,(\d+)\)/)[1]] = tmp;
//     tmp = [];
//   }
// })

// let keys=Object.keys(blocks)
// keys.sort((x,y)=>x-y)