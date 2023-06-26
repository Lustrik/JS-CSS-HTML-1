document.addEventListener ('click', event => {
    if (event.target.classList.contains('second')) {
        event.target.classList.add('hidden');
    }
    console.log(event.target.classList);
});