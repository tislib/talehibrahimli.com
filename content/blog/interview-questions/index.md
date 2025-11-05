---
title: "Software Engineering Interview Topics"
date: 2021-08-16T00:00:00
lastmod: 2023-11-15T00:00:00
slug: "interview-questions"
description: "Comprehensive guide to software engineering interview questions across different technologies and experience levels"
page:
   theme: "wide"
tags: ["interview", "learning", "career", "software-engineering"]
categories: ["blogs", "java", "golang", "interview", "career-development"]
toc:
   auto: true
---

## Introduction

This guide contains a curated list of interview questions for software engineers, organized by technology and topic. Use it to:

- **Prepare for interviews**: Focus on the topics relevant to your target role
- **Conduct interviews**: Select questions appropriate for the candidate's experience level
- **Guide your learning**: Identify knowledge gaps in your technical expertise

**Experience Level Indicators:**
- [J] - Junior level (0-2 years experience)
- [M] - Mid-level (2-5 years experience)
- [S] - Senior level (5+ years experience)

# Programming Languages

## Java
### OOP Concepts
1. What is the difference between abstract class and interface? [J, M]
2. What is the use-case difference between abstract class and interface? [J, M]
3. Explain encapsulation, inheritance, polymorphism, and abstraction with examples. [J]
4. What are the SOLID principles and how do they apply to Java? [M, S]
5. What is composition over inheritance and when would you use it? [M, S]

