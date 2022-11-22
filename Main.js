

function consultaCep(){
    
    var cep = document.getElementById('txtcep').value
    var url = `https://viacep.com.br/ws/${cep}/json/`
    var request= new XMLHttpRequest()


    request.open('GET', url)
    request.onerror = function (e) {
        document.getElementById('res').innerHTML =  `
      
      <div class="alert alert-warning d-flex align-items-center" role="alert ">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        Api offline ou CEP digitado incorreto
      </div>
    </div>
      `
    }

    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro===true) {
            document.getElementById('res').innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
             CEP não encontrado
            </div>
          </div>`
        } else {     
            

            document.getElementById('res').innerHTML =  [`
            
            <div class="  mx-auto container " style="width: 500px;">
            <div class="centraliza"> 
            <div class="row mx-auto "style="width: 500px;" >
              <div class="col-6 p-3 bg-primary col-sm-4  text-white fw-bold border fs-6">Item</div>
              <div class="col-6 p-3 bg-primary col-sm-4  text-white fw-bold border fs-6">Valor</div>
               
              <!-- Force next columns to break to new line at md breakpoint and up -->
              <div class="w-1 d-none d-md-block"></div>
          
              <div class="col-6 col-sm-4 border p-2 fw-normal ">CEP</div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">${response.cep}</div>
              
              <div class="w-0 d-none d-md-block"></div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">Logradouro</div>

              <div class="col-6 col-sm-4 border p-2 fw-normal ">${response.logradouro}</div>
            
              <div class="w-0 d-none d-md-block"></div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">Bairro</div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">${response.bairro}</div>
             
              <div class="w-0 d-none d-md-block"></div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">Cidade/UF</div>
              
              <div class="col-6 col-sm-4 border p-2 fw-normal ">${response.localidade}`+`/ ${response.uf}</div>
              </div>
            </div>
          </div>

            `]
            console.log(response)
    }
}
request.send()
}