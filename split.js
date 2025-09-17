let friends = JSON.parse(localStorage.getItem("friends"))||[
  { id: 1, name: "Krithik", balance: 0 },
  { id: 2, name: "Bob", balance: 0 },
  { id: 3, name: "Alice", balance: 0 },
];

const friendList = document.getElementById("friendList");
const addFriendBtn = document.getElementById("addFriendBtn");
const billPanel = document.getElementById("billPanel");
const splitTitle = document.getElementById("splitTitle");
const totalBill = document.getElementById("totalBill");
const individual = document.getElementById("individualShare");
const otherExp = document.getElementById("otherExpenses");
const calcSplitBtn = document.getElementById("calcSplit");
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

let currentFriend = null;

function displayfriends(list = friends) {
  friendList.innerHTML = "";
  list.forEach((friend) => {
    let balanceText = "";
    if (friend.balance > 0) {
      balanceText = `<small class="text-success">Owes you ₹${friend.balance}</small>`;
    } else if (friend.balance < 0) {
      balanceText = `<small class="text-danger">You owe ₹${Math.abs(
        friend.balance
      )}</small>`;
    } else {
      balanceText = `<small class="text-secondary">All settled</small>`;
    }

    const friendDiv = document.createElement("div");
    friendDiv.className =
      "d-flex align-items-center justify-content-between mb-3";
    friendDiv.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <i class="fa fa-user fa-2x text-secondary"></i>
        <div>
          <h5 class="mb-0">${friend.name}</h5>
          ${balanceText}
        </div>
      </div>
      <button class="btn btn-outline-dark split" data-id="${friend.id}">Split</button>
    `;
    friendList.appendChild(friendDiv);
  });
}
displayfriends();

function save(){
    localStorage.setItem("friends",JSON.stringify(friends))
}
friendList.addEventListener("click", (e) => {
  if (e.target.classList.contains("split")) {
    const friendId = parseInt(e.target.dataset.id, 10);
    currentFriend = friends.find((f) => f.id === friendId);
    showBillPanel(currentFriend);
  }
});

function showBillPanel(friend) {
  splitTitle.textContent = `Split with ${friend.name}`;
  billPanel.classList.remove("d-none");
  totalBill.value = "";
  individual.value = "";
  otherExp.value = "";
}

calcSplitBtn.addEventListener("click", () => {

  if (!currentFriend) return;
if (!totalBill.value.trim() || !individual.value.trim() || !otherExp.value.trim()) {
    alert("Enter all expenses");
    return;   
}
  const bill = parseFloat(totalBill.value) || 0;    
  const myShare = parseFloat(individual.value) || 0;
  const other = parseFloat(otherExp.value) || 0;

  const payer = billPanel.querySelector(".dropdown-menu .active").textContent;

  const youShouldPay = myShare + other / 2;
  const friendShouldPay = bill - youShouldPay;

  let delta = 0;
  if (payer === "You") {
    delta = friendShouldPay;
  } else {
    delta = -youShouldPay;
  }

  currentFriend.balance += Math.round(delta);
  save()
  displayfriends();
  alert("Split recorded!");
  billPanel.classList.add("d-none");
});

billPanel.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-item")) {
    e.preventDefault();
    billPanel
      .querySelectorAll(".dropdown-item")
      .forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
  }
});

addFriendBtn.addEventListener("click", () => {
  const name = prompt("Enter friend name:");
 
  
  if (name) {
   
    const newFriend = { id: Date.now(), name: name.trim(), balance: 0 };
    friends.push(newFriend);
    save();
    displayfriends();
  }
});

function searchFriend() {
  const q = searchBox.value.toLowerCase();
  displayfriends(friends.filter((f) => f.name.toLowerCase().includes(q)));
}
searchBtn.addEventListener("click", searchFriend);
searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchFriend();
});
