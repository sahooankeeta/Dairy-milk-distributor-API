# Dairy milk distributor API

A pseudo backend API which will manage ,add ,update orders.
Tech stack - NodeJS

## API Reference

#### Get all orders

```
  GET /
```

Returns all the orders placed

```
Response :
{
    "maxCapacity": 1000,
    "data": [
        {
            "id": "e4ed65c4-7608-4be6-869c-7546bb45519d",
            "name": "Ankeeta Sahoo",
            "email": "sahooankeeta@gmail.com",
            "address": "142,M G Road",
            "qty": 7,
            "date": "15-8-2022",
            "status": "placed"
        }
    ]
}
```

#### Create a new order

```
  POST /add
```

Places a new order
```
Body :
{
    "name":"Ankeeta Sahoo",
    "email":"sahooankeeta@gmail.com",
    "address":"142,M G Road",
    "qty":7
}
```

```
Response :
{
    "order": {
        "id": "e4ed65c4-7608-4be6-869c-7546bb45519d",
        "name": "Ankeeta Sahoo",
        "email": "sahooankeeta@gmail.com",
        "address": "142,M G Road",
        "qty": 7,
        "date": "15-8-2022",
        "status": "placed"
    },
    "message": "order placed"
}
```
#### Update order

```
  PATCH /update/:id
```
```
Body :
{
    "name":"Ankeeta Sahoo",
    "email":"sahooankeeta@gmail.com",
    "address":"142,M G Road",
    "qty":11
}
```

```
Response :
{
    "order": {
        "id": "e4ed65c4-7608-4be6-869c-7546bb45519d",
        "name": "Ankeeta Sahoo",
        "email": "sahooankeeta@gmail.com",
        "address": "14/A,M G Road",
        "qty": 11,
        "date": "15-8-2022",
        "status": "placed"
    },
    "message": "success in updating order"
}
```
#### Update order status

```
  PATCH /updateStatus/:id
```
Updates the order status {placed,packed,dispatched,delivered}
```
Response :
order status updated
```
#### Delete order

```
  DELETE /delete/:id
```
```
Response :
success in deleting your order
```
#### Check capacity
Checks capacity of milk left for the given date

```
  GET /checkCapacity/:date
```
```
Response :
{
    "quantity of milk left": 989
}
```

