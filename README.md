Steps to follow inorder to run the project:-

1. Clone this repo.
2. Run npm i
3. Run nodemon index.js

List of API & its functionality:-

Note:- Use of Postman will be required to test the API's.

1. Creating a table (Similar to creating pantry):

API:- http://localhost:5000/table/create/:tableName  (POST)
In path variable,
tableName(key):<Table Name>(value)
  
2. Get table details (Similar to getting pantry details):

API:- http://localhost:5000/table/getTable/:tableId (GET)
In path variable,
tableId(key):<Table Id>(value)

3. Creating the box inside a table (Similar to creating a basket inside the pantry):

API:- http://localhost:5000/table/:tableId/box/:boxName (POST)
In path variable,
tableId(key):<Table Id>(value)
boxName(key):<Box Name>(value)

In here, you can pass the key:value you if want to add more to the box in the Query Params at Postman.

4. Get the details of the box (Similar to getting a basket details inside the pantry):

API:- http://localhost:5000/table/:tableId/box/:boxName (GET)
In path variable,
tableId(key):<Table Id>(value)
boxName(key):<Box Name>(value)
 
5. Deletes a particular box from the table (Similar to deleting a basket):

API:- http://localhost:5000/table/:tableId/box/:boxName (DELETE)
In path variable,
tableId(key):<Table Id>(value)
boxName(key):<Box Name>(value)
  
5. Updates the content of the box (Similar to updating the content of a basket):

API:- http://localhost:5000/table/:tableId/box/:boxName (PUT)
In path variable,
tableId(key):<Table Id>(value)
boxName(key):<Box Name>(value)
  
In here, you can pass the key:value you want to update in the Query Params at Postman.
