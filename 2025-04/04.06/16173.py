from collections import deque

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]
dx = [1, 0] 
dy = [0, 1]
visited = [[0] * n for _ in range(n)]
bfs_visited = [[0] * n for _ in range(n)]


# def dfs(x, y):
#     if x >= n or x <= -1 or y >= n or y <= -1:
#         return False
#     if visited[x][y] == 1:
#         return False
#
#     if graph[x][y] == -1:
#         print('HaruHaru')
#         exit()  # 종료
#
#     visited[x][y] = 1
#
#     for i in range(2):
#         nx = x + dx[i] * graph[x][y]
#         ny = y + dy[i] * graph[x][y]
#         dfs(nx, ny)
#     return True


def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    bfs_visited[x][y] = 1
    while queue:
        x, y = queue.popleft()
        for d in range(2):
            nx = x + dx[d] * graph[x][y]
            ny = y + dy[d] * graph[x][y]
            if nx < n and ny < n and bfs_visited[nx][ny] == 0:
                bfs_visited[nx][ny] = 1
                queue.append((nx, ny))
    return bfs_visited[n - 1][n - 1]


# if dfs(0, 0):
#     print('Hing')

if bfs(0, 0) == 1:
    print('HaruHaru')
else:
    print('Hing')