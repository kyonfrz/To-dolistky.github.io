function agregarTarea() {
    const tareaInput = document.getElementById('tarea');
    const tareaTexto = tareaInput.value;

    if (tareaTexto) {
        const li = document.createElement('li'); 
        li.textContent = tareaTexto; 
        document.getElementById('listaTareas').appendChild(li); 
        tareaInput.value = ''; 
    } else {
        alert("I don't know if you noticed but there is nothing X_X."); 
    }
}

