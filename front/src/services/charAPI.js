const getCharactersData = async function() {
    const response = await fetch("https://api.genshin.dev/characters")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getCharacterData = async function(name) {
    const response = await fetch("https://api.genshin.dev/characters/" + name)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

export { getCharactersData , getCharacterData }