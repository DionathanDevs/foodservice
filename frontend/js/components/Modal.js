const modal = document.getElementById('modal-item')


function inserirModal(){
    modal.innerHTML = `
     <div class="modal-header">
       
        <span class="close-button" id="close-button">&times;</span>
      </div>

      <div class="modal-body">
        <p>Titulo do Hamburguer</p>
      </div>
      <div class="modal-info">
        <p class="modal-price">R$ 30,00</p>
        <p class="modal-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          
        </p>
        <textarea class="obs-pedido" type="text" placeholder="Observações do pedido..."></textarea>
      </div>
      <div class="modal-extras">
        <p>Quer adicionar algo?</p>
        <div class="card-item-modal" >
          <div class="img-item-modal">
            <img src="../assets/images/burger-top-food.png" alt="" />
          </div>
          <div class="info-item-modal">
            <p>1 Bacon</p>
            <p>R$ 10,00</p>
            <p>Max: 4</p>
          </div>
          <button>+</button>
        </div>
          <div class="card-item-modal" >
          <div class="img-item-modal">
            <img src="../assets/images/burger-top-food.png" alt="" />
          </div>
          <div class="info-item-modal">
            <p>1 Bacon</p>
            <p>R$ 10,00</p>
            <p>Max: 4</p>
          </div>
          <button>+</button>
        </div>

      <div class="modal-button">
        <p>Avançar</p>
        <p>R$30,00</p>
      </div>
    </div>`
    const botaoClose = document.getElementById('close-button')
    if(botaoClose){
        botaoClose.addEventListener('click', fecharModal)
      }
}




function removerModal(){
    modal.innerHTML = ''
}

 
     