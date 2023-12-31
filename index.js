const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static('public'));


var originalName;
app.use('/uploads', express.static('uploads'));

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/uploads');
    },
    filename: (req, file, cb) => {
        originalName = file.originalname;
        const destinationPath = 'uploads/';
        const filePath = path.join(destinationPath, originalName);

        if (fs.existsSync(filePath)) {
            console.log("Duplicate found");
            const error = new Error('File already exists');
            error.code = 'DUPLICATE_FILE';
            cb(error)
        } else {
            console.log("could not find any duplicate");
            cb(null, originalName);
        }
    },
});

const upload = multer({ storage });

app.post('/upload', (req, res) => {
    upload.single('file')(req, res, (err) => {
        var classNameVisible = "hide-form";
        const files = fs.readdirSync('uploads');
        if (err) {
            if (err.code === 'DUPLICATE_FILE') {
                classNameVisible = "show-form";
                res.render('index', { files, display: classNameVisible, filepath: originalName });
            }
        }
        else {
            res.redirect('/');
        }
    });
});


app.get('/', (req, res) => {
    const files = fs.readdirSync('uploads');
    res.render('index', { files, display: "hide-form", filepath: originalName });
});

app.get('/download/:filename', (req, res) => {
    const filePath = path.join('uploads', req.params.filename);
    res.download(filePath);
});


// API to handle both download and delete operations
app.post('/fileOperations', (req, res) => {
    const action = req.body.action;
    const selectedFiles = req.body.files || [];

    if (!selectedFiles || !Array.isArray(selectedFiles)) {
        return res.redirect('/');
    }
        if (action === 'download') {
            // Download selected files
            selectedFiles.forEach((filename) => {
                const downloadPath = path.join('uploads', filename);
                res.download(downloadPath);
            });
        } else if (action === 'delete') {
            // Delete selected files (replace this with your actual deletion logic)
            selectedFiles.forEach((filename) => {
                const deletePath = path.join('uploads', filename);
                fs.unlinkSync(deletePath);

                console.log(`File deleted: ${deletePath}`);
                res.redirect('/');
            });
        }
});


app.get('/delete/:filename', (req, res) => {
    const file = `./uploads/${req.params.filename}`;
    fs.unlinkSync(file);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});