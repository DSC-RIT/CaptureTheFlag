function PlantSeed() {
  var seedstring = document.getElementById("seed").value;
  localStorage.setItem("myseed", seedstring);
  Math.seedrandom(seedstring);
  var random1 = Math.random().toFixed(2);
  var random2 = Math.random().toFixed(2);
  var random3 = Math.random().toFixed(2);
  var random4 = random1 + random2 + random3;
  window.alert(random4);
}

async function DisplayFlag() {
  const response = await fetch("/eval", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      myHash: document.querySelector("#myhash").value,
    }),
  });
  const body = await response.json();
  if (body.flag) {
    alert(body.flag);
  }
}
