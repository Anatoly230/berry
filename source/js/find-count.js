function equating(domElem, colCount, rowCount = "undefined", section = "1fr") {
  let element = document.querySelector(`.${domElem}`),
    childrens,
    rows;

  if (element !== null) {
    childrens = element.childElementCount;
  } else {
    console.log(`element not found`)
    return undefined;
  }

  let count = childrens % colCount !== 0 ? Math.ceil(childrens / colCount) : childrens / colCount;

  if (colCount * rowCount < childrens) {
    rows = count;
  } else {
    rows = Number(rowCount) == Number(rowCount) ? count = rowCount : count;
  }
  element.style.gridAutoFlow = 'column';
  element.style.gridTemplateRows = `repeat(${rows}, auto)`;
  element.style.gridTemplateColumns = `repeat(${colCount}, ${section})`;
}




function getScreenSize() {
  if (this.screen.width < 768) {
    equating("field-group__wrapper", 2, 6);
    equating("field-group__wrapper--storage", 1);

  } else if (this.screen.width >= 768 && this.screen.width <= 1439) {
    equating("field-group__wrapper", 3, 4);
    equating("field-group__wrapper--storage", 2);
  } else {
    equating("field-group__wrapper", 5, undefined, "auto");
    equating("field-group__wrapper--storage", 3, undefined, "auto");
  }
}

window.onload = getScreenSize;

window.addEventListener("resize", getScreenSize)
