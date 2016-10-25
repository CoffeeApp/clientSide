# clientSide

The client side of CoffeeApp

## how

### install

```
git clone https://github.com/author/coffeeAppShopSide
cd
npm install
```

## develop

```
npm start
```

browse to <http://localhost:9966/>.

## test

```
npm test
```

## deploy

```
npm run deploy
```

currently deploys in a rather temperamental manner to Surge.

#### alternative deploy script for Github Pages

```
"deploy": "npm run build && npm run dist && npm run push"
```

### important deploy notes!

don't forget to append

```
-g uglifyify
```

to the build script in package.json before production!

(and figure out how to deploy images!)

## example client order JSON output for server processing

```
{
  "name": "Napoleon Bonaparte",
  "phone": "020 123 4567",
  "coffees": [
    {
      "coffee-id": 0,
      "quantity": 1,
      "milk": 2,
      "sugar": 0,
    },
    {
      "coffee-id": 3,
      "quantity": 3,
      "milk": 0,
      "sugar": 2,
    }
    {
      "coffee-id": 3,
      "quantity": 1,
      "milk": 0,
      "sugar": 0,
    }
  ]
}
```

## example shop info

```

address
:
"40 Abel Smith St, Te Aro, Wellington 6011"
description
:
"Raglan Roast coffee is roasted daily at our "Hole in the Wall" coffee shop located in Volcom Lane and at the Te Uku Roast Office, Raglan New Zealand."
distance
:
99
image
:
"http://main-cdn.grabone.co.nz/goimage/440x267/ixplxb4.jpg"
lat
:
"-41.2964276"
lng
:
"174.7728275"
order_id
:
25
rating
:
3.5
shop_id
:
2
shop_name
:
"Raglan Roast"
shop_phone
:
"04 801 6558"
status
:
""
total
:
4
website
:
"https://www.raglanroast.co.nz/"
```
