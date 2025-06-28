const header = document.getElementById('header')

header.innerHTML = criarHeader()


function criarHeader(){
   return `
        <div class="logo">
            <img class="logo-image" src="../assets/images/logo.webp" alt="Logo da Food Service">
        </div>
        <nav>
            <a href="#">Entrar</a>
        </nav>`
}

