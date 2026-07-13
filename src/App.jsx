import AppRouter from './router/AppRouter';

/**
 * App
 * Punto de entrada de la aplicación React. Delega todo el árbol de
 * navegación y renderizado de páginas al enrutador principal.
 */
function App() {
  return <AppRouter />;
}

export default App;
