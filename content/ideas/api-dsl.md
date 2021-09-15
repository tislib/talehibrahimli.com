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
You define declarative resource design and app is compiling the file and starts webserver

## Definition
### Resources
Resources are root level definition. It is a wrapper definition for resource.
```
resources {
  resource {
    ...resource definition...
  }
  resource {
    ...another resource definition...
  }
}
```
resources only accepts resource sub definition

### Resource
Each resource describes definition of Rest api resource. It is domain level of our application and API consumers will see payload in this structure

*Example of resource*
```
this property is under resources property
resource {
    name = "books"

    property {
      name = "name",
      type = String
    }
    property {
      name = "isbn",
      type = String
    }
}
```
Each resource has a name field, and it must be unique

### Property
this property is under resource property
```
property {
  name = "name",
  type = String
}
```

### Persistence
Persistence is root level property for our decleration
```
persistence {
    datasource {
        driver = "jdbc-driver"
        url = "jdb-curl"
        username = "username"
        passsword = "password"
        database = "database"
        schema = "schema" 
    }
}

resources {
  resource {
    ...resource definition...
  }
}
```
When we supply persistence, resources will be stored in that persistence layer. 

Persistence configuration also supports multiple persistence layers which can be bound to resources 
```
persistence {
    name = "ds-1"
        
    datasource {
        driver = "jdbc-driver"
        url = "jdb-curl"
        username = "username"
        passsword = "password"
        database = "database"
        schema = "schema" 
    }
}

persistence {
    name = "ds-2"
        
    datasource {
        driver = "jdbc-driver"
        url = "jdb-curl"
        username = "username"
        passsword = "password"
        database = "database"
        schema = "schema" 
    }
}

resources {
  resource {
    persistence = "ds-1"
    ...
  }
  
  resource {
    persistence = "ds-2"
  }
}
```

## Api Presentation Layer
Currently, supported presentations are jsonapi and grpc

```
api {
    presentation {
        jsonapi {
        
        }
    }
}
```

## Authentication
Oauth2 and custom authentication is supported

```
security {
    authentication {
        oauth2 {
            authorization server
            ...
        }
    }
}
```

## Api Versioning

## Data Versioning

## Data Schema version control and data migration

## Operations with Relations

## Projection

## Audit

## Filtering

## Advanced Search

## Extensions
