import { Header } from './components/Header/Header.tsx';
import { Main } from './pages/Main/Main.tsx';
import { useTheme } from './context/ThemeContext.tsx';

function App() {
  const { isDark } = useTheme();
  return (
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <Header />
        <Main />
      </div>
  );
}

export default App;
