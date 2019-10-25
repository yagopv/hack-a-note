autoscale: true
slidenumbers: true
theme: Next, 1

# Crear una nueva aplicación

**github** : https://github.com/facebook/create-react-app
**docs** : https://create-react-app.dev

```bash
npx create-react-app my-app
cd my-app
npm start
```

---

# react-scripts

En `package.json`

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

---

# Otras formas

- https://nextjs.org/
- https://www.gatsbyjs.org/
- https://parceljs.org/
- A mano?

---

![fit](https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif)

---

# Iniciar una aplicación React

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

