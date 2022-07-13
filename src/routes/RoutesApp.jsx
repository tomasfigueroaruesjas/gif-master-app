import { Routes, Route } from 'react-router-dom';
import { ErrorScreen, HomeScreen, LoginScreen, SignUp, CategoryScreen, SearchScreen } from '../pages';


const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen /> } />
            <Route path='/login' element={<LoginScreen /> } />
            <Route path='/signup' element={<SignUp /> } />
            <Route path='/category/:id' element={<CategoryScreen /> } />
            <Route path='/search/:termino' element={<SearchScreen /> } />
            <Route path='*' element={<ErrorScreen /> } />
        </Routes>
    )
}

export default RoutesApp;