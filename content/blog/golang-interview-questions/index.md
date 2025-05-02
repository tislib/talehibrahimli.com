---
title: "Java Interview Questions"
date: 2021-08-16T00:00:00
lastmod: 2021-08-16T00:00:00
slug: "java-interview-questions"
description: "Java interview questions which I would ask on interview"
resources:
- name: "featured-image"
  src: "featured-image.jpeg"
page:
  theme: "wide"
tags: ["interview-questions", "learning"]
categories: ["blogs", "java", "interview-questions"]
toc:
  auto: false
---
## Introduction
This interview questions are the main questions which picked by me.

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

### Docker & Containerization
1. How you can containerize your golang application?
2. How you can deploy your golang application to kubernetes?
