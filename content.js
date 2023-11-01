const html=document.querySelector("html");

document.onkeydown=e=>{
  // Ctrl+Shift+Alt+Qの動作
  if(e.altKey&&e.ctrlKey&&e.shiftKey&&e.code=="KeyQ"){
    html.classList.toggle("color");return false;
  }
  // 一部キー入力の無効
  // ブラックリスト:F1-F99のどれかである AltKeyが押されている CtrlKeyが押されている ShiftKeyが押されている
  return html.classList.contains("color") || (!/F[1-9][0-9]?/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
  // return html.classList.contains("color") || (/Numpad[0-9]|Digit[0-9]|NumpadSubtract|Minus/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
}

document.oncontextmenu=e=>{
  // ブロックを並べる領域以外での右クリックは無効
  return html.classList.contains("color") || e.target.closest(".injectionDiv")!==null
}

/*
const NG_Label=[];
const NG_dataid=[];
const NG_

const canvas_elements = document.querySelectorAll(".blocklyFlyout .blocklyBlockCanvas > *");
let blocks = {};
let tmp = [];
canvas_elements.forEach(elem=>{
  tmp.push(elem);
  if(elem.classList.contains("blocklyFlyoutLabel") || elem.classList.contains("blocklyDraggable") || elem.classList.contains("blocklyFlyoutButton")){
    blocks[elem.getAttribute("transform").match(/translate\(\d+,(\d+)\)/)[1]] = tmp;
    tmp = [];
  }
})

let keys=Object.keys(blocks)
keys.sort((x,y)=>x-y)
*/