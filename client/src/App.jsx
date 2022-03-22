import './css/common.css';

import { Box } from '@material-ui/core';
import CardAnimate from './components/card_animation/card_animation';
import CardInputDetailsSection from './components/card_input_details/card_input_details';

export default function App() {
  return (
    <Box>
      <CardAnimate />
      <CardInputDetailsSection />
    </Box>
  );
}
