import { useState, useEffect } from 'react';

// Usage
// function App() {
//   const happyPress = useKeyPress('h');
//   const sadPress = useKeyPress('s');
//   const robotPress = useKeyPress('r');
//   const foxPress = useKeyPress('f');

//   return (
//     <div>
//       <div>h, s, r, f</div>
//       <div>
//         {happyPress && '😊'}
//         {sadPress && '😢'}
//         {robotPress && '🤖'}
//         {foxPress && '🦊'}
//       </div>
//     </div>
//   );
// }

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};

export default useKeyPress;
