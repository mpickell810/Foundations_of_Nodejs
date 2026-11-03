async function performPostRequest() {
    const url = 'https://postman-echo.com/post'
    const postData = {
        name: 'Laddie',
        breed: 'Rough Collie'
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('POST request successful:', data);
    } catch (error) {
        console.error('Error during POST request:', error);
    }
}
performPostRequest();