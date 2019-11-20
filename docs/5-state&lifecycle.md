autoscale: true
slidenumbers: true
theme: Courier, 7

# State

---

## State

- Hasta ahora habiamos visto solo componentes sin estado interno. Fotogramas basados en el render y las props (Funciones puras)

- Los componentes en React pueden tener un estado interno

---

```javascript
class Person extends React.Component{
  constructor(props) {
    super(props);
    this.state = { age: 0 }
    this.incrementAge = this.incrementAge.bind(this)
  }
  componentDidMount() {
    console.log('Component inserted in DOM');
  }
  componentWillUnmount() {
    console.log('The component will be detached');
  }
  incrementAge(){
    this.setState((state, props) => ({ age: state.age + 1; }));
  }
  render() {
    return(
      <div>
        <label>My age is: {this.state.age}</label>
        <button onClick={this.incrementAge}>Grow me older !!<button>
      </div>
    );
  }
}
```

---

1. Cuando se pasa <Person /> a ReactDOM.render(), React invoca al constructor del componente `Person`. Inicializa `this.state` con un objeto con la edad de la persona

2. React invoca entonces al método `render()` del componente `Person`. Así es como React sabe lo que se debe mostrar en pantalla. React entonces actualiza el DOM para que coincida con la salida del renderizado de Person

3. Cuando la salida de `Person` se inserta en el DOM, React invoca al método de ciclo de vida `componentDidMount()`

4. Cada vez que pulsamos sobre el botón se realiza una llamada a `setState()` planificando una actualización de la interfaz de usuario incrementado la edad. Gracias a la invocación a `setState()`, React sabe que el estado cambió e invoca de nuevo al método `render()` para saber qué debe estar en la pantalla. Esta vez, `this.state.age` en el método `render()` será diferente, por lo que el resultado del renderizado incluirá la edad actualizada. Conforme a eso React actualiza el DOM

5. Si el componente `Person` se elimina en algún momento del DOM, React invoca al método de ciclo de vida `componentWillUnmount()`, por lo que podemos realizar labores de recogida de 🚮

---

> Los componentes de React sólo se renderizan de nuevo cuando se modifica el state o las props a través de setState()

---

## No actualizar el estado directamente

```javascript
this.state.age = 5; // Mal!! (Sólo se puede hacer en el constructor o mediante una propiedad de la clase)
this.setState({ age: 5 }); // Bien!!
```

---

##  setState() es asíncrono

```javascript
// Mal. El estado no esta garantizado que se haya actualizado
this.setState({
  age: this.state.age + 1;
});

// Bien. El estado esta garantizado que es el correcto
this.setState((state, props) => ({
  age: state.age + 1;
}));
```

---

## Las actualizaciones se fusionan

```javascript
constructor(props) {
  super(props);
  this.state = { posts: [], comments: [] };
}

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
```

---

## Tips

- Si necesito renderizar un componente que no depende del flujo normal puedo usar `forceUpdate()`

- https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster  (Diagrama decision estado)

