console.log('Before non-blocking operation');
    // Non-blocking operation (setTimeout)
    setTimeout(() => {
        console.log('Non-blocking operation completed');
    }, 2000); // Simulate a non-blocking operation that takes 2 seconds
    console.log('After non-blocking operation');