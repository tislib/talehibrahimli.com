---
title: API DSL
draft: true
date: 2021-09-10T00:00:00
---
## Overview
The purpose of this concept is to build a framework which will be easy to build rest apis and easy for simple crud operations. 
And also we will support custom functionalities here.

The idea is to introduce Domain Specific Language for easily creating Crud based resources alongside with using some power of General Public Languages.

We have Kotlin Language for that reason, Kotlin is powerful choice both as a language to create DSL and also for extensibility and customization Kotlin can be used by framework users as GPL

## Features

## Motivational Examples

### Example 1: Simple Authors Crud
#### Objective
We are trying to create a simple authors crud, which will have properties (id string, firstName string, lastName string, bookCount int); We want to setup everything with simple configuration
#### What we are expecting as end result?
1. A rest endpoint /authors
2. a postgresql database setup and create needed table
3. Support crud operations on /authors endpoint

```
resources {
    resource("authors") {
      properties {
        property {
          name = "firstName",
          type = String
        }
        property {
          name = "lastName",
          type = String
        }
        property {
          name = "bookCount",
          type = Number
        }
      }  
    }
}
```

This kotlin dsl based config will help API-DSL framework to have a resource named authors. It will initiate postgresql database and will db preparation, etc.
It will also create endpoints and will delegate CRUD operations to database

#### How Apis will be?
##### Creating Author
```
POST /authors 
{
    "firstName": "Taleh",
    "lastName": "Ibrahimli",
    "bookCount": 0
}
```
##### Updating Author
```
PUT /authors/1
{
    "firstName": "Taleh",
    "lastName": "Ibrahimli",
    "bookCount": 0
}
```
##### Getting Author
```
GET /authors/1
{
    "firstName": "Taleh",
    "lastName": "Ibrahimli",
    "bookCount": 0
}
```
##### Deleting Author
```
DELETE /authors/1
```

### Example 2: Authors and Books Crud with relation
#### Objective
In this example we are trying to have relational data and using this relations in db level, in api level, and in logic level
#### What we are expecting as end result?
1. A rest endpoint /authors
2. A rest endpoint /books
3. a postgresql database setup and create needed table
4. Support crud operations on /authors endpoint
5. Support crud operations on /books endpoint
6. When book created, its author is set, and we have correct relation in database side
7. If we delete author, it will give an error if it have a book

```
resources {
    resource("authors") {
      properties {
        property("firstName") (type=String)
        property("lastName") (type=String)
        property("bookCount") (type=Number)
      }  
    }
}
```
This kotlin dsl based config will help API-DSL framework to have a resource named authors. It will initiate postgresql database and will db preparation, etc.
It will also create endpoints and will delegate CRUD operations to database

