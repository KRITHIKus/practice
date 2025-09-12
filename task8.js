let tb1 = document.getElementsByClassName("data")[0];
let asec = document.getElementById("asec");
let dsec = document.getElementById("dsec");
let all = document.getElementById("all");
let filterBtn = document.getElementById("filter");
let minInput = document.getElementById("minPrice");
let maxInput = document.getElementById("maxPrice");
let sel = document.getElementById("categorySelect");
let psearch = document.getElementById("productSearch");
let pname = document.getElementById("name");
let pprice = document.getElementById("price");
let pcategory = document.getElementById("Category");
let addp = document.getElementById("addp");
let stored = localStorage.getItem("products");
let edit = null;
let products = stored
  ? JSON.parse(stored)
  : [];

function dis(productlist = products) {
  let content = "";

  productlist.forEach((s) => {
    content += `
        <tr>
            <td>${s.id}</td>
            <td>${s.product}</td>
            <td>${s.category}</td>
            <td>${s.price}</td>
            <td ><button class="btn btn-sm btn-info ms-2 update" data-id="${s.id}">🖊️</button>
          <button class="btn btn-sm btn-info ms-2 delete" data-id="${s.id}">❌</button></td>
        </tr>`;
  });

  tb1.innerHTML = content;

  let updatebtn = document.querySelectorAll(".update");
  updatebtn.forEach((btn) => {
    btn.addEventListener("click", function(){
      let id = parseInt(this.getAttribute("data-id"));
      let product = products.find((s) => s.id === id);
      pname.value = product.product;
      pcategory.value = product.category;
      pprice.value = product.price;

      edit = id;
      addp.textContent = "Update Product";
    });
  });

  let delbtn = document.querySelectorAll(".delete");
    delbtn.forEach(btn=>{
  btn.addEventListener('click',function(){
    let id = parseInt(this.getAttribute('.data-id'))
    products=products.filter(s=> s.id !==id)
    dis(products)
    save()
    })
  });
  
}
function populateCategories() {
  let categories = [...new Set(products.map((p) => p.category.toLowerCase()))];

  sel.innerHTML = `<option value="">All Categories</option>`;

  categories.forEach((cat) => {
    let option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    sel.appendChild(option);
  });
}

function save() {
  localStorage.setItem("products", JSON.stringify(products));
}
dis(products);
populateCategories();
asec.addEventListener("click", () => {
  let asort = [...products].sort((a, b) => a.price - b.price);
  dis(asort);
});

dsec.addEventListener("click", () => {
  let dsort = [...products].sort((a, b) => b.price - a.price);
  dis(dsort);
});

all.addEventListener("click", () => {
  dis(products);
});

filterBtn.addEventListener("click", () => {
  let min = parseFloat(minInput.value);
  let max = parseFloat(maxInput.value);

  let searchTerm = psearch.value.toLowerCase();

  if (isNaN(min) || isNaN(max)) {
    alert("enter value");
    return;
  }
  let filtered = products.filter((p) => {
    let wprice = p.price >= min && p.price <= max;
    let matchproduct = p.product.toLowerCase().includes(searchTerm);
    return wprice && matchproduct;
  });
  if (filtered.length === 0) {
    alert("No products found in this range");

    reset();

    return;
  }
  dis(filtered);
});

sel.addEventListener("change", function () {
  let selcat = sel.value;
  let filtered = products.filter((p) =>
    selcat ? p.category.toLowerCase() === selcat.toLowerCase() : true
  );
  dis(filtered);
});
psearch.addEventListener("input", function () {
  let searchTerm = psearch.value.toLowerCase();
  let filtered = products.filter((p) =>
    p.product.toLowerCase().includes(searchTerm)
  );
  dis(filtered);
});

addp.addEventListener("click", () => {
  let name = pname.value.trim();
  let price = parseFloat(pprice.value.trim());
  let category = pcategory.value.trim();
  if (name === "" || isNaN(price) || category === "") {
    alert("enter values");
    return;
  }

  let newid =
  products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  let newproduct = {
    id: newid,
    product: name,
    category: category,
    price: parseFloat(price),
  };
  if(edit){
    let index= products.findIndex(p=>p.id ===edit)
    products[index]=newproduct
    edit = null
    addp.textContent="Add Product"
  }
  else{
    products.push(newproduct)
  }
  
  save();
  dis(products);

  pname.value = "";
  pprice.value = "";
  pcategory.value = "";
});

function reset() {
  dis(products);
  minInput.value = "";
  maxInput.value = "";
  sel.value = "";
  psearch.value = "";
}
