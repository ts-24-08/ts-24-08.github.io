let counterValue = 0;

let incrementCounter = () => {
    console.log('Click');
    counterValue = counterValue + 1;

    let counter = document.getElementById('counter');
    counter.innerText = counterValue;
}

let heavyComputing = (callback) => {
    console.log('heavyComputing started!')
    setTimeout(() => {
        // let sum = 0;
        // // Unsere for Schleife soll so lange laufen bis ein Wert von 2 Miliarden erreicht ist
        // for (let counter = 0; counter < 2_000_000_000; counter++) {
        //     sum += 1;
        // }
        console.log('heavyComputing finished')
        callback('Hello from heavyComputing-Callback')
    }, 5000)
}

let helloPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello from Promise')
        }, 5000)
        // setTimeout(() => {
        //     reject('Error from Promise')
        // }, 5000)
    })
}



let getRandomInt = () => {
    return (Math.random() * 100).toFixed(0);
}

let randomPromise = () => {
    return new Promise((resolve, reject) => {
        let ranInt = getRandomInt();
        if (ranInt >= 50) {
            resolve(ranInt)
        } else {
            reject(ranInt)
        }
    })
}

// randomPromise()
// .then((result) => {
//     console.log('Random Integer is greater or equal 50!', result)
// })
// .catch((result) => {
//     console.log('Random Integer is smaller then 50!', result)
// })

// ASYNC / AWAIT

let randomIntegerCheckAsync = async () => {
    return new Promise((resolve, reject) => {
        let ranInt = getRandomInt();
        if (ranInt >= 50) {
            resolve(ranInt)
        } else {
            reject(ranInt)
        }
    })
}

// TRY / CATCH
// async function main() {
//     try {
//         let result = await randomIntegerCheckAsync();
//         console.log('RandomIntegar is greater then 50', result);
//     }
//     catch (error) {
//         console.error('Random Integer ist smaller then 50', error);
//     }
// }

async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(response);
    const items = await response.json();
    console.log(items);
}

main()

// DRY
// DONT REPEAT YOURSELF!!

// KISS
// KEEP IT SIMPLE STUPID

let a = 1
let b = 1

if (a == b) {
    c = true
} else {
    c = false
}

(a == b) ? c = true : c = false;



//

let customer = {
    firstname: 'Hans',
    lastname: 'Wurst'
}
let customer1 = {
    firstname: 'Fritz',
    lastname: 'Meier'
}
let customer2 = {
    firstname: 'Peter',
    lastname: 'Lustig'
}

let getFullName = (customer) => {
    if (
        !customer.lastname ||
        customer.lastname === '' ||
        !customer.firstname ||
        customer.firstname === ''
    ) return 'Missing values';

    return "Hallo, " + customer.firstname + " " + customer.lastname;
}


let input = '';
console.log('Typeof input: ', typeof (input));
console.log((input === true));

// let result = myFunc(66);
// console.log('result', result);


console.log(getFullName(customer))
console.log(getFullName(customer1))
console.log(getFullName(customer2))
console.log(getFullName({ firstname: '', lastname: 'Horst' }))

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((localMediaStream) => {
        const video = document.querySelector('video');
        video.srcObject = localMediaStream;
    })
    .catch((error) => {
        console.error('Unable to activate Device!', error);
    })
















// console.log('Promise start');
// helloPromise()
//     .then((result) => {
//         console.log('Return from Promise', result);
//     })
//     .catch((error) => {
//         console.log('Error from Promise', error)
//     })


// console.log('Promise end');



// console.log('Start Heavy Computing');
// heavyComputing((result) => {
//     console.log('Result of heavy computing:', result)
// });
// console.log('End Heavy Computing');