import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './components/NavigationBar';
import NotFound from './pages/NotFound';
import { AuthProvider } from './helpers/contexts/AuthContext';
import { RequireAuth } from './helpers/RequireAuth';
import { RequireNoAuth } from './helpers/RequireNoAuth';
import SigninUser from './pages/SigninUser';
import SignupUser from './pages/SignupUser';
import LeaderBoard from './pages/LeaderBoard';
import AttemptQuiz from './pages/AttemptQuiz';
import CreateUpdateQuiz from './pages/CreateUpdateQuiz';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

function App() {  
  return (
    <div className='App'>
      <AuthProvider>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<RequireAuth><LeaderBoard/></RequireAuth>}/>
          <Route path='/leaderboard' element={<RequireAuth><LeaderBoard/></RequireAuth>}/>
          <Route path='/signin' element={<RequireNoAuth><SigninUser/></RequireNoAuth>}/>
          <Route path='/signup' element={<RequireNoAuth><SignupUser/></RequireNoAuth>}/>
          <Route path='/quiz' element={<RequireAuth role={"USER"}><AttemptQuiz/></RequireAuth>}/>
          <Route path='/quiz/*' element={<RequireAuth role={"ADMIN"}><CreateUpdateQuiz /></RequireAuth>}/>
          <Route path='/admin-dashboard' element={<RequireAuth role={"ADMIN"}><AdminDashboard /></RequireAuth>}/>
          <Route path='/user-dashboard' element={<RequireAuth role={"USER"}><UserDashboard /></RequireAuth>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
