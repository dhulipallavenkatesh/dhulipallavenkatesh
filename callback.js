function step1(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10);
    });
}

function step2(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10);
    });
}
function greet(username,pwd,callback){
    console.log('welcome!!!!');
}
greet('venkatesh@123','venky@123','welcome to the india')    
function printInfo(name, password, callback) {
    setTimeout(function() {
        console.log(`Printing info for ${name}, ${password}. Welcome to India.`);
    
        callback("Please help me");
    }, 5000);
}

function handleCallback(message) {
    console.log('Callback message:', message);
}

printInfo('Venkatesh', 'venky@123', handleCallback);

