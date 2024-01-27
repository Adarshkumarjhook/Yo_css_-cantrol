const borderRadiusInput = document.getElementById('borderRadius');
const fontSizeInput = document.getElementById('fontSize');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const bgColorInput = document.getElementById('bgColor');
const copyButton = document.getElementById('copyButton');
const previewElement = document.getElementById('preview');

const handleStyleChange = () => {
    if (selectedElement) {
        selectedElement.style.borderRadius = `${borderRadiusInput.value}px`;
        selectedElement.style.fontSize = `${fontSizeInput.value}px`;
        selectedElement.style.width = `${widthInput.value}px`;
        selectedElement.style.height = `${heightInput.value}px`;
        selectedElement.style.backgroundColor = bgColorInput.value;
    }
};

const copyCSSCode = () => {
    if (selectedElement) {
        const cssCode = `
            border-radius: ${borderRadiusInput.value}px;
            font-size: ${fontSizeInput.value}px;
            width: ${widthInput.value}px;
            height: ${heightInput.value}px;
            background-color: ${bgColorInput.value};
        `;

        navigator.clipboard.writeText(cssCode).then(() => {
            alert('CSS code copied to clipboard!');
        }).catch((error) => {
            console.error('Clipboard write error:', error);
        });
    }
};

let selectedElement;

document.addEventListener("click", function (e) {
    // Remove styles from the previously selected element
    if (selectedElement) {
        selectedElement.style.border = "none";
    }

    selectedElement = e.target;

    borderRadiusInput.removeEventListener("input", handleStyleChange);
    fontSizeInput.removeEventListener("input", handleStyleChange);
    widthInput.removeEventListener("input", handleStyleChange);
    heightInput.removeEventListener("input", handleStyleChange);
    bgColorInput.removeEventListener("input", handleStyleChange);

    borderRadiusInput.addEventListener("input", handleStyleChange);
    fontSizeInput.addEventListener("input", handleStyleChange);
    widthInput.addEventListener("input", handleStyleChange);
    heightInput.addEventListener("input", handleStyleChange);
    bgColorInput.addEventListener("input", handleStyleChange);

    // Highlight the currently selected element with a border
    selectedElement.style.border = "2px solid red";
});

copyButton.addEventListener("click", copyCSSCode);
