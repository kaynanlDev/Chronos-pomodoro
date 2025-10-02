import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { CountDown } from '../../components/CountDown';

import { Footer } from '../../components/Footer';

type MainChildren = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainChildren) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
