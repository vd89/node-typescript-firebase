# node-typescript-firebase
---
Node Express Firebase assessment

The goal is to create a simple interface that has logic to check if a user input date falls within a range of dates.  Write the assignment in node.js / TypeScript.
Make a Firebase form - user inputs a date called Order Date and submits
Make a Firebase service - to check if the date is in the range; it should return a user-friendly message to the form so the user knows if their date is good or not.
The rule for the date range is - it must be a minimum of one business day in the future and a maximum of 90 calendar days in the future.  Business days must take into account weekends (so exclude Saturdays and Sundays) and federal holidays for Ontario, Canada
<https://www.officeholidays.com/countries/canada/ontario/2021>
