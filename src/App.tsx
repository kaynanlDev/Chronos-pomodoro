import './style/theme.css';
import './style/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlay } from 'lucide-react';
export function App() {
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

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              type='text'
              id='primeiroInput'
              labelString='task'
              placeString='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<CirclePlay />} />
            <DefaultButton icon={<CirclePlay />} color='red' />
          </div>
        </form>
      </Container>
    </>
  );
}
