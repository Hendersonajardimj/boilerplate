import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="text-center py-10">
    <h1 className="text-2xl font-bold text-blue-600">Hello from React</h1>
    <p className="mt-4 text-gray-700">Tailwind is configured!</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
