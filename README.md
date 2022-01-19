## Run Locally

Clone the project

```bash
  git clone https://github.com/eswarupkumar/Clone_Pantry
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```

## List of API & its functionality:-

#### Note:- Use of Postman will be required to test the API's.
  
#### 1. Creating a table (Similar to creating pantry)

```https
  POST http://localhost:5000/table/create/:tableName
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tableName` | `string` | **Required**. Name of the table |

#### 2. Get table details (Similar to getting pantry details)

```https
  GET http://localhost:5000/table/getTable/:tableId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tableId`      | `number` | **Required**. Id of the table |

#### 3. Creating the box inside a table (Similar to creating a basket inside the pantry)

```https
  POST http://localhost:5000/table/:tableId/box/:boxName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tableId`      | `number` | **Required**. Id of the table |
| `boxName`      | `string` | **Required**. Name of the box |

##### In here, you can pass the key:value you if want to add more to the box in the Query Params at Postman.

#### 4. Get the details of the box (Similar to getting a basket details inside the pantry)

```https
  GET http://localhost:5000/table/:tableId/box/:boxName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tableId`      | `number` | **Required**. Id of the table |
| `boxName`      | `string` | **Required**. Name of the box |

#### 5. Deletes a particular box from the table (Similar to deleting a basket)

```https
  DELETE http://localhost:5000/table/:tableId/box/:boxName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tableId`      | `number` | **Required**. Id of the table |
| `boxName`      | `string` | **Required**. Name of the box |

#### 6. Updates the content of the box (Similar to updating the content of a basket)

```https
  PUT http://localhost:5000/table/:tableId/box/:boxName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tableId`      | `number` | **Required**. Id of the table |
| `boxName`      | `string` | **Required**. Name of the box |

##### In here, you can pass the key:value you want to update in the Query Params at Postman.
