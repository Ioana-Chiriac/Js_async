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


// async await

async function getUsers() {
  let users = null;
    setTimeout(()=> {
        return [
            {username: `username1`, password: `pass1`},
            {username: `username2`, password: `pass2`}
        ]
    }, 3000)
    return users;
}

const users = getUsers();

users.then((users) => {
    console.log(users);
}).catch((e) => console.log((e)));

async function doSomethingWithUsers () {
    let users = await getUsers();
    console.log(`users din await: `, users);

}

doSomethingWithUsers();

// try / catch

try {
    const labels = [];
   // saySomething 
    console.log(`first label is ${labels[0]}`);
} catch (err) {
    console.log(`an error has oquere`, err);
} finally {
    console.log(`finally has executed`);
};

console.log (`after try/catch`);