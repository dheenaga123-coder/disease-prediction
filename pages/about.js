javascript
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h4">About This App</Typography>
      <Typography>
        This app uses AI to predict potential diseases based on symptoms provided by users.
      </Typography>
    </Container>
  );
}
