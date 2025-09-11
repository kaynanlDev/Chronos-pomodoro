type DefaultInput = {
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props: DefaultInput) {
  return (
    <>
      <label htmlFor='input'>text</label>
      <input type={props.type} name='input' id={props.id} />
    </>
  );
}
