import { PacmanLoader } from 'react-spinners';
import { colors } from '../../styles/styles';
import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  );
}
