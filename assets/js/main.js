const play = document.querySelectorAll('.play')
let count = 0

play.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        tocaMusica(evento.target.textContent, evento.target.parentNode)
    })
})

function tocaMusica(musica, controle){
    const audio = controle.querySelector('audio')

    if (musica == '▶' && count == 0){
        audio.play()
        count = 1
    }else{
        audio.pause()
        count = 0
    }
}