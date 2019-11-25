autoscale: true
slidenumbers: true
theme: Courier, 7

# React Router

---

## Configuración rutas

```javascript
<BrowserRouter>
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/old-match">
      <Redirect to="/will-match" />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
</BrowserRouter>
```

---

### <BrowserRouter />

Permite enrutar usando el esquema habitual de URL's en el navegador

### <Switch />

Hace que sólo una ruta sea renderizada cuando se produce 1 o más matches

### <Route />

Permite configurar las condiciones en las que una ruta se activará

---

## Navegación a través de componentes

```javascript
<Link to="/home">Home</Link>
<NavLink to="/home" activeClassName="active">Home</NavLink>
<Redirect to="/login" />
```

---

## Navegación a través de código

```javascript
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

---

## Navegación a través de código

```javascript
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

---

## Params

```javascript
function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```

---

## Match de rutas a través de programación

```javascript
let match = useRouteMatch("/blog/:slug");
let match = useRouteMatch({
  path: "/Movies/:id/",
  strict: true, // Slash match
  sensitive: true // Case sensitive
});
```

--- 

## Acceso a la ruta actual

```javascript
function usePageViews() {
  let location = useLocation();

  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}
```
