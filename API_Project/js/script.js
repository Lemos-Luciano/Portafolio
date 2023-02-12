let btnBusqueda = document.getElementById("btnBusqueda");
let country = document.getElementById("country");

btnBusqueda.addEventListener("click", () => {
    let nombrePais = country.value;
    // let nombrePais = "argentina";
    let finalURL = `https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].population);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(", "));
            
            // Hace refencia al div resultado
            resultado.innerHTML = `
            <img src="${data[0].flags.svg}" class="flagImg">
            <h2>${data[0].name.common}</h2>

            <div class="buscador">
                <div class="dataBuscador">
                    <h4>Capital: </h4>
                    <span> ${data[0].capital[0]} </span>   
                </div>
            </div>

            <div class="buscador">
                <div class="dataBuscador">
                    <h4>Continente: </h4>
                    <span> ${data[0].continents[0]} </span>   
                </div>
            </div>

            <div class="buscador">
                <div class="dataBuscador">
                    <h4>Población: </h4>
                    <span> ${data[0].population} </span>   
                </div>
            </div>

            <div class="buscador">
                <div class="dataBuscador">
                    <h4>Moneda: </h4>
                    <span> ${Object.keys(data[0].currencies)[0]} -
                    ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>   
                </div>
            </div>

            <div class="buscador">
                <div class="dataBuscador">
                    <h4>Idioma/s: </h4>
                    <span> ${Object.values(data[0].languages).toString().split(",").join(", ")} </span>   
                </div>
            </div>
            `;
        })
        .catch(() => {
            if (nombrePais.length == 0) {
                resultado.innerHTML = `<h3> La búsqueda no puede estar vacía </h3>`;
            } else {
                resultado.innerHTML = `<h3> Por favor, coloque un país válido </h3>`;
            }
        })
            
});