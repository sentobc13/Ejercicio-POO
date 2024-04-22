// Ejercicios POO

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      this.obtDetalles;
    }
    obtDetalles() {

      return "Me llamo " + this.nombre + ", tengo " + this.edad + " años y soy " + this.genero
    }
  }

  const persona = new Persona("Carlos", 23, "hombre");
  
  console.log(persona.obtDetalles());

  // Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

  class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero)
      this.curso = curso;
      this.grupo = grupo;
    }
    obtDetalles() { return "Me llamo " +this.nombre + ", tengo " + this.edad + " años y soy " + this.genero + ". Soy alumna de "+this.curso + " del grupo "+ this.grupo}
  };
  
  const estudiante = new Estudiante("Marta", 24, "mujer", "Full Stack", "The Bridge");
  console.log(estudiante.obtDetalles());
  
  // Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

  class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero)
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
    obtDetalles() { return "Me llamo " +this.nombre + ", tengo " + this.edad + " años y soy " + this.genero+ ". Soy profesora de "+this.asignatura + " y ya estamos dando un nivel "+ this.nivel}
  };
  
  const profesor = new Profesor("Laura", 27, "mujer", "JavaScript", "avanzado");
  console.log(profesor.obtDetalles());