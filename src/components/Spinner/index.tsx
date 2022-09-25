import { SpinnerDotted } from 'spinners-react'
import DSTheme from '../../styles/theme';
import { iSpinner } from './interface';

const Spinner: React.FC<iSpinner> = ({ size }) => {
  return (
    <SpinnerDotted
      size={size}
      color={DSTheme.colors.LIGHTEST}
    />
  )
}

export default Spinner;