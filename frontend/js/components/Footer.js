const footer = document.getElementById('footer')

footer.innerHTML = criarFooter()

function criarFooter(){
    return ` <div class="content-links">
        <ul class="links-social">
            <li>
                <a href="#">Instagram</a>
            </li>
            <li>
                <a href="#">Facebook</a>
            </li>
        </ul>
        <ul class="links-information">
            <li>
                <a href="#">Endereço</a>
            </li>
            <li>
                <a href="#">4198798174</a>
            </li>
        </ul>
        </div>
        <p class="title-footer">Desenvolvido por Dionathan</p>`
}