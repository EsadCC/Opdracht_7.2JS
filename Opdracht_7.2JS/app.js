let budget = prompt("Wat is uw budget?"); 
let product = 60;


if (budget >= product)
{
    let saldo = document.getElementById("saldo");

    saldo.innerHTML = "U heeft genoeg geld!"
    saldo.style.color = "green";
}
else
{
    let saldo = document.getElementById("saldo");

    saldo.innerHTML = "Helaas, te weinig geld!"
    saldo.style.color = "red";
}