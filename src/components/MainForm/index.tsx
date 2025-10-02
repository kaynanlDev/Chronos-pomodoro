import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { CirclePlay } from 'lucide-react';

export function MainForm() {
  return (
    <>
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
        </div>
      </form>
    </>
  );
}
