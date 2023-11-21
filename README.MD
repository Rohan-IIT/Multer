<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multer Project</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 2em;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 1em;
            overflow: auto;
        }

        code {
            background-color: #f4f4f4;
            padding: 0.2em;
            font-family: 'Courier New', Courier, monospace;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 0.5em;
        }

        a {
            color: #007acc;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

    <h1>Multer Project</h1>

    <p>This project demonstrates file upload, delete, and download features using Multer, along with duplicate file detection. Additionally, it includes functionality for uploading YouTube videos and images.</p>

    <h2>Features</h2>

    <ul>
        <li><strong>File Upload:</strong> Upload files to the server using Multer middleware. Handles various file types (e.g., images, videos, documents).</li>
        <li><strong>File Delete:</strong> Delete uploaded files from the server.</li>
        <li><strong>File Download:</strong> Download uploaded files from the server.</li>
        <li><strong>Duplicate File Detection:</strong> Check for duplicate files before uploading. Prevents uploading files with the same name to avoid conflicts.</li>
        <li><strong>YouTube Video Upload:</strong> Upload YouTube video URLs.</li>
        <li><strong>Image Upload:</strong> Upload image files.</li>
    </ul>

    <h2>Prerequisites</h2>

    <ul>
        <li>Node.js and npm installed on your machine.</li>
        <li>MongoDB or any other database system for storing file information.</li>
    </ul>

    <h2>Getting Started</h2>

    <ol>
        <li>Clone the repository:</li>
    </ol>

    <pre><code>git clone https://github.com/your-username/multer-project.git
cd multer-project</code></pre>

    <ol start="2">
        <li>Install dependencies:</li>
    </ol>

    <pre><code>npm install</code></pre>

    <ol start="3">
        <li>Set up your environment variables:</li>
        <ul>
            <li>Create a <code>.env</code> file in the root of the project.</li>
            <li>Add the following variables:</li>
        </ul>
    </ol>

    <pre><code>PORT=3000
MONGO_URI=your_mongo_database_uri</code></pre>

    <ol start="4">
        <li>Run the application:</li>
    </ol>

    <pre><code>npm start</code></pre>

    <p>The server will be running at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

    <h2>API Endpoints</h2>

    <ul>
        <li><strong>POST /upload:</strong> Upload a file to the server.</li>
        <li><strong>DELETE /delete/:filename:</strong> Delete a file from the server.</li>
        <li><strong>GET /download/:filename:</strong> Download a file from the server.</li>
        <li><strong>POST /upload/youtube:</strong> Upload a YouTube video URL.</li>
        <li><strong>POST /upload/image:</strong> Upload an image file.</li>
    </ul>

    <h2>Contributing</h2>

    <p>Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.</p>

    <h2>License</h2>

    <p>This project is licensed under the MIT License - see the <a href="LICENSE.md" target="_blank">LICENSE.md</a> file for details.</p>

</body>

</html>
