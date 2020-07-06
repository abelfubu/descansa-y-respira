# Descansa y respira

[Live Demo - Descansa y respira](https://abelfubu.github.io/descansa-y-respira/)

Como estudiante de programación siempre llega ese momento en el que ya no ves nada y no sabes que pasa. Lo que no te dicen es que tus niveles de ansiedad podrían dispararse.

En ese momento es cuando te aconsejan que debes parar, respirar y concentrarte en otra cosa.

Por eso me ha parecido buena idea llegar a ese nivel de locura y estrés, precisamente programando algo para ayudar a otros a parar y respirar de una manera armoniosa.

## Construido con

Todo el proyecto está hecho solo con:

- HTML
- CSS
- javascript.

## Objetivos

Como podrás ver en el proyecto mismo, mis objetivos eran utilizar algunos nuevos conceptos con los que no estoy familiarizado, como variables en css, animaciones y algunas funciones de javascript como `setTimeout()` o añadir funciones on 'mousemove':

```javascript
document.addEventListener('mousemove', event => {
  const docEl = document.documentElement.style;
  const X = event.pageX;
  const Y = event.pageY;
  docEl.setProperty('--cursorX', `${X}px`);
  docEl.setProperty('--cursorY', `${Y}px`);
  pointer.style.left = `${X}px`;
  pointer.style.top = `${Y}px`;
});
```

...como la que veis en el ejemplo.

Ciertamente me lo he pasado genial, y ahora, a descansar y respirar! 😅

## Autor

[Abel de la Fuente - Perfil](https://abelfubu.github.io/abelfubu/)

[Github](https://github.com/abelfubu)

[Linkedin](https://www.linkedin.com/in/abel-de-la-fuente-53b0291aa/)
