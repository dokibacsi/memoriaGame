const KEPLISTA = 
[
    {
        eleresiUt: "../kepek/memek/meme1.png"
    },
    {
        eleresiUt: "../kepek/memek/meme2.png"
    },
    {
        eleresiUt: "../kepek/memek/meme3.png"
    },
    {
        eleresiUt: "../kepek/memek/meme4.png"
    },
    {
        eleresiUt: "../kepek/memek/meme5.png"
    },
    {
        eleresiUt: "../kepek/memek/meme6.png"
    },
    {
        eleresiUt: "../kepek/memek/meme1.png"
    },
    {
        eleresiUt: "../kepek/memek/meme2.png"
    },
    {
        eleresiUt: "../kepek/memek/meme3.png"
    },
    {
        eleresiUt: "../kepek/memek/meme4.png"
    },
    {
        eleresiUt: "../kepek/memek/meme5.png"
    },
    {
        eleresiUt: "../kepek/memek/meme6.png"
    },
]

let felforditottak = []

let db = 0;
let talalat = 0;

$(function(){
    console.log("bármi")
    const FELSO = $('#felso')
    const ALSO = $('#also')
    let tartalom = kepMegjelenit(KEPLISTA)
    FELSO.append(tartalom)

    const FELSOKEPEK = $('#felso img')
    FELSOKEPEK.on("click", kattintas)
})

function kepMegjelenit(lista){
    let szoveg = "" 
    for (let index = 0; index < lista.length; index++) {
        szoveg += `<div class="kepbox"><img src='../kepek/hatter/hatter.jpg' alt=kep(${index+1}) id="${index}"></div>`   
    }
    return szoveg
}

function kattintas(){
    const AKTUALIS = event.target
    //JS: console.log(AKTUALIS.id)
    /**/
    console.log($(AKTUALIS).attr('id'))
    AKTUALIS.src = KEPLISTA[AKTUALIS.id].eleresiUt
    felforditottak.push($(AKTUALIS).attr('id'))
    db++;
    if (db == 2){
        db = 0;
        setTimeout(()=>{
            visszafordit()
        }, 1000)
    }
}

function visszafordit(){
    console.log(felforditottak)
    const FELSOKEPEK = $('#felso img')
    let aktKep = FELSOKEPEK.eq(felforditottak[0])
    $(aktKep).attr('src', '../kepek/hatter/hatter.jpg')
    aktKep = FELSOKEPEK.eq(felforditottak[1])
    $(aktKep).attr('src', '../kepek/hatter/hatter.jpg')
    felforditottak.pop()
    felforditottak.pop()
}