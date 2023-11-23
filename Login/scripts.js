function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login:', username, password);
  }
  
  function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    // Verifica se o usuário já existe no armazenamento local
    if (localStorage.getItem(username)) {
      alert('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
      return;
    }
  
    // Armazena os dados do novo usuário no armazenamento local
    localStorage.setItem(username, JSON.stringify({ username, password }));
  
    // Limpa os campos do formulário após o cadastro
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
  
    console.log('Cadastro realizado com sucesso:', username, password);
  }
  
  