
const input = document.getElementById("input-quantity");
let quantity = input.addEventListener("input", myValue);
let eventAtivo = "";
const body = document.getElementById("body")
//const header = document.getElementById("header")
//const footer = document.getElementById("footer")
const temaSite = document.getElementById("tema");
const temaColor_1 = document.getElementById("colorzin-1");
const temaColor_2 = document.getElementById("colorzin-2");
let tema = "";
const flex = document.getElementById("flex");
const btn = document.getElementById("btn");
//const btn_dica = document.getElementById("btn-dica")
const message = document.getElementById("message");
const easterEgg = document.getElementById("secret");
const easterEvent = [];
const img = document.getElementById("img");
const textDica = document.getElementById("dica")

//const style = document.getElementById("style").style

const start = btn.addEventListener("click", grid_Creation);
const dica = document.getElementById("btn-dica").addEventListener("click", conselho);

function grid_Creation() {
    if (flex.hasChildNodes()) {
        while (flex.firstChild) {
            flex.removeChild(flex.firstChild)
            message.textContent = ""
        }
    }
    if (eventAtivo != "") {
        eventAtivo == ""
        body.removeAttribute("style");
        //footer.removeAttribute("style");
    } 
    if (isFinite(quantity) && quantity < 100 ) {
        message.textContent = `${quantity}x${quantity}`;
        flex.style.width = `${quantity * 40}px`
        img.src=""
        for (let i = 1; i <= (quantity * quantity) ; i++) {
            let grid_Div = document.createElement("div");
            grid_Div.textContent = `${i}`
            grid_Div.setAttribute("onmouseover", "overColor(this)")
            grid_Div.setAttribute("onmouseleave", "leaveColor(this)")
            flex.appendChild(grid_Div)
        }
    } else if (quantity == "monster") {
        if (tema == "gojo") {
            tema = "";
            temazinho();
            temaSite.src=""
        } else {
            tema = "gojo";
            temazinho();
            message.textContent = ""
            temaSite.src="./assets/img/gojo.jpg"
        }
        img.src="./assets/img/monster.jpg"
    } else if (quantity == "cucki") {
        if (tema == "comunista") {
            tema = "";
            temazinho();
            temaSite.src=""
        } else {
            tema = "comunista";
            temazinho();
            message.textContent = ""
            temaSite.src="./assets/img/cookie.png"
        }
        img.src="./assets/img/cucki.png"
    } else if (quantity == "anime") {
        if (easterEvent.find(p => p.startsWith("anim"))) {
            img.src="./assets/img/anime.jpg"
        } else {
            img.src="./assets/img/anime.jpg"
            easterEvent.unshift("anime");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "casada") {
        if (easterEvent.find(p => p.startsWith("casad"))) {
            img.src="./assets/img/casada.jpg"
        } else {
            img.src="./assets/img/casada.jpg"
            easterEvent.unshift("casada");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "cu") {
        if (easterEvent.find(p => p.startsWith("cu"))) {
            img.src="./assets/img/cu.jpg"
        } else {
            img.src="./assets/img/cu.jpg"
            easterEvent.unshift("cu");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "bunda") {
        if (easterEvent.find(p => p.startsWith("bund"))) {
            img.src="./assets/img/espada.jpg"
        } else {
            img.src="./assets/img/espada.jpg"
            easterEvent.unshift("bunda");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "gay") {
        if (easterEvent.find(p => p.startsWith("ga"))) {
            img.src="./assets/img/gay.jpg"
        } else {
            img.src="./assets/img/gay.jpg"
            easterEvent.unshift("gay");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "hentai") {
        if (easterEvent.find(p => p.startsWith("hent")) && eventAtivo == "blur") {
            img.src=""
            eventAtivo = ""
            body.removeAttribute("style");
        } else if (easterEvent.find(p => p.startsWith("hent"))) {
            eventAtivo = "blur"
            img.src="./assets/img/hentai.jpg"
            body.style.filter = "blur(2px)";
            //footer.style.filter = "blur(2px)";
        } else {
            eventAtivo = "blur"
            img.src="./assets/img/hentai.jpg"
            easterEvent.unshift("hentai");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
            body.style.filter = "blur(2px)";
            //footer.style.filter = "blur(2px)";
        }
    } else if (quantity == "megu") {
        img.src="./assets/img/megu.jpg"
    } else if (quantity == "993") {
        if (easterEvent.find(p => p.startsWith("tokyo"))) {
            img.src="./assets/img/mil-menos-sete.png"
        } else {
            img.src="./assets/img/mil-menos-sete.png"
            easterEvent.unshift("tokyo");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity >= "1000" && isFinite(quantity)) {
        if (easterEvent.find(p => p.startsWith("muerte")) && eventAtivo == "Dark") {
            img.src="";
            eventAtivo = "";

            message.textContent = ""
            body.removeAttribute("style");
            body.style.background = "white"
            body.style.color = "black"
        } else if (easterEvent.find(p => p.startsWith("muerte"))) {
            eventAtivo = "Dark"
            body.style.background = "black"
            body.style.color = "white"
            message.textContent = "TA QUERENDO TRAVAR O TEU PC MANO???????"
            tema = ""
            temaSite.src=""
            temazinho()
            img.src="./assets/img/muerte.jpg"
        } else {
            eventAtivo = "Dark"
            tema = ""
            temazinho()
            temaSite.src=""
            body.style.background = "black"
            body.style.color = "white"
            message.textContent = "TA QUERENDO TRAVAR O TEU PC MANO???????"
            img.src="./assets/img/muerte.jpg"
            easterEvent.unshift("muerte");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "mulher") {
        if (easterEvent.find(p => p.startsWith("mulh"))) {
            img.src="./assets/img/mulher.jpg"
        } else {
            img.src="./assets/img/mulher.jpg"
            easterEvent.unshift("mulher");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "otaku") {
        if (easterEvent.find(p => p.startsWith("otak"))) {
            img.src="./assets/img/otaku.jpg"
        } else {
            img.src="./assets/img/otaku.jpg"
            easterEvent.unshift("otaku");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "pescotapa") {
        if (easterEvent.find(p => p.startsWith("pescot"))) {
            img.src="./assets/img/pescotapa.jpg"
        } else {
            img.src="./assets/img/pescotapa.jpg"
            easterEvent.unshift("pescotapa");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "áfrica" || quantity == "africa") {
        if (easterEvent.find(p => p.startsWith("africa"))) {
            img.src="./assets/img/piada.jpg"
        } else {
            img.src="./assets/img/piada.jpg"
            easterEvent.unshift("africa");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "sexo") {
        if (easterEvent.find(p => p.startsWith("sex"))) {
            img.src="./assets/img/sexo.jpg"
        } else {
            img.src="./assets/img/sexo.jpg"
            easterEvent.unshift("sexo");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "loli") {
        if (easterEvent.find(p => p.startsWith("lol"))) {
            img.src="./assets/img/yamero.jpg"
        } else {
            img.src="./assets/img/yamero.jpg"
            easterEvent.unshift("loli");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity >= 100 && quantity <= 992) {
        //message.textContent = "TA QUERENDO TRAVAR O TEU PC MANO???????"
        //if (!(! easterEvent.indexOf("limit"))) {
        if (easterEvent.find(p => p.startsWith("lim"))) {
            img.src="./assets/img/limit.png"
        } else {
            img.src="./assets/img/limit.png"
            easterEvent.unshift("limit");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    } else if (quantity == "psycho") {
        if (easterEvent.find(p => p.startsWith("psy"))) {
            img.src="./assets/img/psycho2.jpg"
        } else {
            img.src="./assets/img/psycho2.jpg"
            easterEvent.unshift("psycho");
            easterEgg.textContent = `Secrets: ${easterEvent.length}/15`
        }
    }
    if (easterEvent.length === 15) {
        confirm("Nunca duvidei de ti, e vc ganhou exatos nada, já zerou o site pô vaza")
    }
}

function myValue() {
    return quantity = this.value
};

function temazinho() {
    if (tema == "gojo") {
        textDica.style.color = "purple";
        temaColor_1.style.color = "purple";
        temaColor_2.style.color = "purple";
        easterEgg.style.color = "purple"
    } else if (tema == "comunista") {
        textDica.style.color = "red";
        temaColor_1.style.color = "red";
        temaColor_2.style.color = "red";
        easterEgg.style.color = "red"
    } else {
        textDica.removeAttribute ("style");
        temaColor_1.removeAttribute ("style");
        temaColor_2.removeAttribute ("style");
        easterEgg.removeAttribute ("style");
    }
}

function overColor(div) {
    if (tema === "comunista"){
        div.style.background = "red"
    } else if (tema === "gojo") {
        div.style.background = "purple"
    } else {
    div.style.background = "rgb(255, 242, 87)";
    }
}

function leaveColor(div) {
    div.style.background = "#bdbdbd";
}

function conselho() {
    first = 0
    last = dicaArray.length
    textDica.textContent = dicaArray[Math.floor(Math.random() * (last - first))]
}

const dicaArray = [
    "Qual a condição de uma mulher com marido/esposo?",
    "Orifício arredondando abaixo de las colunas vertebrais cujo objetivo principal é defecar alimentos anteriormente consumidos em detrimento de restauração energética",
    "Você prefere Anime ou HQ?",
    "Nome popular de glúteos",
    "Homi que transa com homi",
    "Desenho japônes +18",
    "1000 - 7",
    "Não digite um número maior do que 1000",
    "Um homem gado vai atrás do que?",
    "se você curte animes, você é o que?",
    "pescoço no tapa",
    "O nick discord do criador do site",
    "Qual o continente que não tem almoço e nem janta?",
    "Descriptografe 457S32856875E21463X215616551615489364456418791O",
    "Nos animes garotas com corpo/idade de criança são chamadas do que?",
]