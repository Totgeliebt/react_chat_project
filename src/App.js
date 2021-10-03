import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import EntranceForm from './pages/EntranceForm/EntranceForm';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ChatList from "./pages/ChatList/ChatList";
import Settings from "./pages/Settings/Settings";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
      <Router>
            <Switch>
                <Route path="/registration">
                    <RegistrationForm/>
                </Route>
                <Route path="/messages">
                    <ChatPage/>
                </Route>
                <Route path="/chat">
                    <ChatList/>
                </Route>
                <Route path="/settings">
                    <Settings/>
                </Route>
                <Route path="/enter">
                    <EntranceForm/>
                </Route>
                <Route path="/password">
                    <ResetPassword/>
                </Route>
            </Switch>
      </Router>
  );
}

export default App;
