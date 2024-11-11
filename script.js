/*
Objednavka
Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

Založte HTML stránku s jedním tlačítkem
<button id="button-order">Objednat</button>
*/

/*
Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do stránky za tlačítko vypíše odstavec:
<p>Objednáno</p>
*/

const orderBtn = document.querySelector("#button-order");

// orderBtn.addEventListener("click", () => {
//   document.body.innerHTML += `<p>Objednáno</p>`;
// });

/*
Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.
*/

orderBtn.addEventListener("click", () => {
  orderBtn.textContent = `Objednáno`;
});
