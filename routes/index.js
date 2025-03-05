var express = require('express');
var router = express.Router();

// Lista de ejemplo de cursos
const courses = [
  { id: 1, name: 'Curso de JavaScript', description: 'Aprende JavaScript desde cero.' },
  { id: 2, name: 'Curso de Node.js', description: 'Introducción a Node.js para backend.' },
  { id: 3, name: 'Curso de React', description: 'Crea aplicaciones con React.js.' }
];

/* Ruta para la lista de cursos */
router.get('/', function(req, res, next) {
  res.render('index', { courses: courses });
});

/* Ruta para la información de un curso específico */
router.get('/courses/:id', function(req, res, next) {
  const courseId = req.params.id;
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return res.status(404).send('Curso no encontrado');
  }

  res.render('course', { course: course });
});

module.exports = router;
