if (loginForm) {
    // Check if the loginForm element exists
    loginForm.addEventListener('submit', event => {
      // Add a submit event listener to the loginForm element
      event.preventDefault();
      // Prevent the default form submission behavior
  
      const formData = new FormData(loginForm);
      // Create a new FormData object with the loginForm data
      const loginData = Object.fromEntries(formData.entries());
      // Convert the FormData object into a plain JavaScript object
  
      fetch('/login', {
        // Send a POST request to the '/login' endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
        // Convert the loginData object to JSON and set it as the request body
      })
        .then(response => response.json())
        // Parse the response as JSON
        .then(data => {
          // Handle the response data
          if (data.message) {
            alert(data.message);
            // If the response contains a 'message' property, display the message
          } else if (data.error) {
            alert(data.error);
            // If the response contains an 'error' property, display the error
          } else {
            alert('Username is not registered');
            // If the response doesn't contain 'message' or 'error', display a generic message
          }
        })
        .catch(error => {
          // Handle any errors that occur during the fetch request
          console.error('Error:', error);
        });
    });
  }