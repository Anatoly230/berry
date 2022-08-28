
function equating(domElem, colCount, rowCount) {
  let element = document.querySelector(`.${domElem}`);
  let childrens;

  if (element !== null) {
    childrens = element.childElementCount;
  } else {
    console.log(`element not found`)
    return undefined;
  }

  let count = childrens % colCount !== 0 ? Math.ceil(childrens / colCount) : childrens / colCount;
  let rows = Number(rowCount) == Number(rowCount) ? count = rowCount : count;
  element.style.gridAutoFlow = 'column';
  element.style.gridTemplateRows = `repeat(${rows}, auto)`;
  element.style.gridTemplateColumns = `repeat(${colCount}, 1fr)`;
  element.style.columnGap = "35px";
}


function getScreenSize(){
  if (this.screen.width < 768) {
    equating("field-group__wrapper", 2, 6);
    equating("field-group__wrapper--storage", 1);

  } else if (this.screen.width >= 768 && this.screen.width <= 1439) {
    equating("field-group__wrapper", 3, 4);
    equating("field-group__wrapper--storage", 2);
  } else {
    equating("field-group__wrapper", 5);
    equating("field-group__wrapper--storage", 3);
  }
}

window.onload = getScreenSize;

window.addEventListener("resize", getScreenSize)
