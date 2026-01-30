/**
 * Configuración del proyecto
 * Práctica CI/CD - MDW101
 */

const config = {
    app: {
        name: 'TaskManager',
        version: '0.1.0',
        environment: process.env.NODE_ENV || 'development'
    },
    
    tasks: {
        maxTitleLength: 100,
        defaultPriority: 'media',
        allowedPriorities: ['alta', 'media', 'baja']
    },
    
    display: {
        dateFormat: 'es-EC',
        showCompletedTasks: true,
        tasksPerPage: 10
    }
};

module.exports = config;
