# Multer Project

This project demonstrates file upload, delete, and download features using Multer, along with duplicate file detection.

Youtube Video 👇
[![Alt text](https://img.youtube.com/vi/_1keBT9evXQ/0.jpg)](https://www.youtube.com/watch?v=_1keBT9evXQ)

## Features

1. **File Upload:**
   - Upload files to the server using Multer middleware.
   - Handles various file types (e.g., images, videos, documents).

2. **File Delete:**
   - Delete uploaded files from the server.

3. **File Download:**
   - Download uploaded files from the server.

4. **Duplicate File Detection:**
   - Check for duplicate files before uploading.
   - Prevents uploading files with the same name to avoid conflicts.

5. **Download and Delete Multiple Files:**
   - Download selected files from the server.
   - Delete selected files from the server.


## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rohan-IIT/Multer.git
   cd Multer

2. **Install Dependencies:**
    ```bash
    npm install

3.  **Run the Application:**
    ```bash
    npm start
    The server will be running at http://localhost:3000.

4.  **API Endpoints:**

    POST /upload
    Upload a file to the server.

    DELETE /delete/:filename
    Delete a file from the server.

    GET /download/:filename
    Download a file from the server.

    POST /fileOperations
    Download and delete multiple files from the server.
