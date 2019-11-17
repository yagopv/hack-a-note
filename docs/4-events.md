autoscale: true
slidenumbers: true
theme: Next, 1

# Events

---

## Events

Los eventos en React se definen de forma similar a los eventos DOM en el HTML

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

```javascript
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

---

## Events

Los eventos en React se han de cancelar de forma explicita utilizando `preventDefault()`

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

---

## this con bind

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

---

## this con property method

```javascript
class LoggingButton extends React.Component {
  // Esta sintaxis nos asegura que `this` está ligado dentro de handleClick
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

---

## this con arrow

```javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

---

## Lifting de eventos (Paso de datos a padres)

```javascript
class ReloadButton extends React.Component {
  render() {
    return (
        <button onClick={this.props.actionToPerform}>{this.props.label}</button>
    )
  }
}

---

## Tips

- Los eventos que permite enlazar React son los enumerados aquí (https://es.reactjs.org/docs/events.html)
- No puedo enlazar eventos en window ya que quedan fuera del arbol de componentes React