import React from 'react';
import Home from './pages/Home';
import PesquisaModalContext from './components/Context/context';

function App() {
    return (
        <div className='App'>
            <PesquisaModalContext>
                <Home />
            </PesquisaModalContext>
        </div>
    );
}

export default App;
