## let e const
```js
//const e let são locais e só funcionam no escopo onde foi criada, somente no escopo local, e não no global

    let y = 1;

{
    let y = 0
    console.log(' > existe y? ', y)
}

    console.log(' > existe y depois do bloco? ', y)

```