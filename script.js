let hideTimeout;

function showPanel(id) {
    clearTimeout(hideTimeout);
    document.getElementById(id).style.display = 'block';
}

function hidePanel(id) {
    hideTimeout = setTimeout(() => {
    document.getElementById(id).style.display = 'none';
    }, 300);
}

function cancelHide() {
    clearTimeout(hideTimeout);
}