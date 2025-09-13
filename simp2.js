let disP = document.getElementById("products");
let inp = document.getElementById("inp");
let sbtn = document.getElementById("sbtn");
let abtn = document.getElementById("abtn");
let total = 0;
let products = [
  {
    pid: 1,
    name: "Xiaomi TV",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, voluptatibus.`,
    price: 29000,
    dis: 41,
    rprice: 49000,
    qty: 2179,
    category: "Electronics",
    sqty: 1,
    img: (src =
      "https://m.media-amazon.com/images/I/71HI+VF6ZXL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg"),
  },
  {
    pid: 2,
    name: "Samsung TV",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, voluptatibus.`,
    price: 23000,
    dis: 10,
    rprice: 49000,
    qty: 121,
    category: "Electronics",
    img: (src =
      "https://m.media-amazon.com/images/I/71HI+VF6ZXL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg"),

    sqty: 1,
  },
  {
    pid: 3,
    name: "Oppo Reno 3",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, voluptatibus.`,
    price: 3000,
    dis: 10,
    rprice: 9000,
    qty: 91,
    category: "Smart Phones",
    sqty: 1,
    img: (src =
      "https://m.media-amazon.com/images/I/71HI+VF6ZXL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg"),
  },
];
function displayProducts(productslist) {
  if (productslist.length === 0) {
    disP.innerHTML = `<div class="text-center text-danger">No products found.</div>`;
    return;
  }
  let cont = "";
  productslist.forEach((p) => {
    cont += ` <div class="col-md-4 mb-4">
          <div class="card shadow-sm border-0 rounded-3">
            <div class="card-header bg-white border-0 text-center">
              <img
                src=${p.img}
                class="img-fluid p-3"
                alt="Product Image"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold">${p.name}</h5>
              <p class="text-muted small">Product ID: ${p.pid}</p>
              <p class="text-muted small">${p.desc}</p>

              <p class="mb-2 text-secondary">Available: ${p.qty}</p>
              <p class="mb-2 text-secondary">Category: ${p.category}</p>

              <div class="d-flex align-items-center gap-2 mb-2">
                <h6 class="text-danger mb-0">${p.dis}% Off</h6>
                <h5 class="price text-dark mb-0">₹${p.price}</h5>
              </div>

              <button class="btn btn-danger btn-sm mb-2">Limited Deal</button>
              <p class="mb-1">
                <span class="text-muted">M.R.P.:</span>
                <span class="text-decoration-line-through text-secondary">
                  ₹${p.rprice}
                </span>
              </p>
              <p>
                <span class="text-muted">You Save:</span>
                <span class="text-success fw-bold"
                  >₹${p.rprice - p.price}</span
                >
              </p>

              
              <div
                class="d-flex justify-content-center align-items-center gap-3 my-3"
              >
                <button class="btn btn-outline-secondary btn-sm dec">-</button>
                <span class="border px-3 py-1 rounded quantity">1</span>
                <button class="btn btn-outline-secondary btn-sm inc">+</button>
                <h5 class="sprice text-dark mb-0" data-base="${p.price}">
                  ₹${p.price}
                </h5>
               
              </div>
             <div class="text-center mt-2">
            <span>Selected Qty: <span class="selectedQty">${
              p.sqty
            }</span></span>
          </div>
            </div>

            
            <div
              class="card-footer bg-white text-center d-flex justify-content-center gap-3"
            >
              <button class="btn btn-warning btn-sm cart">
                <i class="bi bi-cart-plus"></i> Add to Cart
              </button>
              <button class="btn btn-success btn-sm">
                <i class="bi bi-bag-check"></i> Buy Now
              </button>
            </div>
          </div>
        </div>`;
  });
  disP.innerHTML = cont;
}
displayProducts(products);

sbtn.addEventListener("click", () => {
  let txt = inp.value.trim().toLowerCase();
  console.log(txt);
  if (txt == "") {
    alert("enter a product");
    return;
  }
  let filter = products.filter((p) => p.name.toLowerCase().includes(txt));
  displayProducts(filter);
});

abtn.addEventListener("click", function () {
  let cat1 = document.getElementById("cat1");
  let cat2 = document.getElementById("cat2");
  let cat3 = document.getElementById("cat3");
  let cat4 = document.getElementById("cat4");
  let catall = document.getElementById("catall");
  let all = [cat1, cat2, cat3, cat4];
  let selcats = [];
  if (catall.checked) {
    selcats.push(all);
  } else {
    if (cat1.checked) selcats.push("Electronics");
    if (cat2.checked) selcats.push("Fashion");
    if (cat3.checked) selcats.push("Home");
    if (cat4.checked) selcats.push("Smart Phones");
  }

  let pricef = document.querySelectorAll('input[name="price"]:checked');

  let pricerange = pricef.length > 0 ? pricef[0].id : null;

  let filtered = products.filter((p) => {
    let catmatch =
      selcats.length === 0 ||
      selcats.includes(p.category) ||
      selcats.includes(all);

    let pricematch = true;
    if (pricerange === "price1") pricematch = p.price < 500;
    else if (pricerange === "price2")
      pricematch = p.price >= 500 && p.price <= 2000;
    else if (pricerange === "price3")
      pricematch = p.price >= 2000 && p.price <= 5000;
    else if (pricerange === "price4") pricematch = p.price > 5000;
    return catmatch && pricematch;
  });
  displayProducts(filtered);
});

let incb = document.querySelectorAll(".inc");
let decb = document.querySelectorAll(".dec");
let quantity = document.querySelectorAll(".quantity");
let priceels = document.querySelectorAll(".sprice");
let selectedQty = document.querySelectorAll(".selectedQty");

incb.forEach((inc1, i) => {
  let decbn = decb[i];
  let qty = quantity[i];
  let pr = priceels[i];
  let p = products[i];
  let selectedQtyEl = selectedQty[i];

  inc1.addEventListener("click", function () {
    if (p.sqty < p.qty) {
      p.sqty++;
      qty.textContent = p.sqty;
      pr.textContent = `₹${p.price * p.sqty}`;
      selectedQtyEl.textContent = p.sqty;
    } else {
      alert("Stock is limited for this product!");
    }
  });

  decbn.addEventListener("click", function () {
    if (p.sqty > 1) {
      p.sqty--;
      qty.textContent = p.sqty;
      pr.textContent = `₹${p.price * p.sqty}`;
      selectedQtyEl.textContent = p.sqty;
    }
  });
});
