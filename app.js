const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// Url Encoded and BodyParser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/whoami', (req, res) => {
	const language = req.headers['accept-language'];
	const software = req.headers['user-agent'];
	const ipaddress = req.headers['x-real-ip'] || '127.0.0.1';
	res.json({ ipaddress, language, software });
});

app.get('*', (req, res) =>
	res.json({ success: true, description: 'This is Another Page.', uri: `${req.baseUrl}/api/whoami` })
);
app.listen(port, _ => console.log(`Server's running @ ${port}`));
