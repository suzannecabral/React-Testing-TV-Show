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
//this failed because dropdown is not initially selected
//Episodes only renders after a season is selected

//3. There is a dropdown on the page
//4. The dropdown options contain "Season"
//5. There are 4 options