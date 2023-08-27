localStorage.setItem('name', 'Bob');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'John');
console.log(sessionStorage.getItem('name'));

document.cookie = 'name=Kyle; expires=' + new Date(9999, 0, 1)
.toUTCString() 

console.log(document.cookie)