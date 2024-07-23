const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

async function listaImagenes(searchQuery = '') {
    try {
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        const card = document.querySelector("[data-ul]");
        card.innerHTML = ''; // Clear existing cards

        datosImagenes.forEach(elemento => {
            if (!searchQuery || elemento.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                const contenido =
                `<li class="card">
                    <img class="card__image" src="${elemento.url}" alt="${elemento.title}">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>`;

                card.innerHTML += contenido;
            }
        });
        
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    listaImagenes(searchQuery);
});

// Load initial images
listaImagenes();
