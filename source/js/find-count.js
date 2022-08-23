function equating(domElem, colCount) {
  let element = document.querySelector(`.${domElem}`);
  if (element !== null) {

    let childrens = element.childElementCount;
    let count;

    if (childrens % colCount !== 0) {
      count = Math.ceil(childrens / colCount)
    } else {
      count = childrens / colCount;
    }
    element.style.gridAutoFlow = 'column';
    element.style.gridTemplateRows = `repeat(${count}, auto)`;
    element.style.gridTemplateColumns = `repeat(${colCount}, 1fr)`;
  } else {
    console.log(`element not found`)
  }
}

equating("advantages", 2);
