document.addEventListener("DOMContentLoaded", function () {
    let speed = 100;
    let element = '';
    let holder = '';

    const css_code_holder = document.getElementById('css-code-holder').innerText;
    let css_code = document.getElementById('css-text');

    const headertext_holder = document.getElementById('headertext-holder').innerText;
    let headertext = document.getElementById('headertext');

    const thisis_holder = document.getElementById('thisis-holder').innerText;
    let thisis = document.getElementById('thisis');

    const namecert_holder = document.getElementById('namecert-holder').innerText;
    let namecert = document.getElementById('namecert');

    const certifier_holder = document.getElementById('certifier-holder').innerText;
    let certifier = document.getElementById('certifier');

    const certifier_position_holder = document.getElementById('certifier-position-holder').innerText;
    let certifier_position = document.getElementById('certifier-position');

    const issue_date_holder = document.getElementById('issue-date-holder').innerText;
    let issue_date = document.getElementById('issue-date');

    function generate() {
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
                holder = namecert_holder;
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

        console.log(element)
        console.log(holder)

        element.innerText = holder.slice(0, idx);

        idx++;

        if (idx < holder.length) {
            setTimeout(writeText, speed, element, holder, idx);
        }
    }

    generate();
});