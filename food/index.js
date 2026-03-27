// "Eat!" button click event
document.getElementById("eat").addEventListener("click", function() {
    // Get the food name from input, convert to lowercase, remove extra spaces
    let name = document.getElementById("foodname").value.toLowerCase().trim();

    // Get the selected food group from drop-down, convert to lowercase
    let group = document.getElementById("foodgroup").value.toLowerCase();

    // Select all images with class 'food'
    let images = document.querySelectorAll("img.food");

    // Counter for how many images match
    let count = 0;

    // Loop through each image
    images.forEach(function(img) {
        // Get the image's alt text (food name), lowercase
        let foodName = img.alt.toLowerCase();

        // Get all classes of the image as an array, lowercase
        let classArray = img.className.toLowerCase().split(" ");

        // Check if both food name and group match
        if (foodName === name && classArray.includes(group)) {
            img.classList.add("highlight"); // highlight matching image
            img.classList.remove("dim");    // remove dim if previously set
            count++;                        // increment matched counter
        } else {
            img.classList.remove("highlight"); // remove highlight if not matching
            img.classList.add("dim");          // dim non-matching images
        }
    });

    // Show message under the form depending on matches
    if (count === 0) {
        showMessage("No such food found!");
    } else {
        showMessage(count + " item(s) matched");
    }

    // Show an alert with number of matches
    alert(count + " item(s) matched");
});

// "Restock" button click event: resets highlights/dim
document.getElementById("restock").addEventListener("click", function() {
    // Select all food images
    let images = document.querySelectorAll("img.food");

    // Remove both highlight and dim classes
    images.forEach(function(img) {
        img.classList.remove("highlight", "dim");
    });

    // Clear message
    clearMessage();
});

// Function to show message under the form
function showMessage(text) {
    document.getElementById("message").textContent = text;
}

// Function to clear the message
function clearMessage() {
    document.getElementById("message").textContent = "";
}