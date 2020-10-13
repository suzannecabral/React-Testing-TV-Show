import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

// what tests need to be run?
//1. make sure it works, app loads
test("renders App without crashing",()=>{
    render(<App />);
});


//test the dropdown-----------------

//A: there is a dropdown on the page

//B: The dropdown options contain "Seasons"

//C: There are 4 dropdown options