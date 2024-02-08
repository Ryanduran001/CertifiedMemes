document.addEventListener("DOMContentLoaded", function () {

    const textEl = document.getElementById('css-code-holder').innerText
    let text = document.getElementById('css-text')
    let speed = 100
    let idx = 0;

    writeText()


    function writeText() {
        if(textEl[idx] == ' ') {
            idx++;
            return(writeText())
        }
        text.innerText = textEl.slice(0,idx)

        idx++;
        if(idx < textEl.length) {
            console.log(idx);
            return(setTimeout(writeText, speed))
            
        }
        else {
            return
        }
    }

})

// document.addEventListener("DOMContentLoaded", function () {

//     const textEl = document.getElementById('css-code').innerText;
//     let text = document.getElementById('css-text').innerText;
//     let speed = 200;

//     console.log(text);

//     writeText();

//     function writeText() {
//         for(idx = 0; idx < text.length; idx++) {
//             text = textEl.slice(0,idx);
//             console.log(text);
//         }
//         setTimeout(writeText, speed);
//     }

// })