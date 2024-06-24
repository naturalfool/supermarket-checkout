# supermarket-checkout

Supermarket Checkout System
Overview
This project is a Supermarket Checkout System implemented in React. It handles pricing schemes, including special offers, and provides an interface for inputting custom prices and discounts. You can scan items, view running totals, and see the final total of their basket.

The task description mentioned having inputs handled at the command line, however I felt it would make more sense to input things on the page itself. I also thought having a table version of the checkout system would be a good idea, so I implemented both systems.

Installation:
1. Clone the repository:

    git clone https://github.com/naturalfool/supermarket-checkout.git
        cd supermarket-checkout

2. Install the dependencies:

    npm install

3. Start the server:

    npm start


Usage:
Home Page
The home page displays a pricing rules form, as well as two buttons:

Text Input Mode: Navigate to a page where you can enter SKUs to add items. Enter A, B, C, or D into the input and click 'scan'.
Table Mode: Navigate to a page with a table to add/remove items and view running totals. Click ;add to basket' on an item to see the price of each individual item, as well as a final overall cost displayed at the bottom of the table. You can also click the plus and minus buttons to increase or decrease the amount of each item in the basket.

Both modes will calculate prices and costs based on how the pricing rules form is filled out. 

