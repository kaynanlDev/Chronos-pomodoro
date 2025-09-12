type DefaultInput = {
  id: string;
  labelString: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props: DefaultInput) {
  return (
    <>
      <label htmlFor={props.id}>{props.labelString}</label>
      <input type={props.type} name='input' id={props.id} />
    </>
  );
}
