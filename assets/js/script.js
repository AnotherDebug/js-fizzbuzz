/* 
----------------------------------FizzBuzz------------------------------------------

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1. Creare un ciclo for da 1 a 100;

1a. ad ogni multiplo di 3 stampare la stringa "Fizz";
2a. ad ogni multiplo di 5 stampare la stringa "Buzz";
3a. se multiplo sia di 3, sia di 5 stampare "FizzBuzz".


2. dichiaro la variabile che contiene il percorso del div 'boxes';

3. all'interno del mio ciclo, dichiaro una variabile dove aggiungo i div 'box';

4. aggiungo all'elemento div la classe 'box';

5. al div box aggiungo il metodo .append() con all'interno la variabile i;

6. inserisco per ogni istruzione condizionale corrispondente, le relative classi per distinguere i multipli in oggetto.

7. con innerHTML sovrascrivo il valore contenuto all'interno dell'elemento 'box' che deve essere stampato;

*/

const boxes = document.querySelector('.boxes');

for (let i = 1; i <= 100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.append(i);
  if (i % 3 === 0 && i % 5 === 0) {
    box.classList.add('bg-red-ad');
    box.innerHTML = 'FizzBuzz';
    boxes.append(box);
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    box.classList.add('bg-lightblue-ad');
    boxes.append(box);
  }
}
