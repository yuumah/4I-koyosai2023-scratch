const html=document.querySelector("html");

document.onkeydown=e=>{
  // Ctrl+Shift+Alt+Qの動作
  if(e.altKey&&e.ctrlKey&&e.shiftKey&&e.code=="KeyQ"){
    html.classList.toggle("color");return false;
  }
  // 一部キー入力の無効(制限モードのみ)
  // ブラックリスト:F1-F99のどれかである AltKeyが押されている CtrlKeyが押されている ShiftKeyが押されている
  return html.classList.contains("color") || (!/F[1-9][0-9]?/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
  // return html.classList.contains("color") || (/Numpad[0-9]|Digit[0-9]|NumpadSubtract|Minus/.test(e.code)&&!e.altKey&&!e.ctrlKey&&!e.shiftKey);
}

document.oncontextmenu=e=>{
  // ブロックを並べる領域以外での右クリックは無効(制限モードのみ)
  return html.classList.contains("color") || e.target.closest(".injectionDiv")!==null
}

// 戻る無効
window.addEventListener("popstate", function (e) {
  history.pushState(null, null, null);
  return;
});
history.pushState(null, null, null);

/*
const NG_dataid=[
  "motion_turnright","motion_turnleft",
  "motion_goto","motion_glideto","motion_pointtowards","motion_pointindirection",
  "looks_sayforsecs","looks_say","looks_thinkforsecs","looks_think",
  "switchcostumeto$","looks_nextcostume","looks_switchbackdropto","looks_nextbackdrop",
  "looks_changesizeby","looks_setsizeto",
  "looks_changeeffectby","looks_seteffectto","looks_cleargraphiceffects",
  "looks_show","looks_hide",
  "sensing_setdragmode"
];

const canvas_elements = document.querySelectorAll(".blocklyFlyout .blocklyBlockCanvas > *");
let blocks = {};
let tmp = [];
canvas_elements.forEach(elem=>{
  tmp.push(elem);
  if(elem.classList.contains("blocklyFlyoutLabel") || elem.classList.contains("blocklyDraggable") || elem.classList.contains("blocklyFlyoutButton")){
    blocks[elem.getAttribute("transform").match(/translate\(\d+, ?(\d+)\)/)[1]] = tmp;
    tmp = [];
  }
})

let keys = Object.keys(blocks)
keys.sort((x,y)=>x-y)
let deff = 0;
keys.forEach((k,i)=>{
  blocks[k].forEach(elem=>{
    if(elem.tagName=="g"){
      let trans = elem.getAttribute("transform");
      elem.setAttribute("transform",trans.replace(/(?<=,) ?\d*\.?\d+/,(trans.match(/translate\(\d+, ?(\d*\.?\d+)\)/)[1]-deff)));
    }
    else{
      elem.setAttribute("y",elem.getAttribute("y")-deff);
    }
  });
  if(NG_dataid.includes(blocks[k].at(-1).getAttribute("data-id"))){
    console.log("NG",k);
    deff += (keys[i+1] - k);
    console.log(deff);
    blocks[k].forEach(elem=>{elem.style.scale=0});
  }
});
*/