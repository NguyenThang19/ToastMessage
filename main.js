const btnSuccess = document.querySelector('.btn-success');
const btnError = document.querySelector('.btn-error');

function removeElementMessage() {
    var listNotifi = document.getElementsByClassName('toast-message');
    var statusClear = false;
    setTimeout(() => {
        listNotifi[0].remove();
    }, 3000)

}

function createToastMessage(mesaage, type) {
    var toastContainer = document.querySelector('#toast');
    var iconCollection = {
        success: 'fa-circle-info',
        error: 'fa-circle-exclamation'
    }
    var iconType = iconCollection[type];
    var toastMessageElement = document.createElement('div');
    toastMessageElement.classList.add('toast-message', `${type}-status`);
    toastMessageElement.innerHTML = `<div class="toast-icon">
                                        <i class="fa-solid ${iconType}"></i>
                                    </div>
                                    <div class="toast-content">
                                       ${mesaage}
                                    </div>`;
    toastContainer.appendChild(toastMessageElement);
    setTimeout(() => {
        toastContainer.removeChild(toastMessageElement);
    },4000)
}
btnSuccess.addEventListener('click', () => {
    createToastMessage(
        'All product questions and issues should be directed to help @dispense.com',
        'success')
    console.log(document.getElementsByClassName('toast-message'));
    // removeElementMessage();

})
btnError.addEventListener('click', (e) => {
    createToastMessage(
        'All product questions and issues should be directed to help @dispense.com',
        'error')
    // removeElementMessage();

})



