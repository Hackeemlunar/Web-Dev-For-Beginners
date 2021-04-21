# Construye un juego espacial Parte I: Introducción

![video](video-url)

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/29)

### Herencia y composición en el desarrollo de juegos

En lecciones anteriores, no había mucha necesidad de preocuparse por la arquitectura de diseño de las aplicaciones que creó, ya que los proyectos tenían un alcance muy pequeño. Sin embargo, cuando sus aplicaciones crecen en tamaño y alcance, las decisiones de arquitectura se vuelven una preocupación mayor. Hay dos enfoques principales para crear aplicaciones más grandes en JavaScript: *composición* o *herencia*. Ambos tienen pros y contras, pero vamos a explicarlos desde el contexto de un juego.

✅ Uno de los libros de programación más famosos jamás escrito tiene que ver con [patrones de diseño](https://en.wikipedia.org/wiki/Design_Patterns).

En un juego tienes `game objects` que son objetos que existen en una pantalla. Esto significa que tienen una ubicación en un sistema de coordenadas cartesiano, caracterizado por tener una coordenada `x` e `y`. A medida que desarrolle un juego, notará que todos los objetos de su juego tienen una propiedad estándar, común para todos los juegos que crea, es decir, elementos que son:

- **location-based** (basado en la ubicación): La mayoría, si no todos, los elementos del juego se basan en la ubicación. Esto significa que tienen una ubicación, una `x` y una` y`.
- **movable** (movible): Estos son objetos que pueden moverse a una nueva ubicación. Suele ser un héroe, un monstruo o un NPC (un personaje no jugador), pero no, por ejemplo, un objeto estático como un árbol.
- **self-destructing** (autodestructivo): Estos objetos solo existen durante un período de tiempo determinado antes de que se configuren para su eliminación. Por lo general, esto está representado por un booleano `dead` o `destroyed` que indica al motor del juego que este objeto ya no debe procesarse.
- **cool-down** (enfriamiento): 'Cool-down' es una propiedad típica entre los objetos de corta duración. Un ejemplo típico es un fragmento de texto o efecto gráfico como una explosión que solo debería verse durante unos pocos milisegundos.

✅ Piense en un juego como Pac-Man. ¿Puedes identificar los cuatro tipos de objetos enumerados anteriormente en este juego?

### Expresando comportamiento

Todo lo que describimos anteriormente son comportamientos que pueden tener los objetos del juego. Entonces, ¿cómo los codificamos? Podemos expresar este comportamiento como métodos asociados a clases u objetos.

**Clases**

La idea es usar `classes` junto con `inheritance` para lograr agregar un cierto comportamiento a una clase.

<<<<<<< HEAD
✅ La herencia es un concepto importante de comprender. Obtenga más información en el [artículo de MDN sobre herencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
=======
✅ La herencia es un concepto importante de comprender. Obtenga más información en el [artículo de MDN sobre herencia](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

Expresado a través de código, un objeto de juego normalmente puede verse así:

```javascript

//configurar la clase GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//esta clase extenderá las propiedades de clase inherentes del GameObject
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//este objeto móvil se puede mover en la pantalla
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//esta es una clase específica que extiende la clase Movable, por lo que puede aprovechar todas las propiedades que hereda
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//esta clase, por otro lado, solo hereda las propiedades GameObject
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

// un héroe puede moverse...
const hero = new Hero();
hero.moveTo(5,5);

//pero un árbol no puede
const tree = new Tree();
```

✅ Tómate unos minutos para volver a imaginar un héroe de Pac-Man (Inky, Pinky o Blinky, por ejemplo) y cómo se escribiría en JavaScript.

**Composición**

Una forma diferente de manejar la herencia de objetos es usando *Composición*. Entonces, los objetos expresan su comportamiento así:


```javascript
//crear un gameObject constante
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...y un movible constante
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//entonces la constante movableObject está compuesta por gameObject y constantes movibles
const movableObject = {...gameObject, ...movable};

//luego crea una función para crear un nuevo Hero que hereda las propiedades de movableObject
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...y un objeto estático que hereda solo las propiedades de gameObject
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//crea el héroe y muévelo
const hero = createHero(10,10);
hero.moveTo(5,5);
//y crea un árbol estático que solo se para alrededor
const tree = createStatic(0,0, 'Tree'); 
```

**¿Qué patrón debo usar?**

Depende de usted qué patrón elija. JavaScript es compatible con ambos paradigmas.

--

Otro patrón común en el desarrollo de juegos aborda el problema de manejar la experiencia y el rendimiento del usuario del juego.

## Patrón de pub/sub

✅ Pub/Sub significa publish-subscribe (publicar-suscribirse).

Este patrón aborda la idea de que las distintas partes de su aplicación no deben conocerse entre sí. ¿Porqué es eso? Hace que sea mucho más fácil ver lo que sucede en general si se separan varias partes. También facilita el cambio repentino de comportamiento si es necesario. ¿Cómo logramos esto? Hacemos esto estableciendo algunos conceptos:

- **message** (mensaje: un mensaje suele ser una cadena de texto acompañada de una carga útil opcional (un dato que aclara de qué se trata el mensaje). Un mensaje típico en un juego puede ser `KEY_PRESSED_ENTER`.
- **publisher** (editor): este elemento *publica* un mensaje y lo envía a todos los suscriptores.
- **subscriber** (suscriptor): Este elemento *escucha* mensajes específicos y realiza alguna tarea como resultado de recibir este mensaje, como disparar un láser.

La implementación es bastante pequeña pero es un patrón muy poderoso. Así es como se puede implementar:


```javascript
//configurar una clase EventEmitter que contenga oyentes
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//cuando se recibe un mensaje, deje que el oyente maneje su carga útil
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//cuando se envía un mensaje, envíelo a un oyente con alguna carga útil
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Para usar el código anterior, podemos crear una implementación muy pequeña:

```javascript
//configurar una estructura de mensaje
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invocar el eventEmitter que configuró anteriormente
const eventEmitter = new EventEmitter();
//configurar un héroe
const hero = createHero(0,0);
//Informe al emisor de eventos que esté atento a los mensajes relacionados con el héroe que se mueve hacia la izquierda y actúe en consecuencia
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//configurar la ventana para escuchar el evento keyup, específicamente si se golpea la flecha izquierda, emite un mensaje para mover al héroe a la izquierda
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Arriba conectamos un evento de teclado, `ArrowLeft` y enviamos el mensaje `HERO_MOVE_LEFT`. Escuchamos ese mensaje y, como resultado, movemos al `hero`. El punto fuerte de este patrón es que el oyente del evento y el héroe no se conocen. Puede reasignar la ʻArrowLeft` a la tecla ʻA`. Además, sería posible hacer algo completamente diferente en `ArrowLeft` haciendo algunas ediciones en la función `on` del eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

A medida que las cosas se complican cuando tu juego crece, este patrón permanece igual en complejidad y tu código se mantiene limpio. Realmente se recomienda adoptar este patrón.

🚀Desafío: Piense en cómo el patrón pub-sub puede mejorar un juego. ¿Qué partes deberían emitir eventos y cómo debería reaccionar el juego ante ellos? Ahora tienes la oportunidad de ser creativo, pensar en un nuevo juego y en cómo podrían comportarse sus partes.

## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/30)

## Revisión y autoestudio

<<<<<<< HEAD
Obtenga más información sobre Pub / Sub al [leer sobre él](https://docs.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-13441-cxa).
=======
Obtenga más información sobre Pub / Sub al [leer sobre él](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-13441-cxa).
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

**Tarea**: [Mock up a game](assignment.es.md)