# Introducción a GitHub

<<<<<<< HEAD
Esta lección cubre los conceptos básicos de GitHub, una plataforma para alojar y administrar cambios en su código.
=======
Esta lección cubre los conceptos básicos de GitHub, una plataforma para alojar y administrar cambios en tu código.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/3)

### Introducción

En esta lección, cubriremos:

<<<<<<< HEAD
- seguimiento del trabajo que realiza en su máquina
- trabajar en proyectos con otros
- cómo contribuir al software de código abierto

### Prerrequisitos

Antes de comenzar, deberá verificar si Git está instalado. En el tipo de terminal:
`git --version`

Si Git no está instalado, [descargar Git](https://git-scm.com/downloads). Luego, configure su perfil de Git local en la terminal:
`git config --global user.name "tu-nombre"`
`git config --global user.email "tu-email"`

Para comprobar si Git ya está configurado, puede escribir:
`git config --list`

También necesitará una cuenta de GitHub, un editor de código (como Visual Studio Code) y deberá abrir su terminal (o: símbolo del sistema).

Vaya a [github.com](https://github.com/) y cree una cuenta si aún no lo ha hecho, o inicie sesión y complete su perfil.
=======
- dando seguimiento al trabajo que realizas en tu máquina
- trabajar en proyectos con otros
- cómo contribuir al software de código abierto (open source)

### Prerrequisitos

Antes de comenzar, verifica si Git está instalado. Escribe en tu terminal:
`git --version`

Si Git no está instalado, [descarga Git aquí](https://git-scm.com/downloads). Luego, configura tu perfil de Git local en la terminal:
`git config --global user.name "tu-nombre"`
`git config --global user.email "tu-email"`

Para comprobar si Git ya está configurado, escribe:
`git config --list`

También necesitarás una cuenta de GitHub, un editor de código (como Visual Studio Code) y deberás abrir tu terminal.

Ve a [github.com](https://github.com/) y crea una cuenta si aún no lo has hecho, o inicia sesión y completa tu perfil.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

✅ GitHub no es el único repositorio de código del mundo; hay otros, pero GitHub es el más conocido.

### Preparación

<<<<<<< HEAD
Necesitará una carpeta con un proyecto de código en su máquina local (computadora portátil o PC) y un repositorio público en GitHub, que le servirá como ejemplo de cómo contribuir a los proyectos de otros.
=======
Necesitarás una directorio con un proyecto de código en tu máquina local (computadora portátil o PC) y un repositorio público en GitHub, que te servirá como ejemplo de cómo contribuir a los proyectos de otros.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

---

## Gestión de código

<<<<<<< HEAD
Digamos que tiene una carpeta localmente con algún proyecto de código y desea comenzar a rastrear su progreso usando git, el sistema de control de versiones. Algunas personas comparan el uso de git con escribir una carta de amor a su yo futuro. Al leer sus mensajes de confirmación días, semanas o meses después, podrá recordar por qué tomó una decisión o "revertir" un cambio, es decir, cuando escribe buenos "mensajes de confirmación".

### Tarea: hacer un repositorio y enviar código

1. **Crear repositorio en GitHub**. En GitHub.com, en la pestaña de repositorios, o en la barra de navegación superior derecha, busque el botón **nuevo repositorio**.

    1. Dale un nombre a tu repositorio (carpeta)
    1. Seleccione **crear repositorio**.

1. **Navegue a su carpeta de trabajo**. En su terminal, cambie a la carpeta (también conocida como directorio) que desea comenzar a rastrear. Tipo:

   ```bash
   cd [nombre de tu carpeta]
   ```

1. **Inicializar un repositorio de git**. En su tipo de proyecto:
=======
Digamos que tienes una directorio local con algún proyecto de código y deseas rastrear tu progreso usando git, el sistema de control de versiones. Algunas personas comparan el uso de git con escribir una carta de amor a tu futuro. Al leer tus mensajes de confirmación días, semanas o meses después, podrás recordar por qué tomaste una decisión o "revertiste" un cambio, es decir, cuando escribes buenos "mensajes de confirmación".

### Tarea: hacer un repositorio git y enviar código

1. **Crear repositorio en GitHub**. En GitHub.com, en la pestaña de repositorios, o en la barra de navegación superior derecha, busca el botón **nuevo repositorio**.

    1. Dale un nombre a tu repositorio (directorio)
    1. Selecciona **crear repositorio**.

1. **Navegue a su directorio de trabajo**. En tu terminal, cambia a la directorio (también conocida como directorio) que deseas comenzar a rastrear. Escribe:

   ```bash
   cd [nombre de tu directorio]
   ```

1. **Inicializar un repositorio de git**. En tu proyecto escribe:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git init
   ```

<<<<<<< HEAD
1. **Comprobar estado**. Para comprobar el estado de su tipo de repositorio:
=======
1. **Comprobar estado**. Para checar el estado del proyecto escribe:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git status
   ```

<<<<<<< HEAD
   la salida puede verse así:
=======
   La respuesta de la terminal (CLI) probablemente se verá así:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

<<<<<<< HEAD
   Por lo general, un comando `git status` le dice cosas como qué archivos están listos para ser guardados en el repositorio o tiene cambios que es posible que desee conservar.
=======
   Por lo general, un comando `git status` te dice cosas como qué archivos están listos para ser guardados en el repositorio o cambios en tu codigo que puedes conservar.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

1. **Agregar archivos al seguimiento**

   ```bash
   git add .
   ```

<<<<<<< HEAD
   El argumento `git add` más `.` indica que todos sus archivos y cambios para el seguimiento.

1. **Persistir en tu trabajo**. En este punto, ha agregado los archivos a lo que se denomina _área de preparación_. Un lugar donde Git rastrea sus archivos. Para que el cambio sea permanente, debe _commitir_ los archivos. Para hacerlo, crea un _commit_ con el comando `git commit`. Un _commit_ representa un punto de ahorro en el historial de su repositorio. Escriba lo siguiente para crear un _commit_:
=======
   El argumento `git add` más `.` indica que todos tus archivos y cambios están listos para darles seguimiento.

1. **Persistir en tu trabajo**. En este punto, has agregado los archivos a lo que se denomina _área de preparación_. Un lugar donde Git rastrea tus archivos. Para que el cambio sea permanente, debes _commitir_ los archivos. Para hacerlo, creas un _commit_ con el comando `git commit`. Un _commit_ representa un punto en el historial de tu repositorio que estás guardando. Escribe lo siguiente para crear un _commit_:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git commit -m "first commit"
   ```

<<<<<<< HEAD
   Esto confirma todos sus archivos, agregando el mensaje "primer compromiso". Para futuros mensajes de confirmación, querrá ser más descriptivo en su descripción para transmitir qué tipo de cambio ha realizado.

1. **Conecte su repositorio de Git local con GitHub**. Un repositorio de Git es bueno en su máquina, pero en algún momento desea tener una copia de seguridad de sus archivos en algún lugar y también invitar a otras personas a trabajar con usted en su repositorio. Un gran lugar para hacerlo es GitHub. Recuerde que ya hemos creado un repositorio en GitHub, por lo que lo único que debemos hacer es conectar nuestro repositorio de Git local con GitHub. El comando `git remote add` hará precisamente eso. Escriba el siguiente comando:


   > Tenga en cuenta que antes de escribir el comando, vaya a la página de su repositorio de GitHub para encontrar la URL del repositorio. Lo usará en el siguiente comando. Reemplaza `repository_name` con tu URL de GitHub.

=======
   Esto confirma todos tus archivos, agregando el mensaje "primer compromiso". Para futuros mensajes de confirmación, querrás ser más descriptivo en tu descripción para transmitir qué tipo de cambio has realizado.

1. **Conecta tu repositorio de Git local con GitHub**. Es bueno tener un repositorio de Git en tu máquina, pero también tienes que guarder todos sus archivos en algún lugar e invitar a otras personas a trabajar contigo en tu repositorio. Un buen lugar para hacerlo es GitHub. Recuerda que ya hemos creado un repositorio en GitHub, por lo que lo único que debemos hacer es conectar nuestro repositorio de Git local con GitHub. El comando `git remote add` hará precisamente eso. Escribe el siguiente comando:

   > Nota, antes de escribir el comando, ve a la página de tu repositorio de GitHub para encontrar el URL del repositorio. Lo usarás en el siguiente comando. Reemplaza `repository_name` con tu URL de GitHub.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

<<<<<<< HEAD
   Esto crea un _remote_, o conexión, llamado "origin" que apunta al repositorio de GitHub que creó anteriormente.
=======
   Esto crea un _remote_, o conexión, llamado "origin" que apunta al repositorio de GitHub que creaste anteriormente.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

1. **Envía archivos locales a GitHub**. Hasta ahora ha creado una _conexión_ entre el repositorio local y el repositorio de GitHub. Enviemos estos archivos a GitHub con el siguiente comando `git push`, así:
 

   ```bash
   git push -u origin main
   ```

<<<<<<< HEAD
   Esto envía sus confirmaciones en su rama "principal" a GitHub.

1. **Para agregar más cambios**. Si desea continuar haciendo cambios y enviarlos a GitHub, solo necesitará usar los siguientes tres comandos:
=======
   Esto envía una confirmación en tu rama "principal" a GitHub.

1. **Para agregar más cambios**. Si deseas continuar haciendo cambios y enviarlos a GitHub, solo necesitas usar los siguientes tres comandos:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git add .
   git commit -m "escribe tu mensaje de confirmación aquí"
   git push
   ```

<<<<<<< HEAD
   > Sugerencia: es posible que también desee adoptar un archivo `.gitignore` para evitar que los archivos que no desea rastrear aparezcan en GitHub, como el archivo de notas que almacena en la misma carpeta pero no tiene lugar para escribir su mensaje de confirmación aquí repositorio público. Puede encontrar plantillas para archivos `.gitignore` en [.gitignore templates](github.com/github/gitignore).
=======
   > Sugerencia: es posible que también desees adoptar un archivo `.gitignore` para evitar que los archivos que no deseas rastrear aparezcan en GitHub. Puedes encontrar plantillas para archivos `.gitignore` en [.gitignore templates](github.com/github/gitignore).
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a


#### Confirmar mensajes

<<<<<<< HEAD
Una gran línea de asunto de confirmación de Git completa la siguiente oración:
Si se aplica, esta confirmación será <su línea de asunto aquí>

Para el sujeto use el imperativo, tiempo presente: "cambiar" no "cambiar" ni "cambiar".
=======
Una buena línea de asunto (subject line) de confirmación de Git completa la siguiente oración:
Si se aplica, esta confirmación será <su línea de asunto aquí>

Para el sujeto use el imperativo, tiempo presente: "cambiar" no "cambió" ni "cambiara".
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a
Como en el sujeto, en el cuerpo (opcional) también use el imperativo, presente. El cuerpo debe incluir la motivación para el cambio y contrastarla con la conducta anterior. Estás explicando el "por qué", no el "cómo".

✅ Tómate unos minutos para navegar por GitHub. ¿Puedes encontrar un mensaje de compromiso realmente bueno? ¿Puedes encontrar uno realmente mínimo? ¿Qué información crees que es la más importante y útil de transmitir en un mensaje de compromiso?

### Tarea: Colaborar

<<<<<<< HEAD
=======

>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a
La razón principal para poner cosas en GitHub fue hacer posible la colaboración con otros desarrolladores.

## Trabajando en proyectos con otros

<<<<<<< HEAD
En su repositorio, vaya a `Insights > Community` para ver cómo se compara su proyecto con los estándares comunitarios recomendados.

   Aquí hay algunas cosas que pueden mejorar su repositorio de GitHub:
   - **Descripción**. ¿Agregaste una descripción para tu proyecto?
   - **README**. ¿Agregaste un archivo README? GitHub proporciona una guía para escribir un [README](https://docs.github.com/articles/about-readmes/).
   - **Pauta de contribución**. ¿Su proyecto tiene [pautas de contribución](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/),
   - **Código de Conducta**. un [Código de conducta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/),
   - **Licencia**. Quizás lo más importante, una [licencia](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Todos estos recursos beneficiarán la incorporación de nuevos miembros del equipo. Y esos son típicamente el tipo de cosas que los nuevos colaboradores miran antes incluso de mirar su código, para descubrir si su proyecto es el lugar adecuado para que ellos pasen su tiempo.

✅ Los archivos README, aunque requieren tiempo para prepararse, a menudo son descuidados por los ocupados mantenedores. ¿Puede encontrar un ejemplo de uno particularmente descriptivo? Nota: hay algunas [herramientas para ayudar a crear buenos archivos READMEs](https://www.makeareadme.com/) que le gustaría probar.


### Tarea: Fusionar código

Los documentos que contribuyen ayudan a las personas a contribuir al proyecto. Explica qué tipos de contribuciones está buscando y cómo funciona el proceso. Los colaboradores deberán seguir una serie de pasos para poder contribuir a su repositorio en GitHub:

1. **Bifurcando su repositorio** Probablemente querrá que la gente _bifurque_ su proyecto. Bifurcar significa crear una réplica de su repositorio en su perfil de GitHub.
1. **Clonar**. Desde allí, clonarán el proyecto en su máquina local.
1. **Crea una rama**. Querrá pedirles que creen una _ rama_ para su trabajo.
1. **Concentre su cambio en un área**. Pida a los colaboradores que concentren sus contribuciones en una cosa a la vez; de esa manera, las posibilidades de que pueda _fusionar_ en su trabajo son mayores. Imagine que escriben una corrección de errores, agregan una nueva función y actualizan varias pruebas; ¿qué sucede si lo desea o solo puede implementar 2 de 3 o 1 de 3 cambios?

✅ Imagine una situación en la que las sucursales son particularmente críticas para escribir y enviar un buen código. ¿En qué casos de uso se te ocurren?

> Tenga en cuenta que sea el cambio que desea ver en el mundo y cree también sucursales para su propio trabajo. Todas las confirmaciones que realice se realizarán en la sucursal en la que está actualmente "registrado". Use `git status` para ver qué rama es esa.

Repasemos el flujo de trabajo de un colaborador. Suponga que el colaborador ya ha _bifurcado_ y _clonado_ el repositorio para que tenga un repositorio de Git listo para trabajar en su máquina local:

1. **Crea una rama**. Use el comando `git branch` para crear una rama que contendrá los cambios que pretenden contribuir:
=======
En tu repositorio, ve a `Insights > Community` para ver cómo se compara tu proyecto con los estándares comunitarios recomendados.

   Aquí hay algunas cosas que pueden mejorar tu repositorio de GitHub:
   - **Descripción**. ¿Agregaste una descripción para tu proyecto?
   - **README**. ¿Agregaste un archivo README? GitHub proporciona una guía para escribir un [README](https://docs.github.com/articles/about-readmes/).
   - **Guía de contribución**. ¿Tiene [guías de contribución](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/) tu proyecto?
   - **Código de Conducta**. Crea un [Código de conducta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/).
   - **Licencia**. Quizás lo más importante, una [licencia](https://docs.github.com/articles/adding-a-license-to-a-repository/).

Todos estos recursos beneficiarán la incorporación de nuevos miembros del equipo. Y esos son típicamente el tipo de cosas que los nuevos colaboradores miran antes incluso de mirar tu código, para descubrir si tu proyecto es el lugar adecuado para que ellos pasen su tiempo.

✅ Los archivos README, aunque requieren tiempo para prepararse, a menudo son descuidados por los mantenedores. ¿Puedes encontrar un ejemplo de uno particularmente descriptivo? Nota: aquí hay algunas [herramientas para ayudar a crear buenos archivos READMEs](https://www.makeareadme.com/) que te puedes probar.


### Tarea: Fusionar (merging) código

Los documentos que contribuyes ayudan a las personas a contribuir al proyecto. Explica qué tipos de contribuciones estás buscando y cómo funciona el proceso. Los colaboradores deberán seguir una serie de pasos para poder contribuir a tu repositorio en GitHub:

1. **Bifurcando (forking) tu repositorio** Probablemente querrás que la gente _bifurque_ (fork) tu proyecto. Bifurcar significa crear una réplica de tu repositorio en su perfil de GitHub.
1. **Clonar**. Desde allí, clonarán el proyecto en su máquina local.
1. **Crear una rama**. Querrás pedirles que creen una _ rama_ para su trabajo.
1. **Concentre su cambio en un área**. Pida a los colaboradores que concentren sus contribuciones en una cosa a la vez; de esa manera, las posibilidades de _fusionar_ su trabajo son mayores. Imagínate que escriben una corrección de errores, agregan una nueva función y actualizan varias pruebas; ¿qué sucede si quieres todos los cambios o solo puedes implementar 2 de 3 o 1 de 3 cambios?

✅ Imagínate una situación en la que las ramas (branches) de git son particularmente críticas para escribir y enviar buen código. ¿Qué casos de uso se te ocurren?

> Se el cambio que deseas ver en el mundo y crea también ramas  para tu propio trabajo. Todas las confirmaciones que realices se realizarán en la rama en la que estás actualmente "registrado". Usa `git status` para ver qué rama es.

Repasemos el flujo de trabajo de un colaborador. Supon que el colaborador ya ha _bifurcado_ y _clonado_ el repositorio para que tenga un repositorio de Git listo para trabajar en su máquina local:

1. **Crea una rama**. Usa el comando `git branch` para crear una rama que tendrá los cambios que quieres contribuir:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git branch [branch-name]
   ```

<<<<<<< HEAD
1. **Cambiar a rama de trabajo**. Cambie a la rama especificada y actualice el directorio de trabajo con `git checkout`:
=======
1. **Cambiar a rama de trabajo**. Cambia a la rama especificada y actualiza tu directorio de trabajo con `git checkout`:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git checkout [branch-name]
   ```

<<<<<<< HEAD
1. **Trabaja**. En este punto, desea agregar sus cambios. No olvide informarle a Git con los siguientes comandos:
=======
1. **Trabaja**. En este punto, deseas agregar tus cambios. No olvides informarle a Git con los siguientes comandos:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git add .
   git commit -m "mis cambios"
   ```

<<<<<<< HEAD
   Asegúrese de darle un buen nombre a su compromiso, por su bien y por el mantenedor del repositorio en el que está ayudando.

1. **Combine su trabajo con la rama `principal`**. En algún momento ha terminado de trabajar y desea combinar su trabajo con el de la rama `principal`. La rama `main` podría haber cambiado mientras tanto, así que asegúrese de actualizarla primero a la última con los siguientes comandos:
=======
   Asegúrate de darle un buen nombre a tu commit, tanto por tu bien como por el mantenedor del repositorio en el que estás ayudando.

1. **Combina tu trabajo con la rama `principal`**. En algún momento has terminado de trabajar y deseas combinar tu trabajo con el de la rama `principal`. La rama `main` podría haber cambiado mientras tanto, así que asegúrate de actualizarla con los siguientes comandos:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git checkout main
   git pull
   ```

<<<<<<< HEAD
   En este punto, querrá asegurarse de que cualquier _conflicto_, situaciones en las que Git no pueda _combinarse_ fácilmente los cambios, ocurra en su rama de trabajo. Por lo tanto, ejecute los siguientes comandos:
=======
   En este punto, querrás asegurarte de que cualquier _conflicto_, situaciones en las que Git no pueda _combinarse_ fácilmente los cambios, ocurren en tu rama de trabajo. Mientras tanto, ejecuta los siguientes comandos:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   Esto traerá todos los cambios de `main` a su rama y es de esperar que pueda continuar. De lo contrario, VS Code le dirá dónde está _confundido_ Git y simplemente modificará los archivos afectados para decir qué contenido es el más preciso.

<<<<<<< HEAD
1. **Envíe su trabajo a GitHub**. Enviar tu trabajo a GitHub significa dos cosas. Empujar su sucursal a su repositorio y luego abrir un PR, Pull Request.
=======
1. **Envía tu trabajo a GitHub**. Enviar tu trabajo a GitHub significa dos cosas. Empujar tu rama a tu repositorio y luego abrir un PR (Pull Request).
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git push --set-upstream origin [branch-name]
   ```

<<<<<<< HEAD
   El comando anterior crea la rama en su repositorio bifurcado.

1. **Abra una PR**. A continuación, desea abrir un PR. Para hacerlo, navegue al repositorio bifurcado en GitHub. Verá una indicación en GitHub donde le preguntará si desea crear un nuevo PR, haga clic en eso y lo llevará a una interfaz donde puede cambiar el título del mensaje de confirmación, asígnele una descripción más adecuada. Ahora, el mantenedor del repositorio que bifurcó verá este PR y _dedos cruzados_ apreciarán y _ fusionar_ su PR. Ahora eres un colaborador, yay :)

1. **Limpiar**. Se considera una buena práctica _limpiar_ después de ti. Desea limpiar tanto su sucursal local como la sucursal que envió a GitHub. Primero eliminémoslo localmente con el siguiente comando:
=======
   El comando anterior crea la rama en tu repositorio bifurcado.

1. **Abre un PR**. A continuación, abre un PR. Para hacerlo, navega al repositorio bifurcado en GitHub. Verás una indicación en GitHub donde te preguntarán si deseas crear un nuevo PR. Haz clic en eso y lo llevará a una interfaz donde puedes cambiar el título del mensaje de confirmación, asignarle una descripción más adecuada. Ahora, el mantenedor del repositorio que bifurcaste verá este PR y _dedos cruzados_ apreciarán y _ fusionarán_ tu PR. Ahora eres un colaborador, yay :)

1. **Limpiar**. Se considera una buena práctica _limpiar_ después de ti. Limpiar tanto tu rama local como la rama que enviaste a GitHub. Primero eliminémoslo localmente con el siguiente comando:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

   ```bash
   git branch -d [branch-name]
   ```

<<<<<<< HEAD
   Asegúrese de ir a la página de GitHub para el repositorio bifurcado a continuación y elimine la rama remota que acaba de ingresar.

`Solicitud de extracción` parece un término tonto porque realmente desea impulsar los cambios al proyecto. Pero el mantenedor (propietario del proyecto) o el equipo central debe considerar sus cambios antes de fusionarlo con la rama "principal" del proyecto, por lo que realmente está solicitando una decisión de cambio a un mantenedor.

Una solicitud de extracción es el lugar para comparar y discutir las diferencias introducidas en una rama con revisiones, comentarios, pruebas integradas y más. Una buena solicitud de extracción sigue aproximadamente las mismas reglas que un mensaje de confirmación. Puede agregar una referencia a un problema en el rastreador de problemas, cuando su trabajo, por ejemplo, soluciona un problema. Esto se hace usando un '#' seguido del número de su problema. Por ejemplo, `#97`.

🤞 Cruce los dedos para que todos los controles pasen y los propietarios del proyecto combinen sus cambios en el proyecto🤞

Actualice su rama de trabajo local actual con todas las nuevas confirmaciones de la rama remota correspondiente en GitHub:
=======
   Asegúrate de ir a la página de GitHub del repositorio bifurcado a continuación y elimina la rama remota que acabas de ingresar.

`Solicitud de extracción` parece un término tonto porque realmente deseas impulsar los cambios al proyecto. Pero el mantenedor (propietario del proyecto) o el equipo central debe considerar tus cambios antes de fusionarlo con la rama "principal" del proyecto, por lo que realmente estás solicitando una decisión de cambio a un mantenedor.

Una solicitud de extracción es el lugar para comparar y discutir las diferencias introducidas en una rama con revisiones, comentarios, pruebas integradas y más. Una buena solicitud de extracción sigue aproximadamente las mismas reglas que un mensaje de confirmación. Puedes agregar una referencia a un problema en el rastreador de problemas, cuando tu trabajo, por ejemplo, soluciona un problema. Esto se hace usando un '#' seguido del número de tu problema. Por ejemplo, `#97`.

🤞 Cruza los dedos para que todos los controles pasen y los propietarios del proyecto combinen tus cambios en el proyecto🤞

Actualice tu rama de trabajo local actual con todas las nuevas confirmaciones de la rama remota correspondiente en GitHub:
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

`git pull`

## Cómo contribuir al código abierto

<<<<<<< HEAD
Primero, busquemos un repositorio (o: repositorio) en GitHub que le interese y al que le gustaría contribuir con un cambio. Querrá copiar el contenido de a nuestra máquina.
=======
Primero, busquemos un repositorio en GitHub que te interese y al que te gustaría contribuir con un cambio. Querrás copiar el contenido a nuestra máquina.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

✅ Una buena forma de encontrar repositorios 'aptos para principiantes' es [buscar por la etiqueta `buena-primera-edición`](https://github.blog/2020-01-22-browse-good-first-issues-para-empezar-a-contribuir-al-código-abierto/).

Hay varias formas de copiar código. Una forma es "clonar" el contenido del repositorio, usando HTTPS, SSH o usando GitHub CLI (Interfaz de línea de comandos).

<<<<<<< HEAD
Abra su terminal y clone el repositorio así:
`git clone https://github.com/ProjectURL`

Para trabajar en el proyecto, cambie a la carpeta correcta:
`cd ProjectURL`

También puede abrir todo el proyecto utilizando [Codespaces](https://github.com/features/codespaces), el entorno de desarrollo en la nube / editor de código integrado de GitHub o [GitHub Desktop](https://desktop.github.com/).

Por último, puede descargar el código en una carpeta comprimida.

### Algunas cosas más interesantes sobre GitHub

Puede destacar, ver y / o "fork" cualquier repositorio público en GitHub. Puede encontrar sus repositorios destacados en el menú desplegable de la parte superior derecha. Es como marcar como favorito, pero por código.
=======
Abre tu terminal y clona el repositorio así:
`git clone https://github.com/ProjectURL`

Para trabajar en el proyecto, cambia al directorio correcto:
`cd ProjectURL`

También puedes abrir todo el proyecto utilizando [Codespaces](https://github.com/features/codespaces), el entorno de desarrollo en la nube / editor de código integrado de GitHub o [GitHub Desktop](https://desktop.github.com/).

Por último, puedes descargar el código en un directorio comprimido.

### Algunas cosas más interesantes sobre GitHub

Puede destacar, ver y / o "fork" cualquier repositorio público en GitHub. Puedes encontrar tus repositorios destacados en el menú desplegable de la parte superior derecha. Es como marcar como favorito, pero por código.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

Los proyectos tienen un rastreador de problemas, principalmente en GitHub en la pestaña "Issues" a menos que se indique lo contrario, donde las personas debaten los problemas relacionados con el proyecto. Y la pestaña Solicitudes de extracción es donde las personas debaten y revisan los cambios que están en curso.

Los proyectos también pueden tener discusiones en foros, listas de correo o canales de chat como Slack, Discord o IRC.

<<<<<<< HEAD
✅ Eche un vistazo a su nuevo repositorio de GitHub y pruebe algunas cosas, como editar la configuración, agregar información a su repositorio y crear un proyecto (como un tablero Kanban). ¡Hay muchas cosas que puedes hacer!

🚀 Desafío: empareje con un amigo para trabajar en el código del otro. Cree un proyecto de forma colaborativa, bifurque el código, cree ramas y combine los cambios.
=======
✅ Echa un vistazo a tu nuevo repositorio de GitHub y prueba algunas cosas, como editar la configuración, agregar información a tu repositorio y crear un proyecto (como un tablero Kanban). ¡Hay muchas cosas que puedes hacer!

🚀 Desafío: empareja con un amigo(a) para trabajar en el código juntos. Crea un proyecto de forma colaborativa, bifurque el código, crea ramas y combina los cambios.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/4)

## Revisión y autoestudio

<<<<<<< HEAD
Obtenga más información sobre [contribución al software de código abierto](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).
=======
Obtén más información sobre [contribución al software de código abierto](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

[Hoja de referencia de Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Práctica práctica práctica. GitHub tiene excelentes rutas de aprendizaje disponibles a través de [lab.github.com](https://lab.github.com/):

- [Primera semana en GitHub](https://lab.github.com/githubtraining/first-week-on-github)

<<<<<<< HEAD
También encontrará laboratorios más avanzados.
=======
También encontrarás laboratorios más avanzados.
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a

**Tarea**: Completa [la primera semana en el laboratorio de capacitación de GitHub](https://lab.github.com/githubtraining/first-week-on-github)
