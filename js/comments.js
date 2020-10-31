let commentForm = document.querySelector('.comment__form');
let commentList = document.querySelector('.comment__list');
let commentField = document.querySelector('.comment__field');
let charCounter = document.querySelector('.char__counter');
let submitButton = document.querySelector('.comment__button');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('list__user');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
    charCounter.textContent = 0;

};

commentField.oninput = function () {
    charCounter.textContent = commentField.value.length;

    if (commentField.value.length > 300) {
        commentForm.classList.add('warning');
        submitButton.disabled = true;
    } else {
        commentForm.classList.remove('warning');
        submitButton.disabled = false;
    }
};