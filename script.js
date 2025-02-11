function uploadImage() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);

    fetch("https://api.imgur.com/3/upload", {
        method: "POST",
        headers: {
            "Authorization": "Client-ID YOUR_IMGUR_CLIENT_ID"
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const imageUrl = data.data.link;
            displayImage(imageUrl);
        } else {
            alert("Image upload failed.");
        }
    })
    .catch(error => alert("Error uploading image"));
}

function displayImage(imageUrl) {
    const gallery = document.getElementById("gallery");
    const img = document.createElement("img");
    img.src = imageUrl;
    gallery.appendChild(img);
}
