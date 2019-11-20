autoscale: true
slidenumbers: true
theme: Courier, 7

# Renderizado Condicional

---

## if

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

---

## Operador &&

```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```

---

## if-else (Operador ternario)

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
  );
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton  onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

---

## Evitar renderizado (null)

```javascript
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

---

## Listas

Transformamos los elementos del array en elementos React a través de `map()`

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

---

## Con keys

Se añade keys para optimizar el rendimiento. Deben ser únicos por elemento (index como último caso)

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}
```


