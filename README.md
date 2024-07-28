# Webcam Image Capture

This project is a simple web application that captures images from your webcam and saves them to a specified destination. It includes an Express server to handle the image saving functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/venusai-mabbu/camera-with-destination.git
    ```
2. Navigate to the project directory:
    ```bash
    cd camera-with-destination
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    node camera.js
    ```
5. Open your web browser and go to `http://localhost:3001` to see the webcam image capture application in action.

## Usage

1. Open your web browser and go to `http://localhost:3001`.
2. Allow access to your webcam if prompted.
3. Enter the destination path where you want to save the captured image.
4. Click the "Capture Image" button to capture a frame from the webcam and save it to the specified destination.
5. Click the mini image to see a popup of the full-size image.

## Code Explanation

### HTML (camera.html)

- **video**: Displays the live feed from the webcam.
- **canvas**: Used to capture and convert the webcam feed into an image.
- **capture-btn**: Button to capture the image.
- **mini-image**: Displays a thumbnail of the captured image.

### JavaScript (Inline Script in camera.html)

- **navigator.mediaDevices.getUserMedia**: Accesses the webcam.
- **captureBtn.addEventListener('click')**: Captures the image from the video feed, displays a thumbnail, and sends the image to the server.

### Server (server.js)

- **Express server setup**: Handles the frontend and image saving functionality.
- **POST /saveImage**: Receives the captured image data and saves it to the specified destination on the server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
