# My API Documentation

## `[GET] '/kitties'`
Get a list of all the kitties!

------

## `[POST] '/kitties'`
Add a new kitty to the list!

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of your kitty |
| color | string | the color of your kitty |
| age | number | the age of your kitty |
| fact | string | a fact about your kitty |

### Example Input

```
{ 
    "name": "Kara",
    "color": "Grey and White",
    "age": 7,
    "fact": "Kara is the cutest little kitty."
}
```

------

## `[PUT] '/kitties/:name'`
Update information about a kitty =^-.-^=

### Parameters
The parameters to update a kitty are the same as the parameters to add a new kitty.

------

## `[DELETE] '/kitties/:name'`
Delete a kitty ~=^x.x^=~
(...you monster!)