### Collections API
1. What data structures do you know in Collections API? [J, M]
2. What are the differences between ArrayList and LinkedList? [J, M]
3. Complexity (https://www.bigocheatsheet.com)
   * Complexity of operations on ArrayList and LinkedList
   * Complexity of HashMap operations
4. Difference between Set and List implementations [J, M]
5. How does HashMap work internally? [M]
   * Hash Collision resolution strategies
   * Load factor and rehashing
6. What are equals and hashCode for and what is their usage in HashMap? [M]
7. When would you use ConcurrentHashMap vs synchronized HashMap? [M, S]
8. Explain the differences between TreeMap, HashMap, and LinkedHashMap. [M, S]

### Multi-Threading
1. What is the difference between Thread and Runnable? [J, M]
2. What are volatile and synchronized keywords for? [M]
3. What is the difference between synchronized blocks/methods and Lock interfaces? [M]
4. What is Semaphore used for and how does it work? [M]
5. What is the difference between ReentrantLock and ReadWriteLock? [M, S]
6. What is a race condition and how can you prevent it? [M]
7. Explain deadlock, livelock, and thread starvation with examples. [M, S]
8. Atomic operations [M, S]
   * AtomicInteger vs synchronized counter
   * ConcurrentMap vs synchronized Map
9. How does the Fork/Join framework work? [S] (?)
10. What is the CompletableFuture API and how does it improve asynchronous programming? [M, S]

### Memory Management and Garbage Collection
1. How does garbage collection work in Java? [M]
2. Explain the differences between Heap and Stack memory. [J, M]
3. What are the different generations in Java Heap? [M]
4. How does garbage collection clean memory? [M]
5. What is "Stop the World" in GC and how does it impact application performance? [M, S]
6. How do modern garbage collectors like G1, ZGC? [S]
7. How to tune JVM memory settings (Xmx, Xms, etc.)? [M, S]
8. How to identify memory problems and analyze memory leaks? [S]
   * Tools and techniques for memory profiling
   * Common memory leak patterns

### Spring Boot & Spring Framework
1. Explain Dependency Injection and Inversion of Control. [J, M]
2. What are the different bean scopes in Spring? [J, M]
3. How does Spring Boot autoconfiguration work? [M]
4. Explain the Spring application context and bean lifecycle. [M]
5. What is AOP and how is it implemented in Spring? [M]
6. How would you implement transaction management in Spring? [M]
7. Explain Spring Security authentication and authorization. [M, S]
8. What are the best practices for RESTful API design with Spring? [M]
9. How would you implement caching in a Spring application? [M, S]
10. Explain Spring's support for reactive programming. [S]

## Golang

### Parallelism and Concurrency
1. Explain the difference between goroutines and traditional threads. [J, M]
2. Let's say you want to implement an API named batch-download where a list of URLs will be sent in the request, and you need to download all URLs and return the result to the server.
   * How would you implement it in parallel/concurrent where maximum 10 URLs can be downloaded at the same time? [M]
   * How would you send responses to the client as soon as one of the URLs is downloaded (not waiting for all of them to be downloaded)? [M, S]
3. What is context for? How can you use it to pass values to sub-methods? [M]
4. What is the difference between sync.WaitGroup and channels? [M]
5. How can you signal a parent goroutine from a child goroutine? [M]
6. Explain the select statement and its use cases. [M]
7. What are common concurrency patterns in Go? [M, S]
8. How would you implement a worker pool pattern? [M, S]

### Type System
1. What are pointers for in Go? How do you decide when to use pointers and when not to? [J, M]
2. Explain Go interfaces and their benefits. [J, M]
3. How can you solve circular import problems in Go? [M]
4. What are empty interfaces and when should they be used? [M]
5. Explain type embedding in Go. [M]
6. What are the differences between value receivers and pointer receivers for methods? [M]
7. How does type assertion work in Go? [M]

### Error Handling
1. What are the best practices for error handling in Go? [J, M]
2. How would you implement custom error types in a large Go application? [M]
3. When would you use panic/recover instead of traditional error handling? [M, S]
4. How would you implement error wrapping and unwrapping? [M]
5. What is the errors package and how does it improve error handling? [M]

### gRPC
1. What is gRPC? How is it different from REST APIs? [M]
2. How can you implement full-duplex communication in gRPC? [M, S]
3. How would you check statuses of client devices via gRPC client streaming? [M, S]
4. What are the advantages and disadvantages of gRPC compared to REST? [M]
5. How would you handle authentication and authorization in gRPC? [M, S]

### SQL & Locks
1. How can you implement SQL transactions in Go? [M]
2. How can you implement pessimistic locking in Go? [M, S]
3. How can you prevent double payment issues for a Go endpoint? [M, S]
4. How would you implement distributed locks in Go? [S]
5. What are the different isolation levels in database transactions and when would you use each? [M, S]

### Testing
1. How can you test your Go code? [J, M]
2. How can you mock your dependencies in Go? [M]
3. How can you test your Go code with a database? [M]
4. How would you implement integration tests in Go? [M, S]
5. What is table-driven testing and when would you use it? [M]
6. How would you measure and improve test coverage? [M]

### Event-Driven Architecture
1. How can you implement event-driven architecture in Go? [M, S]
2. How can you implement pub/sub in Go? [M, S]
3. How can you implement event sourcing in Go? [S]
4. What are the pros and cons of event-driven architecture? [M, S]
5. How would you handle event versioning and schema evolution? [S]

### Performance & Optimization
1. How would you investigate performance issues and memory leaks in Go? [M, S]
2. How can you implement rate limiting in Go? [M]
3. What tools would you use for profiling Go applications? [M, S]
4. How would you optimize a Go application for high throughput? [S]
5. What are common memory optimization techniques in Go? [S]

## JavaScript/TypeScript

### Core Concepts
1. Explain closures and their practical applications. [J, M]
2. What is the event loop in JavaScript? [J, M]
3. Explain prototypal inheritance. [M]
4. What are Promises and how do they work? [J, M]
5. How does async/await work under the hood? [M]

### TypeScript
1. What benefits does TypeScript provide over JavaScript? [J, M]
2. Explain interfaces vs types in TypeScript. [M]
3. How would you use generics in TypeScript? [M]
4. What are decorators and how would you use them? [M, S]

### Frontend Frameworks
1. React: Explain the virtual DOM and reconciliation. [M]
2. React: What are hooks and how do they work? [M]
3. Angular: Explain change detection strategies. [M, S]
4. Vue: Explain the reactivity system. [M]

## Design Patterns
1. You have different payment types, and you have a very big switch block for each payment type to decide which code to execute. How would you refactor this code? [M, S]

## Web Fundamentals
1. What happens when you open google.com in your browser? Explain the entire process from typing the URL to seeing the page. [J, M, S]

# System Design & Architecture

## General System Design
1. How would you approach designing a system from scratch? [M, S]
2. Explain the trade-offs between monolithic and distributed architectures. [M, S]
3. How would you design a URL shortening service like bit.ly? [M, S]
4. How would you design a distributed file storage system like Dropbox or Google Drive? [S]
5. How would you design a social media feed system? [S]
6. How would you design a notification system that can handle millions of users? [S]
7. Explain the concept of back-of-the-envelope calculations in system design. [M, S]
8. How would you design a rate limiter for an API? [M, S]
9. How would you design a recommendation system? [S]
10. How would you design a real-time chat application? [M, S]

## Microservices
1. What are the benefits and drawbacks of microservices architecture? [M, S]
2. How would you handle data consistency across microservices? [S]
   * Sagas
3. Explain service discovery and its implementation. [M, S]
4. How would you implement resilience in a microservices architecture? [S]
5. What are stability patterns?
   * Circuit Breaker
   * Bulkhead
   * Timeout
   * Retry
   * Rate Limiting
6. How would you handle inter-service communication in a microservices architecture? [M, S]
   * Synchronous vs asynchronous communication
   * Message brokers vs direct API calls
7. Explain the concept of bounded contexts in microservices design. [M, S]
8. How would you approach microservices decomposition for a monolithic application? [S]
9. What strategies would you use for testing microservices? [M, S]
10. How would you implement service-to-service authentication and authorization? [S]

## Distributed Systems
1. Explain the CAP theorem and its implications. [M, S]
2. How would you design a system for high availability? [S]
3. What strategies would you use for data partitioning? [S]
4. How would you handle eventual consistency? [S]
5. Explain the concept of consensus algorithms (like Paxos, Raft) and their importance. [S]
6. How would you implement distributed transactions? [S]
7. What are the challenges of clock synchronization in distributed systems and how would you address them? [S]
8. Explain the concept of idempotency and why it's important in distributed systems. [M, S]
9. How would you design a distributed caching system? [S]
10. What strategies would you use to handle network partitions? [S]

## Message Brokers
1. Compare RabbitMQ and Kafka architectures and use cases. [M, S]
2. How does Kafka achieve high throughput and fault tolerance? [M, S]
3. Explain Kafka's partitioning strategy and consumer groups. [M, S]
4. How does RabbitMQ's exchange and queue system work? [M, S]
5. What are the different exchange types in RabbitMQ and when would you use each? [M]
6. Explain the concept of Event-Driven Architecture (EDA) and its benefits. [M, S]
7. What is Event Sourcing and when would you use it? [S]
8. Compare Command Query Responsibility Segregation (CQRS) with traditional architectures. [S]
9. What are the pros and cons of asynchronous communication in distributed systems? [M, S]
10. Explain message delivery guarantees (at-most-once, at-least-once, exactly-once). [M, S]
11. How would you implement exactly-once delivery semantics? [S]
12. What strategies would you use to handle message failure and retries? [M, S]
13. How would you monitor and troubleshoot a message broker system in production? [M, S]
14. Explain the concept of back pressure and how to handle it. [S]
15. How would you design a system to handle message ordering requirements? [S]

## API Design
1. What are RESTful API best practices? [J, M]
2. How would you version an API? [M]
3. What is GraphQL and when would you use it over REST? [M, S]
4. How would you secure an API? [M]
5. How would you design an API for both mobile and web clients? [M, S]
6. What are the trade-offs between different API authentication methods? [M]
7. How would you handle API rate limiting and why is it important? [M]
8. Explain the concept of API gateways and their benefits. [M, S]
9. How would you design an API that needs to support both synchronous and asynchronous operations? [S]
10. What strategies would you use for API documentation and how would you keep it updated? [M]

## Scalability
1. How would you scale a database? [M, S]
2. What caching strategies would you implement for a high-traffic website? [M, S]
3. How would you design a system to handle millions of concurrent users? [S]
4. Explain horizontal vs vertical scaling and when you would choose one over the other. [M, S]
5. How would you implement a load balancing strategy for a distributed application? [M, S]
6. What techniques would you use to optimize database query performance at scale? [M, S]
7. How would you design a system that needs to process large volumes of data in real-time? [S]
8. Explain the concept of database sharding and how you would implement it. [S]
9. What strategies would you use to handle traffic spikes and seasonal load variations? [S]
10. How would you approach capacity planning for a growing application? [M, S]
11. You want to build an application to show the latest bitcoin price, where millions of users will open this website and see price updates (whenever an update happens, immediately see it). How would you design and implement this system? [M, S]

## Database Design & Migration Questions
1. You want to rename a column and during deployment you want to have zero downtime, how can you do it? [M, S]
2. How would you implement a schema change that requires data migration for a large table without downtime? [S]
3. What strategies would you use for database backups in a high-transaction environment? [M, S]
4. How would you design a multi-tenant database architecture? [S]
5. Explain the trade-offs between normalized and denormalized database designs. [M, S]
6. How would you implement soft deletes and when would you use them? [M]
7. What are the considerations for choosing between SQL and NoSQL databases for a specific use case? [M, S]
8. How would you design a database to handle time-series data efficiently? [S]

## Concurrency Control & Locking
1. Explain the difference between pessimistic and optimistic locking. [M, S]
2. In what situations would you choose pessimistic locking over optimistic locking and vice versa? [M, S]
3. How would you implement optimistic locking in a database-backed application? [M]
4. Explain how SELECT FOR UPDATE works and when you would use it. [M, S]
5. How would you handle the lost update problem in a concurrent system? [M, S]
6. How can you handle double payment issues? What are possible approaches? [M, S]
7. What strategies would you use to prevent deadlocks when using pessimistic locking? [S]
8. How would you implement distributed locks in a microservices architecture? [S]
9. Explain the different transaction isolation levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE) and their trade-offs. [M, S]
10. How do transaction isolation levels in Java (TRANSACTION_READ_UNCOMMITTED, TRANSACTION_READ_COMMITTED, TRANSACTION_REPEATABLE_READ, TRANSACTION_SERIALIZABLE) map to the SQL standard? [M, S]
11. What is the phantom read problem and how can it be prevented? [M, S]
12. How would you implement row-level locking vs. table-level locking? [M, S]
13. Explain the concept of MVCC (Multi-Version Concurrency Control) and how databases implement it. [S]
14. How would you handle concurrent access to a shared resource in a distributed system? [S]
15. What is the difference between a shared lock and an exclusive lock? [M]
16. How would you implement optimistic locking with version numbers or timestamps? [M]

