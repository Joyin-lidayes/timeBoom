document.addEventListener('DOMContentLoaded', function() {
    fetch('../config/info.json')
        .then(response => response.json())
        .then(data => {
            const backBtn = document.querySelector('.back-btn');
            if (backBtn) {
                backBtn.onclick = () => window.location.href = data.index;
            }
        });
});