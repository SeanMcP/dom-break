console.info("Made by SeanMcP – https://seanmcp.com");

// Subtree modification

function addNode() {
    const node = document.createElement("button");
    node.textContent = "Node!";
    node.addEventListener("click", () => node.remove());
    trunk.appendChild(node);
}

// Attribute modification

function toggle(className) {
    paragraph.classList.toggle(className);
}

function reset() {
    paragraph.removeAttribute("class");
}

// Node removal
