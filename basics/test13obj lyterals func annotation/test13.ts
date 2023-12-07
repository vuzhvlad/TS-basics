const port3000: number = 3000;
const port3001: number = 3001;

const serverConfig: {protocol: 'http' | 'https'; port: 3000 | 3001} = { // lyteral for obj
    protocol: 'https',
    port: 3001
}

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (protocol: 'http' | 'https', port: 3000 | 3001): 'Server Started' => { // annotation of function 
    if(port === port3000 || port === port3001) { // only when port is okay we start it
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error("Invalid port");
    }
    

    return "Server Started";
}

startServer(serverConfig.protocol, serverConfig.port); // calling with this object