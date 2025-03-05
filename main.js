/// conexion con html (seleccionar elementos)

const songform = document.getElementById("song_form");
const playlist = document.getElementById("play_list")

///funcionpara agrgar una cancion a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li')
    listSong.innerHTML = `
                <strong>${songName}</strong>
                -${artistName} 
                <a href="${songUrl}"  target="_blank" >Escuchar</a>
                <button class="delete_btn" >Eliminar</button>
    `;

}
///Agregar al html
    playlist.appendChild("list_Song");


    //Manejo de envio del formulario (eventos)
songform.addEventListener('submit', (event) =>{
event.preventDefault();


    ///obtener datos del formulario
const songName=document.getElementById("song_name").value;
const artistName=document.getElementById("artist_name").value;
const songUrl=document.getElementById("url_name").value;

addSong(songName, artistName, songUrl);

songform.reset();
})