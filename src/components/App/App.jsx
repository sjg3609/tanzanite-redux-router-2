import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StepOne from '../Steps/StepOne.jsx';
import StepTwo from '../Steps/StepTwo.jsx';
import StepThree from '../Steps/StepThree.jsx';
import StepFour from '../Steps/StepFour.jsx';
import Review from '../Steps/Review.jsx';
import ActivityList from '../ActivityList/ActivityList.jsx';
import Container from '@mui/material/Container';
import Header from '../Header/Header.jsx';


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Container fixed>
          <Route exact path="/">
            {/* Step one component goes here */}
            <StepOne />
          </Route>
          <Route exact path="/step-2">
            {/* Step two component goes here */}
            <StepTwo />
          </Route>
          <Route exact path="/step-3">
            {/* Step three component goes here */}
            <StepThree />
          </Route>
          <Route exact path="/step-4">
            <StepFour />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/activity-list">
            <ActivityList />
          </Route>
        </Container>
      </Router>
    </div>
  );

}

export default App
