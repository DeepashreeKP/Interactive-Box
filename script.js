function toggleBox(box) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(b => {
    if (b !== box) {
      b.classList.remove('expanded');
    }
  });

  box.classList.toggle('expanded');
}


function changeBoxColor(select, boxId) {
  const box = document.getElementById(boxId);
  box.style.backgroundColor = select.value;
}


function changeBoxSize(select, boxId) {
  const box = document.getElementById(boxId);
  if (select.value === "small") {
    box.style.transform = "scale(0.9)";
  } else if (select.value === "medium") {
    box.style.transform = "scale(1)";
  } else {
    box.style.transform = "scale(1.2)";
  }
}