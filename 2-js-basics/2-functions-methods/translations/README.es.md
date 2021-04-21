<<<<<<< HEAD
# Conceptos básicos de JavaScript: métodos y funciones

[![Métodos y funciones](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Métodos y funciones")

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/9)

Cuando necesite su código para realizar una tarea, utilizará un método o una función. Analicemos las diferencias.
=======

![JavaScript Basics - Functions](/sketchnotes/webdev101-js-functions.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

# Conceptos básicos de JavaScript: funcións y funciones

[![funcións y funciones](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "funcións y funciones")

## [Pre-lectura prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/9)

Cuando necesite su código para realizar una tarea, utilizará un función o una función. Analicemos las diferencias.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

## Funciones

Una función es un bloque de código destinado a realizar una tarea. Usted crea una función usando la palabra clave `function`, un nombre, un conjunto de parámetros y la definición de la función también conocida como funciones _body_. La sintaxis de una función se parece a la siguiente:

```javascript
function name(param, param2, param3) { // definición de función
 // definición de función/body
}
```

<<<<<<< HEAD
## Métodos

TODO

=======
## Funciónes (Functions)

En esencia, una función es un bloque de código que podemos ejecutar bajo demanda. Esto es perfecto para escenarios en los que necesitamos realizar la misma tarea varias veces; en lugar de duplicar la lógica en varias ubicaciones (lo que dificultaría la actualización cuando llegue el momento), podemos centralizarla en una ubicación y llamarla cuando necesitemos que se realice la operación; ¡incluso puede llamar a funciones desde otras funciones!

Igual de importante es la capacidad de nombrar una función. Si bien esto puede parecer trivial, el nombre proporciona una forma rápida de documentar una sección de código. Podría pensar en esto como una etiqueta en un botón. Si hago clic en un botón que dice "Cancelar temporizador", sé que dejará de correr el reloj.

## Creating and calling a function

La sintaxis de una función se parece a la siguiente:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Si quisiera crear una función para mostrar un saludo, podría verse así:

```javascript
function displayGreeting() {
  console.log('¡Hola, mundo!');
}
```

Siempre que queremos llamar (o invocar) nuestra función, usamos el nombre de la función seguido de `()`. Vale la pena señalar el hecho de que nuestra función se puede definir antes o después de que decidamos llamarla; el compilador de JavaScript lo encontrará por usted.

```javascript
// calling our function
displayGreeting();
```

> **NOTA:** Existe un tipo especial de función conocida como **método**, que ya ha estado utilizando. De hecho, vimos esto en nuestra demostración anterior cuando usamos `console.log`. Lo que hace que un método sea diferente de una función es que un método está adjunto a un objeto (`consola` en nuestro ejemplo), mientras que una función es flotante libre. Escuchará que muchos desarrolladores usan estos términos indistintamente.

### Mejores prácticas de función

Hay algunas prácticas recomendadas que se deben tener en cuenta al crear funciones:

- Como siempre, use nombres descriptivos para que sepa lo que hará la función
- Usa **camelCasing** para combinar palabras
- Mantenga sus funciones enfocadas en una tarea específica

## Pasar información a una función

Para que una función sea más reutilizable, a menudo querrá pasarle información. Si consideramos nuestro ejemplo de `displayGreeting` anterior, solo mostrará **¡Hola, mundo!**. No es la función más útil que uno podría crear. Si queremos hacerlo un poco más flexible, como permitir que alguien especifique el nombre de la persona a saludar, podemos agregar un **parámetro**. Un parámetro (también llamado a veces **argumento**), es información adicional enviada a una función.

Los parámetros se enumeran en la parte de definición entre paréntesis y están separados por comas así:

```javascript
function name(param, param2, param3) {

}
```

Podemos actualizar nuestro `displayGreeting` para aceptar un nombre y mostrarlo.

```javascript
function displayGreeting(name) {
  const message = `¡Hola, ${name}!`;
  console.log(message);
}
```

Cuando queremos llamar a nuestra función y pasar el parámetro, lo especificamos entre paréntesis.

```javascript
displayGreeting('Paco');
// dice "¡Hola, Paco!" cuando ejecutas el comando 
```

## Valores predeterminados

Podemos hacer que nuestra función sea aún más flexible agregando más parámetros. Pero, ¿y si no queremos que se especifiquen todos los valores? Siguiendo con nuestro ejemplo de saludo, podríamos dejar el nombre según sea necesario (necesitamos saber a quién saludamos), pero queremos permitir que el saludo en sí se personalice como desee. Si alguien no quiere personalizarlo, proporcionamos un valor predeterminado en su lugar. Para proporcionar un valor predeterminado a un parámetro, lo configuramos de la misma manera que configuramos un valor para una variable: `parameterName = 'defaultValue'`. Para ver un ejemplo completo:

```javascript
function displayGreeting(name, salutation='Hola') {
  console.log(`${salutation}, ${name}`);
}
```

Cuando llamamos a la función, podemos decidir si queremos establecer un valor para el "saludo".

```javascript
displayGreeting('Paco');
// dice "Hola, Paco"

displayGreeting('Paco', 'Hola');
// dice "Hola, Paco"
```
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a
### Parámetro

Los parámetros se enumeran en la parte de definición entre paréntesis y están separados por comas así:

```javascript
(param, param2, param3)
```

### Parámetro

<<<<<<< HEAD
Cuerpo de función
=======
Hasta ahora, la función que construimos siempre saldrá a la [consola](https://developer.mozilla.org/en-US/docs/Web/API/console). A veces, esto puede ser exactamente lo que estamos buscando, especialmente cuando creamos funciones que llamarán a otros servicios. Pero, ¿qué pasa si quiero crear una función auxiliar para realizar un cálculo y devolver el valor para poder usarlo en otro lugar?

Podemos hacer esto usando un **valor de retorno**. La función devuelve un valor de retorno y se puede almacenar en una variable de la misma manera que podríamos almacenar un valor literal como una cadena o un número.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

Aquí define qué tarea debe realizar la función. Una función puede devolver algo o no. Si una función devuelve algo, entonces se usa la palabra clave `return`. La palabra clave `return` espera un valor o referencia de lo que se devuelve así:


```javascript
return myVariable;
```  

Un ejemplo más completo puede verse así:

```javascript
function add(firstValue, secondValue) {
  let sum = firstValue + secondValue;
  return sum;
}
```

En el código anterior, se devuelve la variable `sum`.

### Invocación

<<<<<<< HEAD
Cuando _invocas_ una función, la llamas con 0...N conjuntos de argumentos. Los valores de los argumentos se vinculan a los parámetros correspondientes a su posición. El método `add()` introducido se puede invocar de la siguiente manera:
=======
Cuando _invocas_ una función, la llamas con 0...N conjuntos de argumentos. Los valores de los argumentos se vinculan a los parámetros correspondientes a su posición. El función `add()` introducido se puede invocar de la siguiente manera:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a


```javascript
let result = add(1, 3);
console.log(result); // imprime 4
```

Los argumentos `1` y `3` están vinculados a los parámetros `firstValue` y `secondValue` debido al orden en el que se definen los parámetros.

JavaScript es bastante flexible cuando se trata de invocaciones. No está obligado a proporcionar argumentos para todos los parámetros, el código se ejecutará de todos modos. Sin embargo, dependiendo de lo que le pase, es posible que el código no se comporte como se esperaba.

<<<<<<< HEAD
> Desafío, intente llamar al método `add()` así `add(1)` y vea qué sucede
=======
> Desafío, intente llamar al función `add()` así `add(1)` y vea qué sucede
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

### Valores predeterminados

También existe el concepto de _ valores predeterminados_ en los parámetros. Esto significa que si no se pasa un argumento a un parámetro durante la invocación, el parámetro asumirá el valor predeterminado. Considere el siguiente código usando un valor predeterminado:


```javascript
function add5(firstValue, secondValue = 5) {
  return firstValue + secondValue;
}
```

La invocación de la función anterior podría verse así:

```javascript
add5 (4) // devuelve 9
add5 (4,2) // devuelve 6
```

Cualquier parámetro con valores predeterminados debe estar al final de la lista de parámetros. La razón es que JavaScript intenta hacer coincidir argumentos con parámetros y los parámetros con valores predeterminados pueden omitirse en la invocación.

🚀 Desafío:


## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/10)

## Revisión y autoestudio

<<<<<<< HEAD
TODO
=======
Vale la pena [leer un poco más sobre las funciones de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), ya que se utilizan cada vez más en bases de código. Practique escribir una función y luego reescribirla con esta sintaxis.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

**Tarea**: [Práctica de tipos de datos](assignment.es.md)

