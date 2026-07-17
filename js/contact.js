// Contact Architecture Matrix - Mail Fallback and Custom Auto-WhatsApp Message Generator
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxury-contact-form');
    const whatsappBtn = document.getElementById('submit-whatsapp');
    const WHATSAPP_NUMBER = "919771293963";

    function generatePayloadString() {
        const name = document.getElementById('form-name').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const service = document.getElementById('form-service').value;
        const message = document.getElementById('form-message').value.trim();

        if(!name || !phone || !message) {
            alert('Please complete all mandatory properties (*)');
            return null;
        }

        const payload = `*Raj Decors Luxury Lead*\n\n` +
                        `• *Client Name:* ${name}\n` +
                        `• *Phone Connection:* ${phone}\n` +
                        `• *Email Target:* ${email || 'N/A'}\n` +
                        `• *Capability Frame:* ${service}\n` +
                        `• *Vision Concept:* ${message}`;
        return encodeURIComponent(payload);
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const payloadText = generatePayloadString();
            if(payloadText) {
                const mailtoUrl = `mailto:rajdecors4@gmail.com?subject=Luxury Project Intake Inquiry - ${document.getElementById('form-name').value}&body=${payloadText}`;
                window.location.href = mailtoUrl;
            }
        });
    }

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const payloadText = generatePayloadString();
            if(payloadText) {
                const targetUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${payloadText}`;
                window.open(targetUrl, '_blank');
            }
        });
    }
});