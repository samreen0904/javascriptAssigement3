const loder = document.querySelector(".loader-container")
console.log(loder)
function showloder(){


}
function hideloder(){
loder.className = "hide"
}

async function getData() {
  let response = await fetch('https://dummyjson.com/products?limit=35');
  let data = await response.json();

  let finalcarts = [];
  hideloder()  

  const carts = data.products;

  for (let i = 0; i < carts.length; i++) {
    finalcarts.push(...carts[i].reviews);
  }

  const main = document.querySelector("#main");

  for (let i = 0; i < finalcarts.length; i++) {
   let img = carts[i].thumbnail;

main.innerHTML += `
  <div class="card costom carttt " style="width: 23rem;">
    <img class="card-img-top" src="${img}" alt="Product Image">

    <div class="card-body bg-black   costomborder ">

      <h5 class="card-title colchange costomborder ">${carts[i].title}</h5>
      <p class="card-text color-change">Price: $${carts[i].price}</p>
    </div>
  </div>
`;
  }
}

getData();
