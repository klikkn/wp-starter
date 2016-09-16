//Вызов формы обратного звонка

$('.j-open-callback').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = "mfp-zoom-in";
        }
    },
});