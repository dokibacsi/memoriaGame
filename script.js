const KEPLISTA =
    [
        {
            eleresiUt: "./kepek/memek/meme1.png"
        },
        {
            eleresiUt: "./kepek/memek/meme2.png"
        },
        {
            eleresiUt: "./kepek/memek/meme3.png"
        },
        {
            eleresiUt: "./kepek/memek/meme4.png"
        },
        {
            eleresiUt: "./kepek/memek/meme5.png"
        },
        {
            eleresiUt: "./kepek/memek/meme6.png"
        },
        {
            eleresiUt: "./kepek/memek/meme7.png"
        },
        {
            eleresiUt: "./kepek/memek/meme8.png"
        },
        {
            eleresiUt: "./kepek/memek/meme1.png"
        },
        {
            eleresiUt: "./kepek/memek/meme2.png"
        },
        {
            eleresiUt: "./kepek/memek/meme3.png"
        },
        {
            eleresiUt: "./kepek/memek/meme4.png"
        },
        {
            eleresiUt: "./kepek/memek/meme5.png"
        },
        {
            eleresiUt: "./kepek/memek/meme6.png"
        },
        {
            eleresiUt: "./kepek/memek/meme7.png"
        },
        {
            eleresiUt: "./kepek/memek/meme8.png"
        },
    ]

let felforditottak = []
let felforditottakSrc = []

let db = 0;
let talalat = 0;

$(function () {
    kartyaMegkeveres();
    const FELSO = $('#felso')
    let tartalom = kepMegjelenit(KEPLISTA)
    FELSO.append(tartalom)

    const FELSOKEPEK = $('#felso img')
    FELSOKEPEK.on("click", kattintas)
})

function kepMegjelenit(lista) {
    let szoveg = ""
    for (let index = 0; index < lista.length; index++) {
        szoveg += `<div class="kepbox"><img src='./kepek/hatter/hatter.jpg' alt=kep(${index + 1}) id="${index}"></div>`
    }
    return szoveg
}

function kattintas() {
    const AKTUALIS = event.target
    //JS: console.log(AKTUALIS.id)
    /**/
    console.log($(AKTUALIS).attr('id'))
    AKTUALIS.src = KEPLISTA[AKTUALIS.id].eleresiUt
    felforditottak.push($(AKTUALIS).attr('id'))
    felforditottakSrc.push($(AKTUALIS).attr('src'))
    console.log(felforditottakSrc)
    db++;
    if (db == 2) {
        if (felforditottakSrc[0] == felforditottakSrc[1]) {
            setTimeout(() => {
                kepElrejt()
            }, 1000)
        }
        else{
            setTimeout(() => {
                visszafordit()
            }, 1000)
        }
        db = 0;
    }
    
}

function visszafordit() {
    console.log(felforditottak)
    const FELSOKEPEK = $('#felso img')
    let aktKep = FELSOKEPEK.eq(felforditottak[0])
    $(aktKep).attr('src', './kepek/hatter/hatter.jpg')
    aktKep = FELSOKEPEK.eq(felforditottak[1])
    $(aktKep).attr('src', './kepek/hatter/hatter.jpg')
    felforditottak.pop()
    felforditottak.pop()
    felforditottakSrc.pop()
    felforditottakSrc.pop()
}

function kartyaMegkeveres() {
    for (let KEPID = KEPLISTA.length - 1; KEPID > 0; KEPID--) {
        const RANDOMID = Math.floor(Math.random() * (KEPID + 1));
        [KEPLISTA[KEPID], KEPLISTA[RANDOMID]] = [KEPLISTA[RANDOMID], KEPLISTA[KEPID]]
    }
}

function kepElrejt() {
    console.log(felforditottak)
    const FELSOKEPEK = $('#felso img')
    for (let index = 0; index < KEPLISTA.length; index++) {
        let aktKep = FELSOKEPEK.eq(felforditottak[index])
        $(aktKep).hide()
    }
    felforditottak.pop()
    felforditottak.pop()
    felforditottakSrc.pop()
    felforditottakSrc.pop()
}