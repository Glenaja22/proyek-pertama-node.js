const express = require('express');
const path = require('path');
const mqtt = require('mqtt'); 
const app = express();
const port = 3000;

// --- KONFIGURASI MQTT ---
const mqttBroker = 'mqtt://broker.hivemq.com';
const topicSensor = 'ecocompost/glen/sensor'; 

// Menghubungkan ke Broker
const client = mqtt.connect(mqttBroker);

client.on('connect', () => {
    console.log('Terhubung ke MQTT Broker!');
    // Server Node.js mendengarkan topik sensor
    client.subscribe(topicSensor, (err) => {
        if (!err) {
            console.log(`Menunggu data dari topik: ${topicSensor}`);
        }
    });
});

// Menangkap data yang masuk dari Wokwi
client.on('message', (topic, message) => {
    console.log(`Data masuk dari Wokwi: ${message.toString()}`);
});

// --- KONFIGURASI SERVER EXPRESS ---
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server EcoCompost berjalan di http://localhost:${port}`);
});