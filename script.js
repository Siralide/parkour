// Diccionario de parkour language
const parkourDictionary = {
    'a': '[]',    // A
    'b': '[H]',   // B
    'c': 'L',     // C
    'd': '[]_',   // D
    'e': '_[]',   // E
    'f': '__[]',  // F
    'g': '[]_[]', // G
    'h': 'H',     // H
    'i': '|',     // I
    'j': '_[]',   // J
    'k': 'L[]',   // K
    'l': '_',     // L
    'm': '[][][]',// M
    'n': '[][]',  // N
    'o': '[ ]',   // O
    'p': '[]H',   // P
    'q': '[ ]_',  // Q
    'r': '[]L',   // R
    's': '__[]',  // S
    't': '[]__',  // T
    'u': '[] []', // U
    'v': '[]_[]', // V
    'w': '[][][]_',// W
    'x': '[]__[]', // X
    'y': '[]_L',  // Y
    'z': '[]___[]',// Z
    ' ': ' ',     // Espacio
    '.': '. ',    // Punto
    ',': ', ',    // Coma
    "'": "' ",    // Apóstrofo
    '-': '- '      // Guion
};

// Diccionario inverso para decodificar
const reverseParkourDictionary = Object.fromEntries(
    Object.entries(parkourDictionary).map(([key, value]) => [value.trim(), key])
);

// Función para convertir texto a parkour language
function convertText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const words = inputText.split(/\s+/);  // Dividir texto por palabras
    let result = '';

    words.forEach(word => {
        let convertedWord = '';
        for (let char of word) {
            // Si hay una representación en parkour, usarla, si no usar el carácter original
            convertedWord += parkourDictionary[char] ? parkourDictionary[char] + ' ' : char + ' ';
        }
        result += convertedWord.trim() + '\n';  // Añadir un salto de línea por palabra
    });

    document.getElementById('output').textContent = result.trim();
}

// Función para decodificar parkour language a texto normal
function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\n+/);  // Dividir texto por líneas (con saltos de línea)
    let result = '';

    words.forEach(word => {
        let decodedWord = '';
        const symbols = word.split(/(\s+)/).filter(symbol => symbol.trim() !== '');  // Dividir en símbolos y eliminar espacios vacíos
        symbols.forEach(symbol => {
            // Si hay una representación en texto normal, usarla, si no usar el símbolo original
            decodedWord += reverseParkourDictionary[symbol] || symbol;
        });
        result += decodedWord.trim() + ' ';  // Añadir un espacio entre palabras
    });

    document.getElementById('output').textContent = result.trim();
}
