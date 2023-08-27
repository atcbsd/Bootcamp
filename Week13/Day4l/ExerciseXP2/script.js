
fetch('http://localhost:3000')
.then((response) => {
    //console.log(response);
    response.json().then((data) => {
        console.log('Object:', data);
    });
});