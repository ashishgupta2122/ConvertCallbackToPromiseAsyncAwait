function asyncOperation(callback) {
    setTimeout(() => {
        const success = true;
        if (success) {
            callback(null, 'Operation successful');
        } else {
            callback(new Error('Operation failed'));
        }
    }, 1000);
}


asyncOperation((err, result) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Result:', result);
    }
});
