from collections import deque

arr = [1,2,3]
queue = deque([])

for item in arr:
    queue.append(item) # enqueue

while queue:
    print(queue.popleft(), end=" ") # dequeue
