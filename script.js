function openTab(event, tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Show the selected tab and highlight its button
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
