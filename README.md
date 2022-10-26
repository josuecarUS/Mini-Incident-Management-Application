# Mini-Incident-Management-Application 

## Getting started 

### Run the server 

- install dependencies 

``` 

npm install 

``` 

- lunch the server  

``` 

npm start 

``` 
### Proect Structure
```sh
|-src
|   |- controllers //charge of managing the states, and data to be used as services.
|   |- csv //charge of reading and writing data into a csv.
|   |- helpers //charge of create a blueprint of the data to be managed.
|   |- middlewares //responsible for validating incoming data.
|   |- routes //all routes used in this service
|- .gitignore
|- index.js
|- package-lock.json
```
### Routes Summary
- Post /api/v1/incidents
    * Body
    ```
    {
  "id": 4,
  "name": "Lost laptop",
  "discovered": "2018-2-19",
  "description": "Doctor lost his laptop while on vacation.",
  "department": "HR"
    }
    ```
    * Response
    ```
    {
  "id": 4,
  "name": "Lost laptop",
  "discovered": "2018-2-19",
  "description": "Doctor lost his laptop while on vacation.",
  "department": "HR"
    }
    ```
- Get /api/v1/incidents/4
    * Response
    ```
    {
  "id": 4,
  "name": "Lost laptop",
  "discovered": "2018-2-19",
  "description": "Doctor lost his laptop while on vacation.",
  "department": "HR"
    }
    ```
- Get /api/v1/incidents
    * Response
    ```
    [
        {
            "id":"2",
            "name":"Lost laptop",
            "discovered":"2018-2-19",
            "description":"Doctor lost his laptop while on vacation.",
            "department":"HR"
        }
    ]
    ```
- Put /api/v1/incidents/4
    * Body
    ```
    {
  "id": 2,
  "name": "Lost laptop",
  "discovered": "2018-2-19",
  "description": "Doctor lost his laptop while on vacation.",
  "department": "HR"
    }
    ```
    * Response
    ```
    [
        {
            "id":"2",
            "name":"Lost laptop",
            "discovered":"2018-2-19",
            "description":"Doctor lost his laptop while on vacation.",
            "department":"HR"
        }
    ]
    ```
- Delete /api/v1/incidents/2
    * Response
    ```
    []
    ```
