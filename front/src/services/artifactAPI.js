const getArtifactsData = async function() {
    const response = await fetch("https://api.genshin.dev/artifacts")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

export { getArtifactsData }