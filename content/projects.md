---
title: Projects
draft: false
---

## My Work

I'm passionate about creating tools and solutions that help developers build better software. Below you'll find information about my projects and open source contributions.

## Open Source Projects

### [roda-ledger](https://github.com/tislib/roda-ledger)

A high-performance, durable, and crash-consistent financial ledger and transaction executor built in Rust, optimized for microsecond-level latency and millions of transactions per second.

**Highlights:**
- Engineered a pipelined execution model (Core-Per-Stage) using lock-free ArrayQueues to eliminate thread contention and maximize mechanical sympathy.
- Achieved a peak throughput of 2.79 Million tx/s for deposits and 1.70 Million tx/s for transfers with sub-microsecond average latency.
- Implemented strict durability via Write-Ahead Logging (WAL) and automatic state recovery through snapshot loading and WAL replay.

### [roda-state](https://github.com/tislib/roda-state)

Zero-copy, lock-free multithreaded pipeline in Rust designed for ultra-low latency environments. By heavily profiling the CPU architecture, it bypasses standard multi-threading performance traps to strictly saturate the L1 cache bandwidth.

**Highlights:**
- Engineered a zero-copy, lock-free multithreaded pipeline in Rust, achieving a peak algorithmic throughput of 58.7 million elements per second (MEPS) in CPU-bound stateful workloads.
- Processed 24 million real-world MBO market data events with an unloaded median latency of 1.2µs, completely decoupling disk I/O bottlenecks from the algorithmic hot path.
- Defeated cross-core MESI protocol overhead by implementing dynamic block processing (read_window), reducing L1 cache misses to 0.73% and boosting IPC to 1.93.

### [apibrew](https://github.com/apibrew/apibrew)

An open-source low-code backend-as-a-service that automatically generates REST/gRPC APIs, management UIs, and real-time event streams from data models.

### [logi](https://github.com/tislib/logi)

A framework for defining and parsing custom Domain Specific Languages (DSLs) with efficient AST generation and semantic validation.

### [download-delegator](https://github.com/tislib/download-delegator)

A tool for parallel web page downloading, compatible with EC2 and AWS Lambda, enabling efficient bulk downloads.

---

*More projects and contributions will be added soon.*
