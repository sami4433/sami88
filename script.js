document.querySelector('.buy-button').addEventListener('click', function() {
    // Perform actions when the "Buy Now" button is clicked
    // For example, you can add the item to a cart or redirect to a checkout page
    alert('Item added to cart!');
  });
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting
     // Perform actions with the form data, such as validation or submission to a server
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
     // Example validation
    if (name === '' || email === '') {
      alert('Please fill in all fields');
    } else {
      alert('Form submitted successfully');
      // You can perform further actions like sending data to a server using AJAX
    }
  });