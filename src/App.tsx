import './style/theme.css';
import './style/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
