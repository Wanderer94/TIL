- 재귀함수 결국은 bfs로 푼다고 생각해야한다.

## 응용 N-Rook
```py
def bimatch(num):
    if visited[num]:
        return False
    visited[num] = 1
    for g in graph[num]:
        if selected[g] == -1 or bimatch(selected[g]):
            selected[g] = num
            return True
    return False

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
row_board = [[0] * m for _ in range(n)]

count = 0
for i in range(n):
    count += 1
    check = 0
    for j in range(m):
        if board[i][j] < 2:
            row_board[i][j] = count
            check = 1
        if board[i][j] == 2 and check:
            count += 1
            check = 0

l = count + 1
graph = [[] for _ in range(l)]
count = 0
for i in range(m):
    count += 1
    check = 0
    for j in range(n):
        if board[j][i] == 0:
            graph[row_board[j][i]].append(count)
            check = 1
        if board[j][i] == 2 and check:
            count += 1
            check = 0

graph += [[] for _ in range(max(0, count))]
l = len(graph)
selected = [-1] * (l)
ans = 0
for i in range(l):
    visited = [0] * l
    if bimatch(i):
        ans += 1
print(ans)
```