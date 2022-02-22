function SubmitButton(event) {
    event.preventDefault();
    window.onload = function () {
        const submitBtn = document.querySelector('#submitBt');
        submitBtn.addEventListener('click', SubmitButton);
    };
}

function clearButton(event) {
    event.preventDefault();
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}
window.onload = function (event) {
    event.preventDefault();
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearButton);
    const submitBtn = document.querySelector('#submitBt');
    submitBtn.addEventListener('click', SubmitButton);
};
alert('oi');
