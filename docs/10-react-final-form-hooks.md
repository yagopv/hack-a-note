autoscale: true
slidenumbers: true
theme: Courier, 7

# react-final-form-hooks

---

## useForm

Hook encargado de la configuración del formulario

```javascript
  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit, // Submit form
    validate // Validación a nivel de registro
  })
```

---

## useField

Hook encargado de la configuración de los campos de un formulario

```javascript
  const firstName = useField('firstName', form, validate)
```

`firstName` contendrá las propiedades input y meta
  - `input` => Contiene las `props` para asociar al componente <input /> (name, onBlur, onChange, onFocus, ...)
  - `meta` => Contiene lo necesario para gestionar la UI/UX del formulario (dirty, pristine, error, ...)

---

## Uso de los hooks con un form

```javascript
<form onSubmit={handleSubmit}>
  <div>
    <input {...firstName.input} placeholder="First Name" />
    {firstName.meta.touched && firstName.meta.error && (
      <span>{firstName.meta.error}</span>
    )}
  </div>
  <div>
    <input {...lastName.input} placeholder="Last Name" />
    {lastName.meta.touched && lastName.meta.error && (
      <span>{lastName.meta.error}</span>
    )}
  </div>
  <button type="submit" disabled={pristine || submitting}>Submit</button>
</form>
```

---

## Validation

```javascript
// Form
const { form, handleSubmit, submitting } = useForm({ onSubmit, validate: validateForm });
export function validateForm({ email }) {
  const errors = {};
  
  if (!email) {
    errors.email = 'The email is required';
  }

  return errors;
}

// Field
const email = useField('email', form, value => {
  if (value && value.startsWith('a')) {
    return 'a in first char not allowed';
  }
});
```





