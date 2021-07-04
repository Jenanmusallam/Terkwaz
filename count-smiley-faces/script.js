const smile = document.querySelector('.data-in-model');

const countSmileys = (array) => {
    let count = 0;
    array.forEach(val => {
        if (val.slice(0, 1) === ':' || val.slice(0, 1) === ';') {
            if (
                ((val.slice(1, 2) == '-' || val.slice(1, 2) == '~') && (val.slice(2, 3) == ')' || val.slice(2) == 'D'))
                || (val.slice(1, 2) == ')' || val.slice(1, 2) == 'D')
            ) {
                count++;
                smile.textContent = `Using (${count})  Smile  😊😄 ✅`;
            }
        }
        else {
            smile.textContent = `No Smile 😐🙄❌`;
        }//:) ;) :-D
    });
}
// const countSmileys2 = (array) => {
//     let x = [':-)', ':D', ':-)', ':-D'];

//     let count = 0;
//     array.forEach(val => {
//         var smile = false;
//         x.forEach(valx => {
//             console.log(val.includes(valx));
//             if (val.includes(valx)) {
//                 count++;
//                 smile = true;
//             }
//         })

//         if (smile) {
//             smile.textContent = `Using (${count})  Smile  😊😄 ✅`;
//             smile = false;
//         }
//         else {
//             smile.textContent = `No Smile 😐🙄❌`;
//         }
//     });
// }


// str.includes("world")
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// countSmileys(['1', '3', '2',':p']);
