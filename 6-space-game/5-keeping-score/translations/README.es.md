# Construye un juego espacial Parte V: Puntuación y vidas

![video](video-url)

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/37)

En esta lección, aprenderá cómo agregar puntos a un juego y calcular vidas.

## Dibujar texto en la pantalla

Para poder mostrar la puntuación de un juego en la pantalla, necesitará saber cómo colocar texto en la pantalla. La respuesta es usar el método `fillText()` en el objeto de lienzo. También puedes controlar otros aspectos como qué tipo de letra usar, el color del texto e incluso su alineación (izquierda, derecha, centro). A continuación se muestra un código que dibuja un texto en la pantalla.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

<<<<<<< HEAD
✅ Lea más sobre [cómo agregar texto a un lienzo](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ¡y siéntase libre de hacer que el suyo se vea más elegante!
=======
✅ Lea más sobre [cómo agregar texto a un lienzo](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ¡y siéntase libre de hacer que el suyo se vea más elegante!
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

## La vida, como concepto de juego

El concepto de tener una vida en un juego es solo un número. En el contexto de un juego espacial, es común asignar un conjunto de vidas que se deducen una por una cuando tu nave sufre daños. Es bueno si puede mostrar una representación gráfica de esto como miniships o corazones en lugar de un número.

## Qué construir

Agreguemos lo siguiente a tu juego:

- **Game score**** (Puntuación del juego): por cada barco enemigo que sea destruido, el héroe debería recibir algunos puntos, sugerimos 100 puntos por barco. La puntuación del juego debe mostrarse en la parte inferior izquierda.
- **Life** (Vida): Tu nave tiene tres vidas. Pierdes una vida cada vez que un barco enemigo choca contigo. Se debe mostrar un puntaje de vida en la parte inferior derecha y estar compuesto por el siguiente gráfico: [life image](solution/assets/life.png)..

## Pasos recomendados

Busque los archivos que se han creado para usted en la subcarpeta `your-work`. Debe contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Comienzas tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abre un navegador e ingresa esa dirección, en este momento debería representar al héroe y a todos los enemigos, y cuando presionas las flechas izquierda y derecha, el héroe se mueve y puede derribar enemigos.

### Agregar código

1. **Copie los recursos necesarios** de la carpeta `solution/ assets/` a la carpeta `your-work`; agregará un activo `life.png`. Agregue el lifeImg a la función window.onload:


    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Agregue el `lifeImg` a la lista de activos:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2.**Agregar variables**. Agregue un código que represente su puntaje total (0) y las vidas restantes (3), muestre estos puntajes en una pantalla.

3. **Amplíe la función `updateGameObjects()`**. Amplíe la función `updateGameObjects()` para manejar las colisiones enemigas:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Agrega `life` y `points`**.
    1. **Inicializar variables**. En `this.cooldown = 0` en la clase `Hero`, establece la vida y los puntos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Dibujar variables en pantalla**. Dibuja estos valores en la pantalla:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Agregar métodos al bucle del juego**. Asegúrese de agregar estas funciones a su función window.onload en `updateGameObjects ()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementa las reglas del juego**. Implementa las siguientes reglas del juego:

    1. **Por cada colisión entre héroes y enemigos**, resta una vida.
   
       Extiende la clase `Hero` para hacer esta deducción:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Por cada láser que golpea a un enemigo**, aumenta la puntuación del juego con 100 puntos.

       Extiende la clase Hero para hacer este incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Agregue estas funciones a sus Collision Event Emitters:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Investigue un poco para descubrir otros juegos creados con JavaScript / Canvas. ¿Cuáles son sus rasgos comunes?

Al final de este trabajo, deberías ver las pequeñas naves de 'vida' en la parte inferior derecha, los puntos en la parte inferior izquierda, y deberías ver que tu cuenta de vidas disminuye cuando chocas con enemigos y tus puntos aumentan cuando disparas a los enemigos. ¡Bien hecho! Tu juego está casi completo.

🚀Challenge: Tu código está casi completo. ¿Puedes imaginar tus próximos pasos?

## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/38)

## Revisión y autoestudio

Investigue algunas formas en las que puede incrementar y disminuir las puntuaciones y vidas del juego. Hay algunos motores de juegos interesantes como [PlayFab](https://playfab.com). ¿Cómo podría mejorar tu juego el uso de uno de estos?

**Tarea**: [Crear un juego de puntuación](assignment.es.md)
