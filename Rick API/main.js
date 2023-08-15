const characterId = document.getElementById('characterId');
const btnBuscar = document.getElementById('btn-buscar');
const  content = document.getElementById("content");
const image = document.getElementById('img');
const nome = document.getElementById('nome');
const id = document.getElementById("numero");


const fetchApi = (value) =>{
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data)
        return data;
    });
    return result;
}


btnBuscar.addEventListener('click', async (event)=>{
    event.preventDefault();
    const result = await fetchApi((characterId.value));
    image.src = `${result.image}`;
  nome.textContent = `${result.name}`;
  numero.textContent = `${result.id}`;
  characterId.value = ' ';
})


