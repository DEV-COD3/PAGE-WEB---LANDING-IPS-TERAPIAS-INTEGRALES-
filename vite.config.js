import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Hace que el servidor escuche en todas las interfaces
    port: 9000, // Opcional: puedes cambiar el puerto si lo necesitas
  },
  plugins: [react()],
  //animaciones
  extend: {
  keyframes: {
    'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    'fade-in-up': 'fade-in-up 0.8s ease-out',
  },
}

});