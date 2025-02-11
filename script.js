function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0]; // Get the file from the input

    if (!file) {
        alert("Please select an image to upload.");
        return;
    }

    const reader = new FileReader();

    // Event when the file is successfully read
    reader.onload = function(e) {
        const imageUrl = e.target.result; // The URL of the image file

        // Create an image element and set the src to the image URL
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Uploaded Image";
        imgElement.style.maxWidth = "100%"; // To make sure the image fits the page
        imgElement.style.marginTop = "20px";

        // Display the image in the imageDisplay div
        const imageDisplay = document.getElementById("imageDisplay");
        imageDisplay.innerHTML = ""; // Clear previous images
        imageDisplay.appendChild(imgElement);
    }

    // Read the file as a data URL (this will be the image URL)
    reader.readAsDataURL(file);
}
