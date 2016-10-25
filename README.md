# clientSide


Notes

1. if using surge delete dist/? 
1. use eslint react rules?

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

### important deploy notes!

don't forget to append

```
-g uglifyify
```

to the deployment script in package.json before production!

And figure out how to deploy images!


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