# DevOps & Infrastructure

## Docker & Containerization
1. How can you containerize your application? [J, M]
2. What are the best practices for creating efficient Docker images? [M]
3. How would you manage sensitive data in containers? [M, S]

## Kubernetes
1. Explain Kubernetes architecture. [M]
2. How would you deploy your application to Kubernetes? [M]
3. How would you implement auto-scaling in Kubernetes? [M, S]
4. What strategies would you use for zero-downtime deployments? [S]

## CI/CD Pipelines
1. What are the key components of a CI/CD pipeline? [J, M]
2. How would you implement automated testing in a CI/CD pipeline? [M]
3. What strategies would you use for feature flagging and canary deployments? [M, S]
4. How would you handle database migrations in a CI/CD pipeline? [M, S]

## Cloud Services
1. What are the differences between IaaS, PaaS, and SaaS? [J, M]
2. How would you choose between different cloud providers? [M, S]
3. What are serverless architectures and when would you use them? [M, S]
4. How would you implement infrastructure as code? [M, S]

# Data Engineering & Big Data

## Data Processing
1. How would you design a data pipeline for processing large volumes of data? [M, S]
2. Explain the differences between batch processing and stream processing. [M, S]
3. What tools and frameworks would you use for big data processing and why? [M, S]
4. How would you handle data quality issues in a data pipeline? [M, S]
5. Explain the concept of data lineage and why it's important. [M, S]

