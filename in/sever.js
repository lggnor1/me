// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // .env 파일 로드

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// Firebase 구성 정보를 클라이언트에 제공하는 API 엔드포인트
app.get('/config', (req, res) => {
    res.json({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
