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
