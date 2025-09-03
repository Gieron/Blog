if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
}

window.onload = function () {
    var elements = document.getElementsByClassName('comment');
    var article = document.title.replace(' | Pseudorandom Knowledge', '');

    Array.prototype.forEach.call(elements, function (element) {
        element.href = 'https://github.com/Gieron/Blog/issues/new?title=' + article;
    });
};
