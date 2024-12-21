import { useState }
  from 'react';
import { render }
  from 'react-dom';

function Counter() {
  const [value, setValue]
    = useState(0);

  return (<div>
    <button onClick={() =>
      setValue(value + 1)}>
      {value}
    </button>
  </div>);
}

render(<Counter />,
  document.
    querySelector('main'));