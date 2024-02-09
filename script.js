document.addEventListener("DOMContentLoaded", function () {
    let speed = 100
    let idx = 0;


    const css_code_holder = document.getElementById('css-code-holder').innerText
    let css_code = document.getElementById('css-text')

    writeText(css_code, css_code_holder)

    headertext_holder = document.getElementById('headertext-holder').innerText
    headertext = document.getElementById('headertext')


    thisis_holder = document.getElementById('thisis-holder').innerText
    thisis = document.getElementById('thisis')


    namecert_holder = document.getElementById('namecert-holder').innerText
    namecert = document.getElementById('namecert')
    

    certifier_holder = document.getElementById('certifier-holder').innerText
    certifier = document.getElementById('certifier')
    

    certifier_position_holder = document.getElementById('certifier-position-holder').innerText
    certifier_position = document.getElementById('certifier-position')


    issue_date_holder = document.getElementById('issue-date-holder').innerText
    issue_date = document.getElementById('issue-date')


    function writeText(id,text,idx = 0) {
        let element = document.getElementById(id);
        let holder = document.getElementById(text);

        if(holder[idx] == ' ') {
            idx++;
            return(writeText(element, holder))
        }
        element.innerText = holder.slice(0,idx)

        idx++;
        if(idx < holder.length) {
            console.log(idx);
            return(setTimeout(writeText, speed, element, holder))
            
        }
        else {
            return
        }
    }

    function generate() {

    }


   

})
