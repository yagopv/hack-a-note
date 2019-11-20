autoscale: true
slidenumbers: true
theme: Courier, 7

# Context

---

## Qué nos proporciona el API de contexto?

Nos permite compartir datos de forma global sin tener que pasarlos de padres a hijos

--- 

## Creación del Contexto

```javascript
const MyContext = React.createContext(defaultValue);
```

---

## Uso del Contexto a través del Provider

```javascript
<AuthContext.Provider value={/* Algún valor */}>
```

---

## Consumo del contexto

```javascript
<MyContext.Consumer>
  {value => /* renderiza algo basado en el valor de contexto */}
</MyContext.Consumer>

...

// O a través de hooks
const myContext = useContext(MyContext);
```

---










