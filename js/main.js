(function () {
    'use strict';

    /* =====================
       INVITATION FLOW
       ===================== */

    var invLanding = document.getElementById('inv-landing');
    var invCover   = document.getElementById('inv-cover');
    var invCard    = document.getElementById('inv-card');
    var invEnterBtn = document.getElementById('inv-enter-btn');

    function openInvCard() {
        invCover.classList.add('is-hidden');
        invCard.classList.add('is-open');
        invCard.removeAttribute('aria-hidden');
        invCover.setAttribute('aria-hidden', 'true');
    }

    function dismissInvLanding() {
        invLanding.style.transition = 'opacity 0.5s ease';
        invLanding.style.opacity = '0';
        invLanding.style.pointerEvents = 'none';
        setTimeout(function () {
            invLanding.classList.add('is-gone');
        }, 500);
    }

    if (invCover) {
        invCover.addEventListener('click', openInvCard);
        invCover.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openInvCard();
            }
        });
    }

    if (invEnterBtn) {
        invEnterBtn.addEventListener('click', dismissInvLanding);
    }

    /* =====================
       MODALS
       ===================== */

    var currentModal = null;

    function openModal(id) {
        if (currentModal) closeModal();
        var modal = document.getElementById('modal-' + id);
        if (!modal) return;
        modal.classList.add('is-open');
        currentModal = modal;
        document.body.style.overflow = 'hidden';
        var close = modal.querySelector('.modal-close');
        if (close) close.focus();
    }

    function closeModal() {
        if (!currentModal) return;
        currentModal.classList.remove('is-open');
        currentModal = null;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.action-btn[data-modal]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            openModal(btn.dataset.modal);
        });
    });

    document.querySelectorAll('.modal-backdrop').forEach(function (el) {
        el.addEventListener('click', closeModal);
    });

    document.querySelectorAll('.modal-close').forEach(function (btn) {
        btn.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
})();
