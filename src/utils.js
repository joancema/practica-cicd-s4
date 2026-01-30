/**
 * Utilidades del proyecto
 * Práctica CI/CD - MDW101
 */

/**
 * Formatea una fecha ISO a formato legible
 * @param {string} isoDate - Fecha en formato ISO
 * @returns {string} - Fecha formateada
 */
function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-EC', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * Valida que un título no esté vacío
 * @param {string} title - Título a validar
 * @returns {boolean} - true si es válido
 */
function validateTitle(title) {
    return typeof title === 'string' && title.trim().length > 0;
}

/**
 * Genera un ID único
 * @returns {string} - ID único
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Prioridades válidas
 */
const PRIORITIES = ['alta', 'media', 'baja'];

/**
 * Valida una prioridad
 * @param {string} priority - Prioridad a validar
 * @returns {boolean} - true si es válida
 */
function validatePriority(priority) {
    return PRIORITIES.includes(priority);
}

module.exports = {
    formatDate,
    validateTitle,
    generateId,
    validatePriority,
    PRIORITIES
};
