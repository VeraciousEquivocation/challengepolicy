import React from 'react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import {render as rtlRender,waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import Card from '../Components/Cards/Card'

/*
  Since the functionality is only in the Card,
  I decided to create a simple user test for it

  First the card is rendered with sample data.
  - A more thorough test might check if all data shows up

  Before the simulated user click, check that the title, and circle element are there
  click the title
  check that the background of the circle changes appropriately
  This simulates what a user would do, and see
  
*/

function renderCard() {
  let policy = {
    coverage_end_date: "2019-11-19",
    coverage_start_date: "2019-11-17",
    description: "Baggage Cover; Medical Cover; Cancellation Cover",
    id: "TRAVEL-COVER-INS",
    partner: {id: "labore", name: "Labore Inc.", logo: "LOGO_URL"},
    payment_date: "2019-10-10T13:29:38.814849Z",
    premium: 106.65,
    premium_formatted: "AUD $106.65",
    renewal: null,
    status: "active",
    title: "London to Paris"
  }
  const utils = rtlRender(<Card policy={policy} />)

  return {
    ...utils,
  }

}

test('Click Card Element', async () => {
  const {getByText, getByTestId} = renderCard();
 
  const cardTitle = getByText(/London to Paris/i)
  const circleElement = getByTestId(`circle_TRAVEL-COVER-INS`)

  expect(cardTitle).toBeInTheDocument()
  expect(circleElement).toBeInTheDocument()
  expect(circleElement).toHaveStyle(`background-color: none`);

  await waitFor(() => user.click(cardTitle))
  
  expect(circleElement).toHaveStyle(`background-color: rgb(255 221 63)`);

});
