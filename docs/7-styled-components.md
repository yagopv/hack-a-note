autoscale: true
slidenumbers: true
theme: Next, 1

# Styled  Components

---

## Tagged Template Literals

```javascript
// Sin interpolaciones
fn`some string here`
fn(['some string here'])

// Con interpolaciones
const aVar = 'good'
fn`this is a ${aVar} day`
fn(['this is a ', ' day'], aVar)
```

---

## Estructura básica

```javascript
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

---

## Paso de props

```javascript
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  ...
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

---

## Extendiendo estilos

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

---

## Modificando el tag asociado

```javascript
<Button as="a" href="/">Link with Button styles</Button>
```

---

## Paso de props

```javascript

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

---

## Pseudoelementos y pseudoselectores

```javascript
const Thing = styled.button`
  color: blue;
  ::before {
    content: '🚀';
  }
  :hover {
    color: red;
  }
`
```

---

## Anidamiento

```javascript
const Thing = styled.div`
  color: blue;
  .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`

render(
  <Thing>
    <label htmlFor="foo-button" className="something">Mystery button</label>
    <button id="foo-button">What do I do?</button>
  </Thing>
)
```

---

## Paso de atributos

```javascript
const Input = styled.input.attrs(props => ({
  type: "password",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
```

---

## Theming

```javascript
const theme = {
  main: "mediumseagreen"
};

render(
  <div>
    <Button>Normal</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);

const Button = styled.button`
  ...
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  ...
`;

```

---

## Estilos globales

Función para crear un componente que genera estilos globales

```javascript
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

<React.Fragment>
  <GlobalStyle whiteColor >
  <App /> 
</React.Fragment>
```

---

## ThemeProvider

Proveedror de contexto que inyecta el `theme` en todos los componentes creados con styled components

```javascript
const Box = styled.div`
  color: ${props => props.theme.color};
`

render(
  <ThemeProvider theme={{ color: 'mediumseagreen' }}>
    <Box>I'm mediumseagreen!</Box>
  </ThemeProvider>
)
```

---

## Función css

Permite crear estilos reusables para facilitar la escritura de componentes más complejos

```javascript
import styled, { css } from 'styled-components'

const complexMixin = css`
  color: ${props => (props.whiteColor ? 'white' : 'black')};
`

const StyledComp = styled.div`
  ${props => (props.complex ? complexMixin : 'color: blue;')};
`
```