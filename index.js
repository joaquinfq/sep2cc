const regexcape = require('@jf/regexcape');

/**
 * Función para convertir a formato camelCase cualquier texto separado por
 * el separador especificado.
 *
 * @param {string}  text       Texto a convertir.
 * @param {string}  separator  Caracteres usados como separador.
 * @param {boolean} capitalize Si es `true` se capitaliza el texo.
 *
 * @return {string} Texto convertido.
 */
function sep2cc(text, separator = '-', capitalize = false)
{
    text = String(text);
    if (text)
    {
        text = text.replace(
            new RegExp(`[${regexcape(separator)}]+([${sep2cc.chars}])`, 'gu'),
            (match, char) => char.toUpperCase()
        );
        if (capitalize)
        {
            text = text[0].toUpperCase() + text.substr(1);
        }
    }

    return text;
}

/**
 * Caracteres a tomar en cuenta como principio de palabra.
 * No se diferencia entre mayúsculas y minúsculas.
 *
 * @type {string}
 */
sep2cc.chars = 'a-zñáéíóú';
//------------------------------------------------------------------------------
// Exportamos la función.
//------------------------------------------------------------------------------
module.exports = sep2cc;
