import React from 'react';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { fetchShow } from './api/fetchShow';
import mockResponse from './api/response.json'



jest.mock('./api/fetchShow');

// what tests need to be run?
//1. make sure it works, app loads
// test("renders App without crashing",()=>{
//     // fetchShow.mockResolvedValueOnce({});
//     render(<App />);
// });


test("renders App without crashing and shows loading with bad API call",async()=>{
    fetchShow.mockResolvedValueOnce({});
    render(<App />);
    await waitFor(()=>{
        const loading=screen.getByText(/Fetching data/i);
        expect(loading).toBeInTheDocument();
    });
});
//single query is faster


//without mock, this should be false since show hasn't loaded?
test("Sanity check, find show title",async()=>{

    fetchShow.mockResolvedValueOnce(mockResponse);
    render(<App />);
        //app is rendering once call is done
        //await waits for app to render

//getByText throws an error when it fails
//queryByText returns null


    await waitFor(()=>{
        const showTitle=screen.getAllByText(/Stranger Things/i);
        expect(showTitle[0]).toBeInTheDocument();
    });
    //screen.getAllByText returned an array of items

});

//test the dropdown-----------------

//A: there is a dropdown on the page
//C: There are 4 dropdown options


//Q&A notes------------------------------
//prettier: alt shift F, configure, select prettier

//second parameter of mock is a cb func
// jest.mock("uuid", () => () => "abcde");
// first arrow is because mock expects a function
//second arrow is to make uuid a function that sets to abcde

//   function defineUUID() {
//       return function() {
//           return "abcde"
//       };
//   }
//   jest.mock("uuid", defineUUID())

//arg1: label you're making yourself
//placeholder in the same format you expect it to be

//  test("name",async()=>{
//
//  })

// same:
// async function actionName() {
//     await doSomethingAsync()
// }


//mockup json results from api call
//copy paste into json
//no curly brackets to import json


//useful stuff is usually at top or bottom of test results
//red stuff is chain of events .catch

//test: when api call is bad, make sure "Fetching data" h2 is showing up


//BTW, userEvent.click will work to click the dropdown, where fireEvent.click doesn't
//dropdown isn't actually a button
//no click event on the actual div