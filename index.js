/**
 * Caracteres especiales en una expresión regular que podrían ser usados como
 * separador y darían problemas.
 *
 * @type {Object}
 */
const escape = {
    '(' : '\\(',
    '[' : '\\[',
    '{' : '\\{',
    '?' : '\\?',
    '.' : '\\.',
    '*' : '\\*',
    '+' : '\\+'
};

/**
 * Función para convertir a formato camelCase cualquier texto separado por
 * el separador especificado.
 *
 * @param {String} text      Texto a convertir.
 * @param {String} separator Separador usado.
 *
 * @return {String} Texto convertido.
 */
function sep2cc(text, separator = '-')
{
    return String(text)
        .replace(
            new RegExp(`${escape[separator] || separator}[${sep2cc.chars}]`, 'gu'),
            match => match.substr(1).toUpperCase()
        );
}

/**
 * Caracteres a tomar en cuenta como principio de palabra.
 *
 * @type {RegExp}
 */
sep2cc.chars = 'a-zñáéíóú';
//------------------------------------------------------------------------------
// Exportamos la función.
//------------------------------------------------------------------------------
module.exports = sep2cc;
