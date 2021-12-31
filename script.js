const sel1 = document.querySelector("#birinci");
const miktar1 = document.querySelector("#num_birinci");
const sel2 = document.querySelector("#ikinci");
const miktar2 = document.querySelector("#num_ikinci");
const rateDom = document.querySelector("#rate");
const btn = document.querySelector("#degistirBtn");

//fonksiyon
function hesapla() {
  let birim1 = sel1.value;
  let birim2 = sel2.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/0bb6bc8f45771ae0439f2a2c/latest/${birim1}`
  )
    .then((res) => res.json())
    .then((data) => {
      let oran = data.conversion_rates[birim2].toFixed(2);
      miktar2.value = oran * miktar1.value;
      rateDom.textContent = `1 ${birim1} = ${oran} ${birim2}`;
    });
}

btn.addEventListener("click", () => {
  let temp = sel1.value;
  sel1.value = sel2.value;
  sel2.value = temp;
  hesapla();

});

// event listeners
sel1.addEventListener("change", hesapla);
sel2.addEventListener("change", hesapla);
miktar1.addEventListener("input", hesapla);
miktar2.addEventListener("input", hesapla);

hesapla();
