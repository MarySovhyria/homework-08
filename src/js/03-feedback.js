import throttle from "lodash.throttle";
import '../css/common.css';
import '../css/03-feedback.css';
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
begining();
const inform = {};

refs.form.addEventListener('input', throttle(adding, 500));

function adding(event) {
    event.preventDefault();
    inform.email= refs.input.value;
    inform.message = refs.textarea.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inform));
}

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    refs.form.reset();
}

function begining() {
    const saved = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saved) {
        refs.input.value = saved.email;
        refs.textarea.value = saved.message;
    }
}
