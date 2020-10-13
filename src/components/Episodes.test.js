import React from 'react';
import Episodes from './Episodes';
import App from '../App';
import { render } from '@testing-library/react';

// what tests need to be run?
//1. make sure it works, app loads
test("renders App without crashing",()=>{
    render(<App />);
});

//2. make sure component Episodes loads
test("renders Episodes component without crashing",()=>{
    render(<Episodes />);
});
//this failed because:
//while loading ("show" state) app only returns a loading h2
//rest of app jsx returns when render is complete and state is set

