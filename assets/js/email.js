(function () {
    emailjs.init({
        publicKey: "DVMzduIFcBub7z1rI",
    });
})();

const form = document.getElementById('contact');
const btn  = document.getElementById('form-submit');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Anti-spam: If honeypot (website) is filled, do not send
    if (form.website && form.website.value) return;

    btn.disabled = true; 
    btn.textContent = 'Enviando...';

    try {
        // Envia para você (template “admin”)
        await emailjs.sendForm('orbix_gmail', 'orbix_contact', form);

        alert('Mensagem enviada com sucesso! 🎉');
        form.reset();
    } catch (err) {
        console.error(err);
        alert('Ops! Não foi possível enviar. Tente novamente em instantes.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Enviar';
    }
});