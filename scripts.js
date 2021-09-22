document.addEventListener("DOMContentLoaded", function() {
  main()
});


const main = () => {
  displayLoading()
    fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
      .then(response => response.json())
      .then(function (data) {
        let result = ""
        data.forEach((item) => {
          result +=
              `<div class='col-10 col-lg-8 col-md-4 d-flex flex-column px-md-3 py-md-3'>
              <a class="display-flex align-items-stretch" href='${item.link}' target="_blank">
              <img 
                class="img-fluid border-radius drop-shadow zoom" 
                src="${item.imagens.resolucaoPadrao.url}" 
                alt="${item.usuario.username}"
              >
            </a>
              </div>`;
        document.querySelector("#container").innerHTML = result;    
      })})
      hideLoading()
  };


const loader = document.querySelector("#loading")
 
function displayLoading() {
  loader.classList.remove("visually-hidden");
}  

 function hideLoading() {  
    loader.classList.add("visually-hidden");
}