
It is a loan calculator Single Page Application. Its a very simple application with two input fields asking for loan amount and loan duration.
The value entered in these fields is sent dynamically to the URL from which JSON data is fetched and is populated on UI.
We have two components here as Form and LoanCalculator.
Form.js handles the UI part as in the placement of the sidebar, form elements etc.
LoanCalculator.js handles all the background work as fetching the data from the API and passing this data as props to Form.
A sidebar is implemented with data fetching from localStorage of the most recent entered values. 
