let menuItems = []; 
let favorites = new Set();

function renderMenuItems() {
    const menuSection = document.getElementById("menu");
    if (!menuSection) return;

    menuSection.innerHTML = `
        <h1>Menu</h1>
        <div id="menu-items-container"></div>
        <button onclick="addMenuItemPrompt()">Add Menu Item</button>
    `;

    const container = document.getElementById("menu-items-container");
    if (!container) return;

    menuItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item"); // Add a class for styling

        const isFavorite = favorites.has(item.name); // Check if it's a favorite
        const buttonText = isFavorite ? "Remove from Favorites" : "Add to Favorites";

        itemDiv.innerHTML = `
            <span>${item.name} (${item.group})</span>
            <button onclick="toggleFavorite(${index})">${buttonText}</button>
            <button onclick="editMenuItemPrompt(${index})">Edit</button>
            <button onclick="removeMenuItem(${index})">Remove</button>
        `;
        container.appendChild(itemDiv);
    });
}


function addMenuItemPrompt() {
    const name = prompt("Enter menu item name:");
    const group = prompt("Enter menu item group:");

    if (name && group) {
        menuItems.push({
            name: name,
            group: group
        });
        renderMenuItems(); 
    }
}

function editMenuItemPrompt(index) {
    const item = menuItems[index];
    if (!item) return;

    const newName = prompt("Enter new name:", item.name);
    const newGroup = prompt("Enter new group:", item.group);

    if (newName && newGroup) {
        menuItems[index] = {
            name: newName,
            group: newGroup
        };
        renderMenuItems(); 
    }
}

function removeMenuItem(index) {
    if (confirm("Are you sure you want to remove this item?")) {
        const itemName = menuItems[index].name; 
        favorites.delete(itemName);
        menuItems.splice(index, 1);
        renderMenuItems(); 
    }
}

function toggleFavorite(index) {
    const itemName = menuItems[index].name;
    if (favorites.has(itemName)) {
        favorites.delete(itemName);
    } else {
        favorites.add(itemName);
    }
    renderMenuItems();
}

document.addEventListener("DOMContentLoaded", renderMenuItems);