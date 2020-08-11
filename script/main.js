let lastElement = document.querySelector(".main").lastElementChild;
let secondLast = lastElement.before(lastElement);


console.log(secondLast);