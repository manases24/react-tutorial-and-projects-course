import { useToggle } from "./useToggle";

export const ToggleExample = () => {
  const { show, handleToggle } = useToggle();

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={handleToggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
