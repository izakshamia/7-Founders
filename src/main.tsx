import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const apiUrl = import.meta.env.VITE_API_URL; // Accessing a VITE_ prefixed variable

createRoot(document.getElementById("root")!).render(<App />);
