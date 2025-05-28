import React from 'react';
import { FaHeart } from "react-icons/fa";

const ReactHooksCheatsheet = () => {
    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">React Hooks Cheatsheet</h1>

                {/* Table of Contents */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Table of Contents</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><a href="#useState" className="text-blue-600 hover:underline">useState</a></li>
                        <li><a href="#useEffect" className="text-blue-600 hover:underline">useEffect</a></li>
                        <li><a href="#useContext" className="text-blue-600 hover:underline">useContext</a></li>
                        <li><a href="#useReducer" className="text-blue-600 hover:underline">useReducer</a></li>
                        <li><a href="#useCallback" className="text-blue-600 hover:underline">useCallback</a></li>
                        <li><a href="#useMemo" className="text-blue-600 hover:underline">useMemo</a></li>
                        <li><a href="#useRef" className="text-blue-600 hover:underline">useRef</a></li>
                        <li><a href="#useImperativeHandle" className="text-blue-600 hover:underline">useImperativeHandle</a></li>
                        <li><a href="#useLayoutEffect" className="text-blue-600 hover:underline">useLayoutEffect</a></li>
                        <li><a href="#useDebugValue" className="text-blue-600 hover:underline">useDebugValue</a></li>
                    </ol>
                </div>

                {/* 1. useState */}
                <div id="useState" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">1. useState</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Manage state in functional components</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>const [state, setState] = useState(initialState);</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code></pre>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm mb-2">
                        Initial Render → useState(0) → [0, setCount]<br />
                        State Update → setCount(1) → Re-render → [1, setCount]
                    </div>
                </div>

                {/* 2. useEffect */}
                <div id="useEffect" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">2. useEffect</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Perform side effects in functional components</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [dependencies]);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code>{`import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    return () => {
      // Cleanup (runs before next effect or unmount)
    };
  }, [count]); // Only re-run if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code></pre>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm">
                        Mount → Run Effect<br />
                        Update → Cleanup Previous Effect → Run New Effect<br />
                        Unmount → Cleanup Effect
                    </div>
                </div>

                {/* 3. useContext */}
                <div id="useContext" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">3. useContext</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Access context in functional components</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>const value = useContext(MyContext);</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code>{`import { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>
      I am styled by theme!
    </button>
  );
}`}</code></pre>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm">
                        Context Provider (value) → useContext → Consumer Component
                    </div>
                </div>

                {/* 4. useReducer */}
                <div id="useReducer" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">4. useReducer</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Manage complex state logic</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>const [state, dispatch] = useReducer(reducer, initialState);</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code>{`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`}</code></pre>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm">
                        Action → Dispatch → Reducer → New State → Component Update
                    </div>
                </div>

                {/* 5. useCallback */}
                <div id="useCallback" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">5. useCallback</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Memoize functions to prevent unnecessary re-renders</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`const memoizedCallback = useCallback(() => {
  // function
}, [dependencies]);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>{`import { useCallback } from 'react';

function Parent({ list }) {
  const handleClick = useCallback((item) => {
    console.log('Item clicked:', item);
  }, []); // Same function unless dependencies change

  return <Child items={list} onClick={handleClick} />;
}`}</code></pre>
                </div>

                {/* 6. useMemo */}
                <div id="useMemo" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">6. useMemo</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Memoize expensive calculations</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>{`import { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    return a * b; // Expensive calculation
  }, [a, b]); // Only recompute if a or b change

  return <div>{result}</div>;
}`}</code></pre>
                </div>

                {/* 7. useRef */}
                <div id="useRef" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">7. useRef</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Access DOM elements or persist mutable values</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>const refContainer = useRef(initialValue);</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>{`import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}`}</code></pre>
                </div>

                {/* 8. useImperativeHandle */}
                <div id="useImperativeHandle" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">8. useImperativeHandle</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Customize the instance value exposed to parent components</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`useImperativeHandle(ref, () => ({
  // exposed methods
}), [deps]);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>{`import { forwardRef, useRef, useImperativeHandle } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    shake: () => {
      // Custom method
    }
  }));

  return <input ref={inputRef} />;
});

// Parent can now call inputRef.current.focus() and inputRef.current.shake()`}</code></pre>
                </div>

                {/* 9. useLayoutEffect */}
                <div id="useLayoutEffect" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">9. useLayoutEffect</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Similar to useEffect but fires synchronously after DOM mutations</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`useLayoutEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [dependencies]);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code>{`import { useLayoutEffect, useRef } from 'react';

function Tooltip() {
  const ref = useRef();
  
  useLayoutEffect(() => {
    // Measure DOM element before browser paint
    const { height } = ref.current.getBoundingClientRect();
    // Adjust position based on measurement
  }, []);

  return <div ref={ref}>Tooltip</div>;
}`}</code></pre>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm">
                        DOM Changes → useLayoutEffect → Browser Paint → useEffect
                    </div>
                </div>

                {/* 10. useDebugValue */}
                <div id="useDebugValue" className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">10. useDebugValue</h2>
                    <p className="font-semibold text-gray-700 mb-2">Purpose: Display a label for custom hooks in React DevTools</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4 border-l-4 border-blue-400"><code>{`useDebugValue(value);
// or with formatter
useDebugValue(value, format);`}</code></pre>
                    <p className="mb-2">Example:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>{`import { useDebugValue, useState } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  
  // Show label in DevTools next to this Hook
  useDebugValue(isOnline ? 'Online' : 'Offline');
  
  return isOnline;
}`}</code></pre>
                </div>

                {/* Hook Flow Diagram */}
                <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-300 pb-2">Hook Flow Diagram</h2>
                    <div className="bg-blue-50 p-4 rounded-md font-mono text-sm">
                        <span className="font-bold">Mount:</span><br />
                        useState → useReducer → useEffect → useLayoutEffect → useMemo → useCallback<br /><br />
                        <span className="font-bold">Update:</span><br />
                        useState → useReducer → useMemo → useCallback → useLayoutEffect → useEffect
                    </div>
                </div>

                {/* Rules of Hooks */}
                <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-yellow-300 pb-2">Rules of Hooks</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Only call Hooks at the top level (not in loops, conditions, or nested functions)</li>
                        <li>Only call Hooks from React functions (components or custom Hooks)</li>
                        <li>Follow the hook naming convention (prefix with &quot;use&quot;)</li>
                    </ol>
                </div>

                <div className="flex items-center justify-center gap-x-2 text-center mt-12 text-gray-500 text-sm">
                    <p>React Hooks Cheatsheet | Made By</p>
                    <p className='flex items-center gap-x-2'> <FaHeart className='text-red-500'/> <span className='font-medium'>Tejas Dhamale</span> <FaHeart className='text-red-500'/> </p>
                </div>
            </div>
        </div>
    );
};

export default ReactHooksCheatsheet;