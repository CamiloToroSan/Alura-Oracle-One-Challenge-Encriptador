function encriptar() {
    const textoOriginal = document.getElementById('textoParaEncriptado').value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById('textoEncriptado').value = textoEncriptado;
}

function desencriptar() {
    const textoEncriptado = document.getElementById('textoEncriptado').value;
    const textoOriginal = desencriptarTexto(textoEncriptado);
    document.getElementById('textoParaEncriptado').value = textoOriginal;
}

function encriptarTexto(texto) {
    const letras = ['e', 'i', 'a', 'o', 'u'];
    const codigos = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let index = letras.indexOf(letra);
        if (index !== -1) {
            textoEncriptado += codigos[index];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    const letras = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    const codigos = ['e', 'i', 'a', 'o', 'u'];

    let textoDesencriptado = textoEncriptado;
    for (let i = 0; i < letras.length; i++) {
        const letraEncriptada = letras[i];
        const letraDesencriptada = codigos[i];
        const regex = new RegExp(letraEncriptada, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, letraDesencriptada);
    }
    return textoDesencriptado;
}


function copiarTexto() {
    const textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.select();
    alert('Texto copiado al portapapeles');
}
