document.querySelector("#blue").addEventListener("click", blue);
document.querySelector("#red").addEventListener("click", red);
document.querySelector("#green").addEventListener("click", green);

function blue() {
  return (
    (document.body.style.backgroundColor = "#2b12eb"),
    (document.body.style.color = "#fff")
  );
}

function red() {
  return(
    (document.body.style.backgroundColor = "#eb1212"),
    (document.body.style.color = "#fff")
  )
}

function green() {
  return (
    (document.body.style.backgroundColor = "#17d35f"),
    (document.body.style.color = "#fff")
  );
}
