function storageGet(key){
    const data = JSON.parse( localStorage.getItem(key) );
    return data;
}

function storageSave(key, data){
    localStorage.setItem(key, JSON.stringify(data));
    return true;
}
