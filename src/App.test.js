import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

// what tests need to be run?
//1. make sure it works, app loads
test("renders App without crashing",()=>{
    render(<App />);
});


//3. There is a dropdown on the page
// imported from react-dropdown


//4. The dropdown options contain "Season"
//5. There are 4 options