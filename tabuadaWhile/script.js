    let executado = false;

    function gerar() {
        if (executado) {
            alert ('A função já foi executada!');
            return;
        } 
        executado = true;

        const fragment = document.createDocumentFragment();

        let i = 1;
        while (i <= 10) {
            const div = document.createElement('div');
            div.classList.add('exib');

            const p = document.createElement('p');
            p.innerHTML += `<br>Tabuada do ${i}<br><br>`;
            div.appendChild(p);

            let t = 1;
            while (t <= 10) {
                p.innerHTML += `${i} x ${t} = ${i*t}<br><br>`;
                t++;
            }
            fragment.appendChild(div);
            i++;
        }

        document.getElementById('resultado').appendChild(fragment);
    }

    function tirar() {
        if (!executado) {
            alert ('Clique em exibir primeiro!');
        }
        executado = false;

        let textoEmbranco = '';
        document.getElementById('resultado').innerHTML = textoEmbranco;
    }