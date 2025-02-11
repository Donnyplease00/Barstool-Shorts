function addImage() {
    // Get the value of the image URL from the input field
    const imageUrl = document.getElementById("imageUrlInput").value;

    // Make sure the user entered something
    if (!imageUrl) {
        alert("Please enter a valid image URL!");
        return;
    }

    // Create a new <img> element
    const img = document.createElement("img");
    img.src = imageUrl; // Set the src to the image URL
    img.alt = "Uploaded Image"; // Add a description for the image

    // Add the image to the gallery
    const gallery = document.getElementById("gallery");
    gallery.appendChild(img); // This will add the image to the page
}
