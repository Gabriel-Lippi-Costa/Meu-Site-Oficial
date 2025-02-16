var buttons = document.querySelectorAll('.cont button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        var card = this.closest('.premio');
        card.classList.toggle('ativar');

        this.textContent = card.classList.contains('ativar') ? 'Ler menos' : 'Ler mais';
    });
});
