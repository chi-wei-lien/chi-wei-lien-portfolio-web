# Python Coding Interview Cheat Sheet

---

I used to use C++ for coding interviews, but I often got stuck resolving segmentation faults, which wasted a lot of time. As a result, I've switched to Python. Here is a simple cheat sheet for implementing some important data structures. I hope you find it helpful!

## Basics

### 2D array

```python
rows, cols = (2, 3)
arr = [[0 for i in range(cols)] for j in range(rows)]
print(arr)

""" Output
arr = [[0, 0, 0], [0, 0, 0]]
"""
```

### Stack (LIFO)

```python
arr = [1,2,3]
stack = []

for item in arr:
    stack.append(item) # push to stack

while stack:
    print(stack.pop(), end=" ") # pop from stack

""" Output
3 2 1
"""
```

### Queue (FIFO)

```python
from collections import deque

arr = [1,2,3]
queue = deque([])

for item in arr:
    queue.append(item) # enqueue

while queue:
    print(queue.popleft(), end=" ") # dequeue

""" Output
1 2 3
"""
```

### Hashmap (dictionary)

```python
hashmap = {}
key = 0
value = 1
hashmap[key] = value # add key value pair

print(hashmap)
print(key in hashmap) # check if key is present

hashmap.pop(key) # remove key value pair
print(key in hashmap)

""" Output
{0: 1}
True
False
"""
```

### Hashmap with initial value

```python
hashmap = defaultdict(lambda: 0)
hashmap['a'] += 1
print(hashmap['a']) # this will return 1
print(hashmap['b']) # this will return 0
```

### Hashset

```python
hashset = set([2])
item = 1

hashset.add(item) # add to set
print(hashset)
print(item in hashset) # check if item is in set

hashset.remove(item) # remove item from set
print(hashset)

""" Output
{1, 2}
True
{2}
"""
```

## Heap

```python
arr = [1,3,2,5,4]
heapq.heapify(arr) # arr is how a min heap
```

### Min Heap

```python
import heapq

minHeap = []
arr = [1,5,9,10,7]
for item in arr:
    heapq.heappush(minHeap, item) # push to min heap

while minHeap:
    popped = heapq.heappop(minHeap) # pop from min heap (get smallest item)
    print(popped, end=" ")

""" Output
1 5 7 9 10
"""
```

### Max (Custom) Heap

```python
import heapq

class heapObject:
    # if you need more value just add more to the constructor parameter list
    def __init__(self, value1, value2):
        self.value1 = value1
        self.value2 = value2

    def __lt__(self, other):
        # less than will make it a min heap
        # return self.get_value() < other.get_value()

        # greater than will make it a max heap
        return self.get_value() > other.get_value()

    def get_value(self):
        # you can customize this part as you want
        return self.value1 + self.value2


minHeap = []
arr = [1,5,9,10,7]
for item in arr:
    heapq.heappush(minHeap, heapObject(item, 0))

while minHeap:
    popped = heapq.heappop(minHeap)
    print(popped.get_value(), end=" ")

""" Output
10 9 7 5 1
"""
```

## Graph

### Adjacent List

```python
edges = [
    [0, 1],
    [2, 3],
    [0, 4],
    [2, 4]
]
adj_list = {}

for edge in edges:
    v1, v2 = edge
    if v1 not in adj_list:
        adj_list[v1] = []
    if v2 not in adj_list:
        adj_list[v2] = []

    adj_list[v1].append(v2)

    # if the graph is not directed
    # adj_list[v2].append(v1)

for v, adj in adj_list.items():
    print(f"{v} -> {adj}")

""" Output
0 -> [1, 4]
1 -> []
2 -> [3, 4]
3 -> []
4 -> []
"""
```
