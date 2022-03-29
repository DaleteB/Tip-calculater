let getTip = document.querySelector("#getTip");

getTip.addEventListener("click", () => {
  let totalBill = document.querySelector("#totalBill").value;
  let percentage = document.querySelector("#percentage").value;
  let totalPeople = document.querySelector("#totalPeople").value;

  //validate
  if (totalBill === "" || percentage == 0 || totalPeople == 0) {
    alert("Please enter values");
    return;
  }

  //calculate
  let total = (totalBill * percentage) / totalPeople;

  console.log(total);
});
