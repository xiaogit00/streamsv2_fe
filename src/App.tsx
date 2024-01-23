import Main from './layouts/Main'
import './App.css'
import { steps } from './utils/steps'
import { ShepherdTour } from 'react-shepherd'
import './styles/shepherd.css';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: false
    }
  },
  useModalOverlay: true
};

function App(): React.JSX.Element {

  return (
    <ShepherdTour steps={steps} tourOptions={tourOptions}>
      <Main />
    </ShepherdTour>
  )
}
export default App
