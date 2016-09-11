//Вызов формы обратного звонка

$('.j-open-callback').magnificPopup({
    type: 'inline',
    preloader: 500,
    removalDelay: 500,
    callbacks: {
        beforeOpen: function() {
            this.st.mainCl	ass = "mfp-zoom-in";
        }
    },
});