## Data Storage & Warehousing
1. How would you design a data warehouse for analytics purposes? [S]
2. What are the trade-offs between different data storage formats (Parquet, Avro, ORC, etc.)? [M, S]
3. How would you implement a data lake architecture? [S]
4. Explain the concept of slowly changing dimensions and how you would implement them. [S]
5. How would you optimize query performance in a data warehouse? [M, S]

## Data Modeling
1. How would you approach data modeling for a complex domain? [M, S]
2. What are the differences between star schema and snowflake schema? [M]
3. How would you design a data model that needs to support both OLTP and OLAP workloads? [S]
4. Explain the concept of dimensional modeling and when you would use it. [M, S]

# Security & Compliance

## Application Security
1. How would you implement secure authentication and authorization in a web application? [M, S]
2. What are common web security vulnerabilities and how would you prevent them? [M, S]
3. How would you handle sensitive data in your application? [M, S]
4. Explain the concept of defense in depth and how you would implement it. [S]
5. How would you implement secure API communication? [M, S]

## Infrastructure Security
1. How would you secure a cloud-based infrastructure? [M, S]
2. What strategies would you use for network security in a distributed system? [S]
3. How would you implement secure CI/CD pipelines? [M, S]
4. Explain the concept of least privilege and how you would implement it. [M, S]
5. How would you handle security incident response? [S]

