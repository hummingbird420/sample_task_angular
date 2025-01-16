import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
    providedIn: 'root',
})
export class SignalRService {
    private hubConnection!: signalR.HubConnection;

    constructor() { }

    startConnection(userId: string) {
        console.log('Token being sent to SignalR:', localStorage.getItem('_TOKEN_'));
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7231/notificationHub', {
                accessTokenFactory: () => localStorage.getItem('_TOKEN_') || '',
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .build();

        this.hubConnection
            .start()
            .then(() => {
                console.log('SignalR connection started');
                this.listenForNotifications();
                // You might want to send the userId to the server to register the user for notifications
                this.hubConnection.invoke('SendNotificationToUser', [userId], 'Test message')
                    .catch(err => console.log('Error while invoking SendNotificationToUser:', err));
            })
            .catch((err) => console.log('Error while starting SignalR connection:', err));
    }

    listenForNotifications() {
        this.hubConnection.on('ReceiveNotification', (message) => {
            console.log('Notification received:', message);
            alert(message); // Handle notifications here
        });
    }

    stopConnection() {
        this.hubConnection.stop().then(() => {
            console.log('SignalR connection stopped');
        });
    }
}
