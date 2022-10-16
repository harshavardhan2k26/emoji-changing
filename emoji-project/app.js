const smileyEmoji = document.querySelector('.smiley');
const sadEmoji = document.querySelector('.sad');
console.log(sadEmoji)

smileyEmoji.addEventListener('click', function () {   
        smileyEmoji.classList.remove('active');
        sadEmoji.classList.add('active');
})

sadEmoji.addEventListener('click', function () {
            smileyEmoji.classList.add('active');
            sadEmoji.classList.remove('active');
    })