// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
//      -(questi 2 elementi andranno inseriti dall'html tramite 2 input)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//      -(reazione di una funzione che ci restituira in numero fuori)

// Sommiamo i due numeri
//      (come consigliato faremo una somma)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//      creazione della seconda funzione che ci restituisce se la somma dei 2 numeri è pari o dispari


// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
//          controllo con paramentro iniziale se sono uguali utente ha vinto senno ha perso da restituire valore  a schermo

let typeresult = document.getElementById("users_choise");
let numberuser = document.getElementById("number_user");
let sum=0;
const risultato=document.getElementById("risultato");

document.querySelector("button").addEventListener("click",
function()
{
    risultato.innerHTML="";
    // condizione se typeresult è diverso da pari e da dispari da messaggio errore
    
    // con questa stringa noi staimo prendendo i valori inseriti nell'input una volta premuto il bottone ,.valuetoLowerCase se lo scrive in maiuscolo cosi lo riportiamo in minuscolo
    typeresult=document.getElementById("users_choise").value.toLowerCase();
    
    
    if(typeresult != "pari" && typeresult != "dispari")
    {
        // messaggio
        alert("inserisci il valore corretto");
        location.reload();
    }
    else
    
    // assegnazione numero utente
    numberuser = Number(document.getElementById("number_user").value) ;
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    const computernumber = generateRandomNumber (5);
    console.log(computernumber);
    // stampato numero a schermo
    document.getElementById("randomnumber").innerText=`${computernumber}`;

    
    // Sommiamo i due numeri
    sum+= (numberuser+computernumber);
    

    // utilizzo funzione per dichiarare numeri pari o dispari
    const valuesum = pariodispari(sum);
    console.log(valuesum);
    document.getElementById("valuesum").innerText=`${valuesum}`;

    if(valuesum == typeresult)
    {
        // creazione elemento nell'html
        const newelement = document.createElement("div");
        // aggiunta classi all'elemento
        newelement.classList.add("bg-success","text-light","rounded","fs-3","my-2")
        // aggiunta significato elemento
        newelement.innerText=`Hai vinto!!`;
        // collegamento con html
        risultato.append(newelement);
        
    }
    else
    {
        // creazione elemento nell'html
        const newelement = document.createElement("div");
        // aggiunta classi all'elemento
        newelement.classList.add("bg-danger","text-black","rounded","fs-3","my-2")
        // aggiunta significato elemento
        newelement.innerText=`Hai perso ;)`;
        // collegamento con html
        risultato.append(newelement);
        
    }
    



}
)



// funzione numero random
function generateRandomNumber(maxnumber)
{
    // dichiarazione variabile randomica,Math.floor per restituire numero intero,Math.random per valore randomico,maxnumber valore massimo , +1 perchè parte da 0
    const randomnumber = Math.floor(Math.random()* maxnumber)+1 ;
    // mi dara il valore numerico uscito dalla nostra funzione;
    return randomnumber;
}


function pariodispari(number)
{
    if(number % 2 == 0)
    {
        return "pari";
    }
    else
    {
        return "dispari";
    }
    

}