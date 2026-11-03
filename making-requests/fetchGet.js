async function performGetRequest() {
    const url = 'https://api.github.com/orgs/nodejs';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
        const data = await response.json();
        console.log('GET request successful:', data);
    } catch (error) {
        console.error('Error during GET request:', error);
    }
}
performGetRequest();