const modal = document.querySelector('.modal');
function login() {
    
    if (modal.style.display != "grid") {
        modal.style.display = "grid"
    } else {
        modal.style.display = "none"
    }
}

const user = document.querySelector('.user');

user.addEventListener('click', function(e) {
    if (!e.target.getAttribute('class').includes('logout')) {
        login()
        const username = document.querySelector('#username').value = "";
        const password = document.querySelector('#password').value = "";
    } else {
        if (confirm('Deseja sair da sua conta?')) {
            localStorage.removeItem('informacoes');
            // const userH2 = document.querySelector('.user p');
            // const circle = document.querySelector('.circle')
            // userH2.innerHTML = `Login`
            // circle.innerHTML = '0';
            window.location.reload();
        }
    }
})
modal.addEventListener('click', function(infos) {
    if (infos.target == modal) {
        login()
    }
})



const buttonLogin = document.querySelector('.buttonLogin');

buttonLogin.addEventListener('click', function() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (username.length < 4) {
        mostrarToast('Usuário ou senha inválidos!')
    }else {
        enviarInformacoes(username, password)
        receberInformacoes()
        login()
    }
})

function mostrarToast(texto) {
    const toastBody = document.querySelector('.toast-body');
    
    toastBody.innerHTML = texto;
    $('.toast').toast('show');
    setTimeout(() => {
        $('.toast').toast('hide')
    }, 3000);
}

function enviarInformacoes(username, password) {
    var informacoes = {
        username: username,
        password: password,
        cart: []
    };
    localStorage.setItem('informacoes', JSON.stringify(informacoes));
}
var informacoes
function receberInformacoes() {
    const userH2 = document.querySelector('.user p');
    const circle = document.querySelector('.circle')

    informacoes = localStorage.getItem('informacoes');
    
    console.log(informacoes);
    if (informacoes) {
        informacoes = JSON.parse(informacoes);
        if (informacoes.username) {
            userH2.innerHTML = `Olá, ${informacoes.username}`
            circle.innerHTML = informacoes.cart.length
        } else {
            userH2.innerHTML = `Login`
        }
    }
}

const navHref = document.querySelectorAll('nav a[href^="#"]');

navHref.forEach(item => {
    item.addEventListener('click', () => {
      event.preventDefault();
      const element = event.target;
      const id = element.getAttribute('href');
      const section = document.querySelector(id).offsetTop;
  
      window.scroll({
        top: section -20,
        behavior: "smooth",
      });
    });
  })


const header = document.querySelector('header')
const nav = document.querySelector('nav')
window.addEventListener('scroll', function(e) {
  var scrollTop = window.pageYOffset;
  if(scrollTop >= 100) {
    nav.style.position = 'fixed'
    header.style.marginBottom = '3rem'
  }else {
    nav.style.position = 'static'
    header.style.marginBottom = '0'
  }
})