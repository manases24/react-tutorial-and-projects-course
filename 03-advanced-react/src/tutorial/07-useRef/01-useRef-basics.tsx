import { FormEvent, useEffect, useRef, useState } from "react";

export const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  // useRef para referenciar un elemento del DOM (el input de texto)
  // Inicialmente, el valor de refContainer.current será null
  // El valor almacenado en un useRef no provoca un re-render del componente
  const refContainer = useRef<HTMLInputElement | null>(null);

  // useRef para mantener una referencia persistente entre renders
  // que no causa re-renders. Aquí se utiliza para saber si el componente
  // ya se ha montado antes.
  const isMounted = useRef(false);

  // Maneja el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log(refContainer.current); // Imprime el elemento DOM referenciado por `refContainer`

    // Aquí accedemos a `value` de un input
    if (refContainer.current) {
      const name = refContainer.current.value; // Obtiene el valor del input
      console.log(name); // Imprime el valor del input
    }
  };

  useEffect(() => {
    // Este efecto corre después del montaje y en cada render.
    // `refContainer.current` contiene el input de texto referenciado,
    // por lo que podemos llamarle `.focus()` para enfocarlo automáticamente.
    if (refContainer.current) {
      refContainer.current.focus();
    }
  });

  useEffect(() => {
    // Este efecto se ejecuta cada vez que `value` cambia.
    // `isMounted` se utiliza para diferenciar el primer render de los siguientes.
    if (!isMounted.current) {
      isMounted.current = true; // Cambia a `true` después del primer render.
      return; // No ejecuta nada más en el primer render.
    }
    console.log("re-render"); // Imprime en la consola en cada re-render posterior.
  }, [value]); // Dependencia: solo se ejecuta cuando `value` cambia.

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
     
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
      
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};
