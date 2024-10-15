function debugText() {
    const inputText = document.getElementById('inputText').value; // Obtener texto de entrada
    let outputText;

    // Decodificar el texto de parkour a texto normal
    const words = inputText.split(/\n+/);  // Dividir texto por líneas (con saltos de línea)
    outputText = '';

    words.forEach(word => {
        let decodedWord = '';
        const symbols = word.split(/(\s+)/).filter(symbol => symbol.trim() !== '');  // Dividir en símbolos y eliminar espacios vacíos
        symbols.forEach(symbol => {
            // Si hay una representación en texto normal, usarla
            decodedWord += reverseParkourDictionary[symbol] || symbol;
        });
        outputText += decodedWord.trim() + ' ';  // Añadir un espacio entre palabras
    });

    // Reemplazar las letras incorrectas en el texto decodificado
    outputText = outputText
        .replace(/aa/g, 'u')      // Corregir 'aa' por 'u'
        .replace(/j/g, 'e')       // Corregir 'j' por 'e'
        .replace(/s/g, 'f')       // Corregir 's' por 'f'
        .replace(/v/g, 'g')       // Corregir 'v' por 'g'
        .replace(/\[\]/g, 'o')    // Corregir '[]' por 'o'
        .replace(/\[\]_/g, 'q');   // Corregir '[]_' por 'q'

    document.getElementById('output').textContent = outputText.trim(); // Actualizar el área de salida con el texto depurado
}
