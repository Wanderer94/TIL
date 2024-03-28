# 서로소 집합
- 서로소 집합(Disjoint Sets)이란 공통 원소가 없는 두 집합을 의미한다.
### 서로소 집합 자료구조
- 서로소 부분 집합들로 나누어진 원소들의 데이터를 처리하기 위한 자료구조이다.
- 서로소 집합 자료구조는 두 종류의 연산을 지원한다.
- 합집합(Union): 두 개의 원소가 포함된 집합을 하나의 집합으로 합치는 연산이다.
- 찾기(Find): 특정한 원소가 속한 집합이 어떤 집합인지 알려주는 연산이다.
- 서로소 집합 자료구조는 합치기 찾기(Union Find) 자료구조라고 불리기도 한다.
- 여러 개의 합치기 연산이 주어졌을 때 서로소 집합 자료구조의 동작 과정은 다음과 같습니다.

- 코드 작성
```py
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
	# 루트 노드를 찾을 때까지 재귀 호출
    if parent[x] != x:
    	return find_parent(parent, parent[x])
    return x

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
	a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a<b:
    	parent[b] = a
    else:
    	parent[a] = b
        
# 노드의 개수와 간선(Union 연산)의 개수 입력 받기
v,e = map(int, input().split())
parent = [0]*(v+1)  # 부모 테이블 초기화하기

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v+1):
	parent[i] = i
    
# Union 연산을 각각 수행
for i in range(e):
	a,b = map(int, input().split())
    union_parent(parent, a, b)
    
# 각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end='')
for i in range(1, v+1):
	print(find_parent(parent, i), end=' ')
    
print()

# 부모 테이블 내용 출력하기
print('부모 테이블: ', end='')
for i in range(1, v+1):
	print(parent[i], end=' ')
```
- 개선된 방법
```py
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
	# 루트 노드를 찾을 때까지 재귀 호출
    if parent[x] != x:
    	return find_parent(parent, parent[x])
    return parent[x]

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
	a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a<b:
    	parent[b] = a
    else:
    	parent[a] = b
        
# 노드의 개수와 간선(Union 연산)의 개수 입력 받기
v,e = map(int, input().split())
parent = [0]*(v+1)  # 부모 테이블 초기화하기

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v+1):
	parent[i] = i
    
# Union 연산을 각각 수행
for i in range(e):
	a,b = map(int, input().split())
    union_parent(parent, a, b)
    
# 각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end='')
for i in range(1, v+1):
	print(find_parent(parent, i), end=' ')
    
print()

# 부모 테이블 내용 출력하기
print('부모 테이블: ', end='')
for i in range(1, v+1):
	print(parent[i], end=' ')
```
# 최소신장 트리(크루스칼 알고리즘)
### 신장트리
- 그래프에서 모든 노드를 포함하면서 사이클이 존재하지 않는 부분 그래프를 의미합니다
- 모든 노드가 포함된다는 것은 트리의 조건이기도 합니다.
### 최소신장트리
- 최소한의 비용으로 구성되는 신장트리를 찾아야 할때
- 예를들어 N개의 도시가 존재하는 상황에서 두 도시사이에 도로를 놓아 전체 도시가 서로 연결 될 수 있게 도로를 설치하는 경우 ( 두도시 a,b를 선택했을때, a에서 b로 가는 경로가 반드시 존재하도록 도로를 설치해야함)
- 1,2,3노드가 잇을때, 1,2와 2,3을 연결하면 1,3을 연결하지 않아도 모든노드가 연결되어있다.
### 크루스칼 알고리즘
1. 간선데이터를 비용에 따라 오름차순 정렬한다. (비용이 적은 간선부터 확인)
2. 간선을 하나씩 확인하며 현재의 간선이 사이클을 발생시키는지 확인한다.
3. 사이클이 발생하지 않는경우, 최소신장트리에 포함시킨다. (By Union-Find)
4. 사이클이 발생하는경우, 최소신장 트리에 포함시키지 않는다. 
5. 모든 간선에 대하여 2번과정을 반복한다.
```py
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    a = find_parent(parent,a)
    b = find_parent(parent,b)
    if a<b:
        parent[b] = a
    else:
        parent[a] = b

v,e = map(int, input().split())
parent = [0] * (v+1)

#간선을 담을 리스트, 최종비용을 담을 변수
edges = []
result = 0

for i in range(1, v+1):
    parent[i] = i

for _ in range(e):
    a,b,cost = map(int, input().split())
    edges.append((cost,a,b))

edges.sort()

for edge in edges:
    cost, a, b = edge
    # a,b노드의 루트가 다른경우 = 서로다른 집합인경우 = 사이클이 없다
    if find_parent(parent,a) != find_parent(parent,b):
        union_parent(parent,a,b)
        result += cost

print(result)
```