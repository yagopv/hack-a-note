autoscale: true
slidenumbers: true
theme: Next, 1

# JSX

---

## JSX. Que es

- HTML, CSS, y Javascript en el mismo sitio?. Todo lo que conociamos se desmorona 😱
- La lógica de `render` (dibujado) está ligada a la lógica de UX/UI
- No es obligatorio pero nadie lo utiliza de otra forma

---

## Declaración de variables
  
```javascript
const element = <h1>Hello, world!</h1>;
```

---

## Insertando expresiones en JSX

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

---

### Puedes usar cualquier expresión JS entre { }

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

---

## En bucles y condicionales

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

---

## En atributos

```javascript
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;
const element = <img src={user.avatarUrl} />;
```

--- 

## Con hijos o sin hijos

```javascript
const element = <img src={user.avatarUrl} />;

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

---

## Con JSX vs sin JSX

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

---

## Tips
- Los componentes han de comenzar siempre por mayúscula
- Hemos de importar React para usar JSX ya que el compilador lo utiliza

---