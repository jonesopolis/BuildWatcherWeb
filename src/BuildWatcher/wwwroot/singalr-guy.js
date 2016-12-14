import $ from 'jquery';
import 'ms-signalr-client';

class SignalR {
    constructor() {

        console.log('yooooooo');
        var connection = $.hubConnection('http://localhost:5000');
        var proxy = connection.createHubProxy('buildMonitorHub');

        proxy.on('buildUpdated', (b) => console.log(message));
    }
}

export default SignalR