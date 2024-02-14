document.addEventListener("DOMContentLoaded", function () {
    let speed = 10;
    let element = '';
    let holder = '';
    let headertext = '';
    let headertext_holder = ''
    let logo_holder = document.getElementById('logo')
    let css_code_holder = document.getElementById('css-code-holder').innerText;
    let css_code = document.getElementById('css-text');
    let randnum = 0;
    
    var form = document.getElementById("input");
    function handleForm(event) { 
        event.preventDefault();
    } 
    form.addEventListener('submit', handleForm);



    const thisis_holder = document.getElementById('thisis-holder').innerText;
    let thisis = document.getElementById('thisis');

    const namecert_holder = document.getElementById('nameone').innerText;
    let namecert = document.getElementById('namecert');

    const certifier_holder = document.getElementById('certifier-holder').innerText;
    let certifier = document.getElementById('certifier');

    const certifier_position_holder = document.getElementById('certifier-position-holder').innerText;
    let certifier_position = document.getElementById('certifier-position');

    const issue_date_holder = document.getElementById('issue-date-holder').innerText;
    let issue_date = document.getElementById('issue-date');

    generatebtn = document.getElementById('generate')
    generatebtn.addEventListener('click', generate)

    function generate() {
        let language = document.getElementById('language-select').value;
        if(language == 'html') {
            headertext_holder = document.getElementById('headertext-holder-html').innerText;
            headertext = document.getElementById('headertext');
            logo_holder.setAttribute('src', `images\\HTMLLogo.png`)
        }
    
        if(language == 'css') {
            headertext_holder = document.getElementById('headertext-holder-css').innerText;
            headertext = document.getElementById('headertext');
            logo_holder.setAttribute('src', `images\\CSSLogo.png`)
        }
    
        if(language == 'js') {
            headertext_holder = document.getElementById('headertext-holder-js').innerText;
            headertext = document.getElementById('headertext');
            logo_holder.setAttribute('src', `images\\JavaScriptLogo.png`)
        }
        for (let k = 0; k < 7; k++) {
            if (k === 0) {
                element = css_code;
                holder = css_code_holder;
            } else if (k === 1) {
                element = headertext;
                holder = headertext_holder;
            } else if (k === 2) {
                element = thisis;
                holder = thisis_holder;
            } else if (k === 3) {
                element = namecert;
                holder = elevenCharacters(document.getElementById('nameone').value)
            } else if (k === 4) {
                element = certifier;
                holder = certifier_holder;
            } else if (k === 5) {
                element = certifier_position;
                holder = certifier_position_holder;
            } else if (k === 6) {
                element = issue_date;
                holder = issue_date_holder;
            }

            writeText(element, holder);
        }

    }

    function writeText(element, holder, idx = 0) {
        if (holder[idx] === ' ') {
            idx++;
            writeText(element, holder, idx);
            return;
        }

        element.innerText = holder.slice(0, idx);

        idx++;

        if (idx < holder.length) {
            setTimeout(writeText, speed, element, holder, idx);
        }
    }

    function randomSplice(name) {
        randnum = Math.floor((Math.random() * (parseInt(name.length) + 1)));
        return name.substring(0, randnum)+name.substring(randnum+1);
    }

    function randomSpace(name) {
        randnum = random(name.length)
        name = name.slice(0, randnum) + '_' + name.slice(randnum);
        
        
        return name



        var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);
    }

    function random(max) {
        return Math.floor((Math.random() * (parseInt(max) + 1)));
    }
    
    
    function elevenCharacters(name) {
        while (name.length < 11) {
            console.log(name)
            name = randomSpace(name)
        }
        while (name.length > 11) {
            console.log(name)
            name = randomSplice(name)
        }
        if(name.length == 11) {
            return(name + ' ');
        }
        return;
    }

    // generate();
});

