# Cash

## Previous work :

1. Go to your workplace and clone your forked repository project.
```sh
> cd/path/to/workspace
> git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```

2. Change the directory. Go into the cash folder of the 3-musketeers folder. Then install npm in order to get all the necessary libraries for our code.

```sh
> cd /path/to/workspace/3-musketeers/cash/bin
npm i
```

## What does the code do?

3. Try to lunch the index.js code. And watch what happening.
```sh
> nodejs index.js
```

## How to use this currencies converter?

4. In order to understand how the code works, you should look at th help description.
```sh
> nodejs index.js --help
```
You should see this.
```sh
Usage
  $ cash <amount> <from> <to>
  $ cash <options>
Options
  --set -s 			Set default currencies
Examples
  $ cash 10 usd eur pln
  $ cash --set usd aud
```

5. You can set up your own default currencies converter with the command  " --set -s " following by the index of currency. For example, you want to convert euro (eur), dollar (usd) and hungarian Forint (huf).
```sh
> nodejs index.js --set -s eur usd huf
```
*A validation message should appears to tell you that you set up these currencies as your default currencies.*

When you will lunch the command " nodejs index.js", it will automatically convert, in this case, euro to dollar and to hungarian forint.


## How many Euro (eur) in a United States Dollard (usd) ?

6. You have to tell to the convert from what currency to what currency.
``` sh
> nodejs index.js --s {from currency} {to currency}
> nodejs index.js --s eur usd
> Saved default currencies to /path/.../config.json
> nodejs index.js

✔ 1.138 (USD) United States Dollar

Conversion of EUR 1

```
The result gives us : 1€ = 1.138$
You can ask for an other number to convert. For example, let's convert 19 Canadian dollar to Norwegian Krone.


```sh
> nodejs index.js -s cad nok
> nodejs index.js 19

✔ 122.915 (NOK) Norwegian Krone

Conversion of CAD 19
```

You will find the list of currencies into the lib folder.
