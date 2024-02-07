// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// // (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)


// Chiedere all’utente di inserire una parola.
    // -inserisco parola in una const

// Creare una funzione per capire se la parola inserita è palindroma
        // -funzione che partira dal fondo e copiera la parola al contrario

// aggiunto evento al bottone
document.querySelector("button").addEventListener("click",
function()
{
    document.getElementById("risultato").innerText=``

    // dichiarazione parola utente
    const userword = document.getElementById("userwords").value;
    console.log(userword);
    
    // condizione che implica la unzione giu 
    if(iswordpalindrome(userword))
    {
        document.getElementById("risultato").innerText=`La parola è palindroma!!`

    }
    else
    {
        document.getElementById("risultato").innerText=`La parola non è palindroma`
    } 


}
)


//  funzione - nome - valore da inserire 
function iswordpalindrome(word)
{
    let invsertword="";

    // i=lunghezza parola -1 (perchè indici array partono da 0), i maggiore uguale di 0 e sarà i-- perchè sto andando a ritroso nella parola
    for(i=word.length - 1;i>=0;i--)
    {
        // inserisco carattere in invertword uguale al carattere su cui è la i nel ciclo sulla mia parola 
        invsertword += word[i];

    }

    if(invsertword==word)
    {
        return true;
    }
    else
    {
        return false;
    }

}