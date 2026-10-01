function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');
    const correctPassword = '2729';
  
    if (input === correctPassword) {
      errorMsg.style.color = '#4ADEDE';
      errorMsg.textContent = '✅ رمز درسته! خوش اومدی...';
      setTimeout(() => {
        window.location.href = 'page2.html';
      }, 700);
    } else {
      errorMsg.style.color = '#ff4d6d';
      errorMsg.textContent = '❌ رمز اشتباهه رفیق! دوباره تلاش کن';
      document.getElementById('passwordInput').value = '';
      document.getElementById('passwordInput').focus();
    }
  }
  
  // ورود با Enter
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('passwordInput');
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
      });
      input.focus();
    }
  });