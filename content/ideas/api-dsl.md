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
```
resources {
    resource {
      name = "authors"

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

### Example 2: Authors and Books Crud with relation
```
resources {
    resource {
      name = "authors"

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

    resource {
      name = "books"

      properties {
        property {
          name = "name",
          type = String
        }
        property {
          name = "isbn",
          type = String
        }
      }
      
      relations {
        relation {
            property = "author"
            referencedResource = "authors"
        }
      } 
    }
}
```

## How It works

## Open questions
1. Should I remove properties and relations wrappers?
