const reviews = document.querySelector(".reviews");
const quotes = reviews.getElementsByClassName("quote");
const slideLeft = reviews.querySelector(".js-slide-left")
const slideRight = reviews.querySelector(".js-slide-right")

function getDirection(elem) {
  let direction = ""
  if (elem.classList.contains("js-slide-left")) {
    direction = "left"
  } else {
    direction = "right"
  }
  return direction;
}

function getSlidePos(elems) {
  let pos;
  for (let i = 0; elems.length > i; i++) {
    if (elems[i].classList.contains("quote--show")) {
      pos = i;
    }
  }
  return pos;
}


function leftSlide(elms) {
  if (elms.length === 1) {
    return;
  }
  let slidePos = getSlidePos(elms);

  if (slidePos > 0) {
    elms[slidePos - 1].classList.add("quote--show");
    elms[slidePos].classList.remove("quote--show");
  } else {
    elms[elms.length - 1].classList.add("quote--show");
    elms[slidePos].classList.remove("quote--show");
  }
}

function rightSlide(elms) {
  if (elms.length === 1) {
    return;
  }
  let slidePos = getSlidePos(elms);

  if (slidePos === elms.length - 1) {
    elms[0].classList.add("quote--show");
    elms[slidePos].classList.remove("quote--show");
  } else {
    elms[slidePos + 1].classList.add("quote--show");
    elms[slidePos].classList.remove("quote--show");
  }
}

slideLeft.addEventListener("click" || "touch", function (e) {
  e.preventDefault();
  leftSlide(quotes);
})

slideRight.addEventListener("click" || "touch", function (e) {
  e.preventDefault();
  rightSlide(quotes);
})



let slideMove = function(){
  return rightSlide(quotes);
}
