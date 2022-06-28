import { Routes, Route } from 'react-router-dom';
import { ErrorScreen, HomeScreen, LoginScreen, SignUp } from '../pages';


const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen /> } />
            <Route path='/login' element={<LoginScreen /> } />
            <Route path='/signup' element={<SignUp /> } />
            <Route path='*' element={<ErrorScreen /> } />
        </Routes>
    )
}

export default RoutesApp;