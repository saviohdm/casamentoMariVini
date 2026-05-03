/**
 * Contagem Regressiva para o Casamento
 * Mariana & Vinicius - 06 de Junho de 2026
 */

(function() {
    'use strict';

    // Data do casamento: 06 de Junho de 2026, 16:00
    const weddingDate = new Date('2026-06-06T16:00:00-03:00');

    // Elementos do DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    /**
     * Calcula a diferença de tempo e atualiza o countdown
     */
    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            // O casamento já aconteceu
            daysEl.textContent = '0';
            hoursEl.textContent = '0';
            minutesEl.textContent = '0';
            secondsEl.textContent = '0';
            return;
        }

        // Cálculos de tempo
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Atualiza os elementos
        daysEl.textContent = days;
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    // Inicializa o countdown
    updateCountdown();

    // Atualiza a cada segundo
    setInterval(updateCountdown, 1000);
})();
