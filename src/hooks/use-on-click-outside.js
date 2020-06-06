import { useEffect } from 'react';

// Usage
// function App() {
//   // Create a ref that we add to the element for which we want to detect outside clicks
//   const ref = useRef();
//   // State for our modal
//   const [isModalOpen, setModalOpen] = useState(false);
//   // Call hook passing in the ref and a function to call on outside click
//   useOnClickOutside(ref, () => setModalOpen(false));

//   return (
//     <div>
//       {isModalOpen ? (
//         <div ref={ref}>
//           👋 Hey, I'm a modal. Click anywhere outside of me to close.
//         </div>
//       ) : (
//         <button onClick={() => setModalOpen(true)}>Open Modal</button>
//       )}
//     </div>
//   );
// }

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },

    // NOTE: you may need to wrap the hanlder in a useCallback before sending it to this hook, apply if needed
    [ref, handler]
  );
}

export default useOnClickOutside;
