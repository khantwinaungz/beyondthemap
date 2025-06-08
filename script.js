
function subscribe() {
  const emailInput = document.querySelector('.footer-section input[type="email"]');
  const email = emailInput ? emailInput.value : '';
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
  } else {
    alert("Please enter a valid email address.");
  }
}
