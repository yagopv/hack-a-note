autoscale: true
slidenumbers: true
theme: Next, 1

# Rendering 

---

## Inicialización de la aplicación

```javascript
<div id="root"></div> //index.html

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

---

## Inmutabilidad

- Los elementos React son Inmutables. Fotogramas en el tiempo

```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

La realidad es que ⬆️ solo pasa una vez

---

## Diff

- React compara cada render con el anterior y sólo aplica las modificaciones que son necesarias

[Ejemplo](https://es.reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element)

---

## Componentes

- Representan partes de la interfaz de usuario
- Pueden ser Stateless o Statefull

---

## Funcionales

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## Clases

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## Render de Componentes

```javascript
// Paso de parametros como props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

---

## Qué ha pasado?

1. Llamamos a ReactDOM.render() con el elemento `<Welcome name="Sara" />`.
2. React llama al componente Welcome con `{name: 'Sara'}` como “props”.
3. Nuestro componente Welcome devuelve un elemento `<h1>Hello, Sara</h1>` como resultado.
4. React DOM actualiza eficientemente el DOM para que coincida con `<h1>Hello, Sara</h1>`.

---

## Dividir componentes

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

---

## Avatar

```javascript
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
```

---

## UserInfo

```javascript
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

---

## Comment

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

---

# Todos los componentes de React deben actuar como funciones puras con respecto a sus props.

---

## Funciones puras

- Los componentes de React deben ser tratados compo funciones puras. Para los mismos parametros obtenemos siempre el mismo resultado
- No podemos cambiar las props que nos llegan como parámetro (De hecho es una mala práctica en general) porque en ese caso no se obtendrían los resultados esperados

---

