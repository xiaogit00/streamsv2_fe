import Main from './layouts/Main'
import './App.css'
import { steps } from './utils/steps'
import { ShepherdTour } from 'react-shepherd'
import 'shepherd.js/dist/css/shepherd.css';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: false
};

function App(): React.JSX.Element {

  return (
    <ShepherdTour steps={steps} tourOptions={tourOptions}>
      <Main />
    </ShepherdTour>
  )
}
export default App
