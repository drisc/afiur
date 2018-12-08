# Afiur

## A Personal Epoch

[Wiki](https://drisc.io/systems/calendar)

Various ways of calculating the current date for an Afiur calendar.

## Current implementations

### Bash
Usage

`afiur <display option> <yyyy-mm-dd to count from>`

Options
+ `-sd` | Standard Days, displays date of Afiur calendar
+ `-td` | True Days, number of days since origin
+ `-dd` | Decimal Days, number of days expressed as a decimal

### JavaScript
Usage

`afiur()`

Add a link to the JS file in the `<head>` tag, edit the 'origin' variable to suit your needs or call `afiur(origin = Date.UTC(<date>))` on the page, the function will output the date as `YY-MM-DD`.
