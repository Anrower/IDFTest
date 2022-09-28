import TextField from '@mui/material/TextField';

interface IProps {
  label: string
}

export default function TextInput(props: IProps) {
  const { label } = props;

  return (
    <TextField
      sx={{ width: '100%' }}
      label={label}
      variant="outlined" />
  );
}