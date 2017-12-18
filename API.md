# My API Documentation

## `[GET] '/kitties'`
Get a list of all the kitties!

## `[POST] '/kitties'`
Add a new kitty to the list!

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of your kitty |
| breed | string | the beed of your kitty |
| fur | string | the color or coat pattern of your kitty |
| age | number | the age of your kitty |
| fact | string | a fact about your kitty |

## `[PUT] '/kitties/:name'`
Update information about a kitty =^-.-^=

### Parameters
The parameters to update a kitty are the same as the parameters to add a new kitty.

## `[DELETE] '/kitties/:name'`
Delete a kitty ~^x.x^~
(...you monster!)




https://developer.github.com/v3/git/commits/
For this project you will be building a simple restful API for a database with collections of your choosing.

## Requirements
 
You must have at least one test written for each route.  Write your tests BEFORE you write the actual routes.  
Your models should have some methods/statics that are tested.  
You will need to have tests for your routes and for your models.  
