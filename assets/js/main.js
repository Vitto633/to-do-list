//variaveis globais
let input = document.getElementById('inputTarefa')
let contador = 0
let botao = document.getElementById('btnInput')
let main = document.getElementById('areaLista')

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && (event.key === "c" || event.keyCode === 65)) {
    input.focus()
  }
  if(event.ctrlKey && (event.key ==="q" )){
    window.location.reload();
    alert("A pagina vai ser reiniciada!")
  }
});


function adicionarTarefa(){
  let valorInput = input.value 
  if((valorInput !== "") &&( valorInput !== null) &&( valorInput !== undefined)){
    contador++
    let novoItem = `
    <div id="${contador}"class="item">
    <div class="itemIcone" onclick="marcar(${contador})">
      <i class="mdi mdi-circle-outline"></i>
    </div>
    <div class="itemNome">
      <p>${valorInput}</p>
    </div>
    <div class="itemBotao">
      <button onclick="deletar(${contador})"><i class="mdi mdi-delete"></i>Deletar</button>
    </div>`
    main.innerHTML += novoItem
    input.value = ""
    input.focus()
  }else{
    alert("Não foi digitado nada no input")
  }
}

function deletar(){
  alert("oi")  
}

function marcar(){
  let item = document.getElementsByClassName('item')  
  item.classList.add("clicked")
  alert("sim")
}

input.addEventListener("keydown", function(event){
  if(event.keyCode === 13){
    event.preventDefault
    botao.click()
  }
  
})

function deletar(idBtn){
  valorBtn = document.getElementById(idBtn)
  valorBtn.remove()
}

function marcar(idBtn) {
  let valorBtn = document.getElementById(idBtn);
  
  if (valorBtn.classList.contains("clicked")) {
    valorBtn.classList.remove("clicked");
    valorBtn.querySelector('.itemIcone i').className = 'mdi mdi-circle-outline';
  } else {
    valorBtn.classList.add("clicked");
    valorBtn.querySelector('.itemIcone i').className = 'mdi mdi-check-circle';
  }
}
