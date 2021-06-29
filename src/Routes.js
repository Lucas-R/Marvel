import React from 'react';
import App from './App';
import Characters from './Pages/Characters';
import Comics from './Pages/Comics';
import Series from './Pages/Series';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function MainRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/Characters/:page/" element={<Characters />} />
                        <Route path="/Comics/:page/" element={<Comics />} />
                        <Route path="/Series/:page/" element={<Series />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}