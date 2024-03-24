# BFS
- BFS는 큐 자료구조를 이용
1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
3. 2번의 과정을 더 이상 수행할 수 없을때 까지 반복한다.

```py
from collections import deque

def bfs(g,start,visited):
	queue = deque([start])
	visited[start] = True

	while queue:
		v = queue.popleft()
		print(v,end=' ')
		for i in graph[v]:
			if not visited[i]:
				queue.append(i)
				visitied[i] = True
```