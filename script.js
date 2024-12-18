document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin page loaded');
  });
  

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulated credentials
  if (username === 'admin' && password === 'password123') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}
