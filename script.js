function subscribe() {
  const email = document.getElementById("emailInput").value;
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
  } else {
    alert("Please enter a valid email address.");
  }
}
