const express = require('express');
const path = require('path');

const app = express();

// View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Export untuk Vercel
module.exports = app;

// Jalankan lokal
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}