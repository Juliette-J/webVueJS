const getEnemies = async function() {
    const response = await fetch("https://api.genshin.dev/enemies")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getEnemiesData = async function(name) {
    const response = await fetch("https://api.genshin.dev/enemies/" + name)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

export { getEnemies , getEnemiesData }