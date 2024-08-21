let advice_id = document.querySelector(".advice-id");
let advice = document.querySelector(".advice");
let gen = document.querySelector(".icon");
async function get_advice() {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json();
    advice_id.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
}
window.onload = get_advice();
gen.onclick = () => {
  get_advice();
};
