const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

// Export app untuk Vercel
module.exports = app;

// Jalankan lokal
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log('Server berjalan di http://localhost:3000');
    });
}