const play = document.querySelectorAll('.play')

play.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        tocaMusica(evento.target.textContent, evento.target.parentNode)
    })
})

function tocaMusica(musica, controle){
    const audio = controle.querySelector('audio')

    if (musica == '▶'){
        audio.play()
        pause.innerHTML = '&#10006;'
    }else{
        audio.pause()
    }
}