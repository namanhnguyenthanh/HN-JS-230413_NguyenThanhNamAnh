let playerName = document.getElementById("playerName");
let url = "http://localhost:3000/api/v1/player";
let addRoute = document.getElementById("addRoute");
let route = document.getElementById("route");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let { player } = data;
    console.log(player);
    playerName.innerHTML = `<th scope="col" >#</th>`;
    player.forEach((e, i) => {
      playerName.innerHTML += `
        <th scope="col">${e.name}</th>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
addRoute.addEventListener("click", (e) => {
  route.innerHTML += `<tr>
    <th scope="row">Round</th>
    <td><input type="number" /></td>
    <td><input type="number" /></td>
    <td><input type="number" /></td>
    <td><input type="number" /></td>
  </tr>`;
});
