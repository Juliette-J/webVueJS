const getCharacters = async function() {
    const response = await fetch("https://api.genshin.dev/characters")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getCharactersData = async function(name) {
    const response = await fetch("https://api.genshin.dev/characters/" + name)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

export { getCharacters , getCharactersData }