// server.js
const WebSocket = require('ws');

// WebSocket sunucusunu başlat
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Yeni bir cihaz bağlandı.');

    // İstemciden mesaj alındığında çalışacak olan fonksiyon
    ws.on('message', (message) => {
        console.log('İstemciden gelen mesaj:', message);
    });

    // İstemciye mesaj gönder
    ws.send('Cihaza başarıyla bağlandınız.');
});

console.log('WebSocket sunucusu çalışıyor, port: 8080');
