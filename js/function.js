const API_URL = "https://codelabsserver-production.up.railway.app";
const LOCAL_HOST_URL = "http://localhost:3000";
const codelab = document.getElementById("code");
const form = document.querySelector("#miFormulario");

const getCodelab = () => {
  fetch(`${API_URL}/codelabs/all`)
    .then(async (resp) => {
      const response = await resp.json();
      if (resp.ok){
        response.data.forEach(data => {
            let rate = 3;
            codelab.innerHTML = `<div class="col-4">
            <div class="card mb-3 mt-4">
              <h3 class="card-header">${data.titulo}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="d-block user-select-none"
                width="100%"
                height="200"
                aria-label="Placeholder: Image cap"
                focusable="false"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 318 180"
                style="font-size: 1.125rem; text-anchor: middle"
              >
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  ${data.descripcion}
                </p>
              </div>
              <div class="card-body">
                <a href="#" class="card-link">Go codelab</a>
                <a href="#" class="card-link">Edit codelab</a>
              </div>
              <div class="card-footer text-muted">
                <div>
                    ${new Array(rate).forEach( ()=> '<i class="fas fa-star"></i>' )}
                    ${new Array(5-rate).forEach( ()=> '<i class="far fa-star"></i>' )}
                </div>
              </div>
            </div>
          </div>
          </div>`
        });
}})
    .catch((error) => code);
};

getCodelab();