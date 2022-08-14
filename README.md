# Dairy milk distributor API

A pseudo backend API which will manage ,add ,update orders.
Tech stack - NodeJS

## API Reference

#### Get all items

```
  GET /
```

Returns all the orders placed

```
{
    "maxCapacity": 1000,
    "data": [
        {
            "qty": 11,
            "id": "7317426c-8818-4d27-aed3-d82df6a4da20",
            "date": "15-8-2022",
            "status": "delivered"
        },
        {
            "qty": 1,
            "id": "1a335174-7aa6-4fcb-828c-5cc57bfac7fd",
            "date": "14-8-2022",
            "status": "placed"
        }
    ]
}
```

#### Get all items

```
  POST /add
```

Places a new order

```
{
    "order": {
        "qty": 1,
        "id": "26f9408b-3371-4b67-91d3-81601685648a",
        "date": "14-8-2022",
        "status": "placed"
    },
    "message": "order placed"
}
```
