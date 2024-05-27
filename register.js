const express = require('express')

const router = express.Router();


router.post('/register', (req, res) => {
    const {
        name,
        email,
        contact,
        company,
        language,
        services
    } = req.body;
 
    const sql = `INSERT INTO vendors (name, email, contact, company, language, services) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [name, email, contact, company, language, services.join(',')]; // Assuming services is an array
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({
                error: 'An error occurred while processing your request.'
            });
        } else {
            console.log('Vendor registration successful');
            res.status(200).json({
                message: 'Vendor registration successful'
            });
        }
    });
});

module.exports = router;