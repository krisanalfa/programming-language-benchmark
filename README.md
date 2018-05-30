Benchmark configuration:

```
wrk -t4 -c100 -d30s http://localhost:3000/
```

```
node.js
    - express.js
        1. 14461.11 req/sec
        2. 14227.68 req/sec
        3. 14454.01 req/sec
```