---
title: "Interview Topics"
date: 2021-08-16T00:00:00
lastmod: 2021-08-16T00:00:00
slug: "java-interview-questions"
description: "Java interview questions which I would ask on interview"
resources:
- name: "featured-image"
  src: "featured-image.jpeg"
page:
  theme: "wide"
tags: ["interview", "learning"]
categories: ["blogs", "java", "golang", "interview"]
toc:
  auto: false
---
# Programming Languages

## Java
### OOP [J, M]
1. What is the difference between abstract class and interface?
2. What is the use-case difference between abstract class and interface?
### Collections API
1. What data structures you know in Collections API [J, M]
2. What is the differences between ArrayList and LinkedList [J, M]
3. Complexity (https://www.bigocheatsheet.com)
   * Complexity of operations on ArrayList and LinkedList
   * Complexity of Hashmap
4. Difference Between Set and List [J, M]
5. How Hashmap works internally
   * Hash Collision
6. What is equals and hashcode for and what is their usage on Hashmap [M]
### Multi-Threading
1. What is the difference between Thread and Runnable? [J, M]
2. What are volatile and synchronized keywords for?
3. What is the difference between synchronized and Lock?
4. What is Semaphore for
5. What is the difference between Reentrant-lock and ReadWrite-lock?
6. What is race condition?
7. What is deadlock, live-lock and thread starvation?
8. Atomic operations
   * Atomic Integer vs synchronized
   * Concurrent Map vs synchronized
### Memory management and Garbage collection
1. How garbage collections work
2. Heap vs Stack
3. Generations and Segments
4. How garbage collection cleans memory.
5. Stop the world
6. How Grid-based new garbage collections work
7. How to adjust memory usage of java (xmx, xms, etc.)
8. How to identify memory problems, how to analyze memory leak issues or performance problems caused by memory issues

### Spring Boot


## Golang
### Parallelism and Concurrency
1. Explain the difference between goroutines and traditional threads
2. Let's say, you want to implement an api named batch-download where list of urls will be sent in request, and you need to download all urls and return the result to server.
   3. How you can implement it in parallel/concurrent where maximum 10 urls can be downloaded at the same time.
   4. How you can send response to client as soon as one of the url is downloaded. (not waiting all of them to be downloaded)
3. What is context for? How you can use it to pass value to sub methods?
4. What is the difference between sync.WaitGroup and channel?
5. How can you signal parent goroutine from child goroutine?

### Type System
1. What is the pointer for in golang? How you decide when to use pointer and when not to use?
2. Explain golang interfaces, what are they for?
3. How you can solve circular import problem in golang?

### Error Handling
1. What are the best practices for error handling in Go?
2. How would you implement custom error types in a large Go application?
3. When would you use panic/recover instead of traditional error handling?

### Grpc
1. What is grpc? How it is different from rest api?
2. How you can implement full duplex communication in grpc?
3. Checking statuses of client device via grpc client streaming.

### Sql & Locks
1. How you can implement sql transactions in golang?
2. How you can implement pessimistic locking in golang?
3. How you can prevent double payment issues for golang endpoint.
4. Implement Distributed Locks in Golang.

### Testing
1. How you can test your golang code?
2. How you can mock your dependencies in golang?
3. How you can test your golang code with database?
4. Integration tests in golang.

### Event Driven
1. How you can implement event driven architecture in golang?
2. How you can implement pub/sub in golang?
3. How you can implement event sourcing in golang?
4. What are pros of event driven architecture?

### Others
1. Investigate performance issue and memory leak in golang.
2. How you can implement rate limiting in golang?
3. Aws services.

# General
### Docker & Containerization
1. How you can containerize your golang application?
2. How you can deploy your golang application to kubernetes?

### CI/CD pipelines
