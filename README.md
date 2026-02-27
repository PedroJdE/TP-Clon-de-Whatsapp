- Mi desafío elegido es el recomendado por el trabajo práctico, es decir una app de mensajería similar a Whatsapp.
- Decidí llevar un diseño limpio bastante fiel a los diseños que ha tenido Whatsapp en esta época.
- Como dificultad presentada a la hora de resolverse, creo que (como en mucha de las apps actuales y páginas web) fue lograr un buen responsive fluido y bien funcional, que para la actualidad es muy importante que se vizualice estético y correctamente en los distintos formatos. 
- Aunque teniendo de base como ejemplo el funcionamiento responsive de este tipo de apps de mensajería tan utilizadas y comunes, con un poco de ayuda de inteligencia artifical (Gemini, ChatGpt) y más que nada el entendimiento de como funcionan los tamaños de pantalla, logré el resultado.
- Tuve un tiempo de adaptación al pasar de simplemente la estructura de 3 docs: html, Js y css, al entendimiento de las estructuras de carpetas y documentos en lo que es React con su segmentación de componentes y demás archivos... pero ya me acostumbré dandome cuenta que lo importante es llevar el proyecto bien organizado con sus carpetas, archivos .jsx y .css como también .js, más que nada con los nombres bien colocados y lo más entendibles y simples posible para luego no tener problema en las importaciones entre componentes.
- Como observación me llevo que todavía me falta práctica en las estructuras bases de java script, pero bueno nada que me haya impedido avanzar con el proyecto.

## Dependencias Utilizadas

### Dependencies
- **React** (^19.2.0) - Framework principal para construir la interfaz de usuario
- **React DOM** (^19.2.0) - Librería para renderizar componentes React en el navegador
- **React Icons** (^5.5.0) - Librería de iconos SVG para React
- **React Router DOM** (^7.13.0) - Librería de enrutamiento para navegación entre páginas
- **React Swipeable** (^7.0.2) - Librería para detectar gestos de swipe en dispositivos móviles

### DevDependencies
- **Vite** (^7.3.1) - Bundler y servidor de desarrollo rápido
- **@vitejs/plugin-react** (^5.1.1) - Plugin de Vite para soporte de React con HMR
- **ESLint** (^9.39.1) - Herramienta de linting para análisis de código
- Plugins asociados para ESLint y Vite



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
