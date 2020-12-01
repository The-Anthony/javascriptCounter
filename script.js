// Numero che verrà cambiato
const number = document.querySelector('.number');

// Pulsanti + e -
const plusButton = document.querySelector('.plus');
const lessButton = document.querySelector('.less');

let count = 0;

// Funzione che incrementa il numero e attiva lo spin in senso orario
const rotateNumber = () => {
    number.style.animation = 'spinPlus 1s';
    count++;
    number.innerHTML = count;
    plusButton.style.backgroundColor = 'var(--emphColor)';  // Cambia colore al pulsante

    // Ripristina il colore del pulsante
    setTimeout(() => {
        plusButton.style.backgroundColor = 'var(--color)';
    }, 500)

    // Toglie l'animazione dopo che si è conclusa
    setTimeout(() => {
        number.style.animation = '';
    }, 1000)
}

// Funzione che decrementa il numero e attiva lo spin in senso anti-orario
const rotateNumber2 = () => {
    number.style.animation = 'spinLess 1s';  // Inserimento animazione
    count--;
    number.innerHTML = count;
    lessButton.style.backgroundColor = 'var(--emphColor)';  // Cambia colore al pulsante

    // Ripristina il colore del pulsante
    setTimeout(() => {
        lessButton.style.backgroundColor = 'var(--color)';
    }, 500)

    // Toglie l'animazione dopo che si è conclusa
    setTimeout(() => {
        number.style.animation = '';
    }, 1000)
    
}


// Associazione delle funzioni al click dei pulsanti 
plusButton.addEventListener('click', () => {
    rotateNumber();
})

lessButton.addEventListener('click', () => {
    rotateNumber2();
})