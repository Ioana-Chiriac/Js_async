const promise = new Promise((resolve, reject) => {
    const resolved = true;

    setTimeout (() => {
        if (resolved) {
            resolve (`valoare dupa rezolvare`);
        } else {
            reject(`valoare dupa respingere`);
        }
    }, 2000);
});

promise.then((resolvedValue) => {
    console.log(`sa rezolvat cu valoare`); 
}).catch((rejectedValue) => {
    console.log(`S-a respins cu valoarea`);
}).finally(()=> {
    console.log(`se executa mereu`);
})

console.log(`codul se executa simultan cu cel de sus dar ecele de sus au un lag de 2 secunde`);
