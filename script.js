/* BOTÃO EXPLORAR */

const btnExplorar = document.getElementById("btnExplorar");

if(btnExplorar){

    btnExplorar.addEventListener("click", ()=>{

        const cards = document.querySelector(".cards");

        cards.scrollIntoView({
            behavior:"smooth"
        });

    });

}

/* FORMULÁRIO */

const form = document.getElementById("formContato");

if(form){

    form.addEventListener("submit", (e)=>{

        e.preventDefault();

        alert("Mensagem enviada com sucesso!");

        form.reset();

    });

}

/* CURSOR PEIXE */

const peixe = document.createElement("div");

peixe.classList.add("peixe-cursor");

document.body.appendChild(peixe);

document.addEventListener("mousemove", (e)=>{

    peixe.style.left = e.clientX + "px";

    peixe.style.top = e.clientY + "px";

});

/* ABRIR */

pontos.forEach((ponto)=>{

    ponto.addEventListener("click", ()=>{

        paisNome.innerText =
        ponto.dataset.pais;

        peixeNome.innerText =
        ponto.dataset.peixe;

        equipamentoNome.innerText =
        ponto.dataset.equipamento;

        dicaNome.innerText =
        ponto.dataset.dica;

        painel.classList.add("ativo");

    });

});

/* FECHAR */

if(fecharPainel){

    fecharPainel.addEventListener("click", ()=>{

        painel.classList.remove("ativo");

    });

}
