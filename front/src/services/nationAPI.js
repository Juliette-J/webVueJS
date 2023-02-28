const getNationsData = async function() {
    const response = await fetch("https://api.genshin.dev/nations")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

export { getNationsData }