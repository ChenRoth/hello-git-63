document.querySelector('#my-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(e.target.x.value);
});
