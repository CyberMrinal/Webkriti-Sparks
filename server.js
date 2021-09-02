const express = require('express');
const path = require('path');

require('./configs/dotenv')

const client = require('./configs/database')
const cloudinary = require('./configs/cloudinary')
const authRoutes = require('./routes/auth')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/auth', authRoutes);


const port = process.env.PORT || 80;

//GET REQUESTS

//USER
app.get('/', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/index.html'));
});

app.get('/about', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/about_us.html'));
});

app.get('/events', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/events.html'));
});

app.get('/event_details', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/event_details.html'));
});

app.get('/sponsors', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/sponsors.html'));
});

app.get('/schedule', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/schedule.html'));
});

app.get('/contact', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/contact_us.html'));
});

app.get('/login_register', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/login_register.html'));
});

app.get('/gallery', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'user/gallery.html'));
});

//ADMIN
app.get('/about-admin', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'admin/about_us-admin.html'));
});

app.get('/events-admin', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'admin/events-admin.html'));
});

app.get('/contact-admin', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'admin/contact_us-admin.html'));
});

app.get('/schedule-admin', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'admin/schedule-admin.html'));
});



//DATABASE
client.connect(() => {
        console.log("Connected to database");
})


app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`);
})