## Compliance & Privacy
1. How would you ensure GDPR compliance in your application? [M, S]
2. What strategies would you use for data anonymization and pseudonymization? [M, S]
3. How would you implement data retention policies? [M, S]
4. Explain the concept of privacy by design and how you would implement it. [S]
5. How would you handle cross-border data transfer compliance? [S]

# Soft Skills & Engineering Practices

## Problem Solving
1. Describe your approach to debugging a complex issue. [J, M, S]
2. How do you make technical decisions when there are multiple valid solutions? [M, S]
3. How would you approach refactoring a legacy codebase? [M, S]
4. Describe a situation where you had to solve a particularly challenging technical problem. What was your approach? [M, S]
5. How do you balance quick fixes versus proper solutions when under time pressure? [M, S]
6. How do you approach learning new technologies or frameworks? [J, M, S]
7. How do you validate your assumptions when solving complex problems? [M, S]

## Collaboration & Communication
1. How do you handle disagreements within a team? [M, S]
2. How do you share knowledge within your team? [M, S]
3. How do you mentor junior developers? [S]
4. How do you communicate technical concepts to non-technical stakeholders? [M, S]
5. Describe a situation where you had to influence a decision without having direct authority. [M, S]
6. How do you handle receiving and giving feedback? [M, S]
7. How do you approach cross-team collaboration on complex projects? [S]
8. How do you ensure effective communication in remote/distributed teams? [M, S]

## Project Management & Leadership
1. How do you estimate the time required for a task? [M, S]
2. How do you handle technical debt? [M, S]
3. How do you prioritize features vs. bug fixes? [M, S]
4. How do you approach risk management in software projects? [M, S]
5. How do you handle scope creep? [M, S]
6. How do you balance innovation with stability in a product? [S]
7. How do you measure the success of a software project beyond just shipping code? [M, S]
8. How do you handle situations where project requirements are unclear or constantly changing? [M, S]
9. How do you approach building and leading high-performing engineering teams? [S]

## Engineering Culture & Ethics
1. How do you contribute to a positive engineering culture? [M, S]
2. How do you approach ethical considerations in software development? [M, S]
3. How do you balance business needs with engineering best practices? [M, S]
4. How do you approach diversity and inclusion in engineering teams? [M, S]
5. How do you handle situations where you're asked to implement features that might have negative societal impacts? [S]
6. How do you approach continuous improvement in your team's processes? [M, S]

# Challenges

1. Building a highly scalable load balancer
2. Design transfer operation "wallet to wallet" to prevent double payments.
3. Refactoring big switch for pay operation based on a payment type
4. What happens when you open google.com on browser (in detail)
5. Design a distributed caching system with eventual consistency
6. Implement a rate limiting service for a high-traffic API
7. Design a real-time analytics dashboard that can handle millions of events per second
8. Create a fault-tolerant job scheduling system
9. Design a system for detecting and preventing fraudulent transactions
10. Implement a distributed logging and monitoring solution
11. Design a content delivery network (CDN) architecture
12. Create a system for handling multi-region data replication with conflict resolution
13. Design a recommendation engine that can scale to millions of users
14. Implement a system for A/B testing at scale

1. Select for update (get list of transactions)
2. Check if transaction exists, if yes, we throw exception
3. Transfer payment
4. Release transaction
