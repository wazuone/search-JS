const search = document.querySelector('.search')
const li = document.querySelectorAll('li') // przechowuje wszystkie napoje

//funkcja która odpowiada za naszą całą wyszukiwarkę

const searchEngine = e => { // jak podajemy 1 argument nie musimy dodawać nawiasów do (e)
    const text = e.target.value.toLowerCase(); // e.target wskazuje na input.e.target.value wskazuje na wartość inputa, czyli tekst, który wpisujemy
    console.log(text);

    li.forEach(el => { // el odnosi się do każdego li na liście
        
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

search.addEventListener('keyup', searchEngine) // listener nasłuchuje na zmiany w inpucie

