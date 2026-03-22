const destinos = [
    {
        id: 1,
        titulo: "Farellones",
        temp: "12°C",
        clima: "Soleado",
        humedad: "75%",
        viento: "3Km/h",
        imagen: "https://www.chileanski.com/fotos/tours/slide/Parque_farellones_1_-1718815227.png",
        semana: [
            "Lunes 8°C ",
            "Martes 9°C",
            "Miercoles 7°C",
            "Jueves 8°C",
            "Viernes 4°C",
            "Sabado 4°C",
            "Domingo -1°C",
        ],
    },
    {
        id: 2,
        titulo: "Valle Nevado",
        temp: "10°C",
        clima: "Despejado",
        humedad: "70%",
        viento: "5Km/h",
        imagen: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/39/77/8d.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 3,
        titulo: "Andes Panoramico",
        temp: "8°C",
        clima: "Despejado",
        humedad: "65%",
        viento: "10Km/h",
        imagen: "https://somostour.cl/wp-content/uploads/2017/01/cordillera-panoramico-verano-somos-tour_2025_4.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 4,
        titulo: "Portillo",
        temp: "13°C",
        clima: "Parcialmente Despejado",
        humedad: "80%",
        viento: "18Km/h",
        imagen: "https://cdn-ildpkee.nitrocdn.com/DsGrLBJYSVIbemNsaXNXftjpEWFMzpVF/assets/images/optimized/rev-bcef266/skiportillo.com/wp-content/uploads/2022/01/hotel_img_foto1-1-1.png",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 5,
        titulo: "Embalse Yeso",
        temp: "10°C",
        clima: "Despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://admin.kunapak.com/uploads/imagenes/fbd8fefac3231dc52a899a4932b6a66a8edf1ac9.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 6,
        titulo: "Termas de Colina",
        temp: "17°C",
        clima: "Nublado",
        humedad: "60%",
        viento: "15Km/h",
        imagen: "https://chiletourspirquemaipo.com/wp-content/uploads/2022/09/12510494_587424081411897_954421275817933116_n.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 7,
        titulo: "Valparaiso+Viña Mar",
        temp: "24°C",
        clima: "Despejado",
        humedad: "65%",
        viento: "9Km/h",
        imagen: "https://panatour.cl/wp-content/uploads/2018/12/200-1.png",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 8,
        titulo: "City Tour Santiago de Chile",
        temp: "10°C",
        clima: "Despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 9,
        titulo: "Isla negra+Viña Undurraga",
        temp: "26°C",
        clima: "Parcialmente Despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://i0.wp.com/apuntesyviajes.com/wp-content/uploads/2021/11/isla_negra_chile.jpg?w=1599&ssl=1",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 10,
        titulo: "Viña Concha y Toro",
        temp: "22°C",
        clima: "Despejado",
        humedad: "70%",
        viento: "15Km/h",
        imagen: "https://www.maipotours.com/uploads/fotos/original/foto_5116_c.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miercoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sabado 1°C",
            "Domingo -3°C",
        ],
    },
];

const header = document.querySelector("header");
const destinosContainer = document.querySelector("#destinos-container");
const detalleContainer = document.querySelector("#destino-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");
const linkHome = document.querySelector("#link-home");

function renderCards() {
    let html = "";

    destinos.forEach((item) => {
        html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <article class="card card-pelicula h-100" style="cursor: pointer" data-id="${item.id}">
                <img
                    src="${item.imagen}"
                    class="card-img-top object-fit-cover"
                    alt="Imagen de ${item.titulo}"
                    style="height: 200px;"
                />

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.titulo}</h5>
                    <p class="card-text text-muted">
                        <small>${item.temp} &middot; ${item.clima}</small>
                    </p>
                </div>
            </article>
        </div>`;
    });

    destinosContainer.innerHTML = html;
}

function renderDetalle(id) {
    const destinoSeleccionado = destinos.find((d) => d.id === id);

    if (!destinoSeleccionado) {
        detalleContainer.innerHTML =
            "<p class='text-center'>Destino no encontrado</p>";
        return;
    }

    let semanaHtml = "";
    destinoSeleccionado.semana.forEach((dia) => {
        semanaHtml += `
        <li class="list-group-item">
            <i class="fa-solid fa-temperature-half me-2"></i> ${dia}
        </li>
        `;
    });

    detalleContainer.innerHTML = `
        <div class="row">
            <div class="col-12 col-md-5 mb-4">
                <img
                    src="${destinoSeleccionado.imagen}"
                    alt="Imagen de ${destinoSeleccionado.titulo}"
                    class="img-fluid rounded shadow w-100 object-fit-cover"
                />
            </div>

            <div class="col-12 col-md-7">
                <h2>${destinoSeleccionado.titulo}</h2>

                <div class="mb-3">
                    <span class="badge bg-info me-2">${destinoSeleccionado.temp}</span>
                    <span class="badge bg-warning text-dark me-2">${destinoSeleccionado.clima}</span>
                </div>

                <div class="mb-4">
                    <p class="mb-1">
                        <strong><i class="fa-solid fa-droplet me-2"></i> Humedad:</strong> ${destinoSeleccionado.humedad}
                    </p>
                    <p class="mb-1">
                        <strong><i class="fa-solid fa-wind me-2"></i> Viento:</strong> ${destinoSeleccionado.viento}
                    </p>
                </div>

                <h5 class="mt-4">
                Pronóstico Semanal
                </h5>

                <ul class="list-group list-group-flush">
                    ${semanaHtml}
                </ul>
            </div>
        </div>
    `;
}

function mostrarHome() {
    vistaHome.classList.remove("d-none");
    header.classList.remove("d-none");
    vistaDetalle.classList.add("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarDetalle(id) {
    renderDetalle(id);
    vistaHome.classList.add("d-none");
    header.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

btnVolver.addEventListener("click", mostrarHome);

linkHome.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarHome();
});

destinosContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card-pelicula");

    if (!card) return;

    const idDestino = Number(card.dataset.id);
    mostrarDetalle(idDestino);
});

renderCards();
