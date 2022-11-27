function getFromLocalStorage(){
    const login = localStorage.getItem("login");
    return JSON.parse(login);
}

function saveToLocalStorage(login){
    localStorage.setItem("login", JSON.stringify(login));
}

function updateLocalStorage(login){
    localStorage.clear()
    localStorage.setItem("login", JSON.stringify(login));
}

export {
    getFromLocalStorage,
    saveToLocalStorage,
    updateLocalStorage
}