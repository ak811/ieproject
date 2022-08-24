/**
 *  {
 *    VALUE: string
 *    OnChange: () => string
 *    max
 * }
 */

export default function Input(props) {
  const { value, onChange, placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      maxLength={props.max}
    />
  );
}
