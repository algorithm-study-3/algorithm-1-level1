import sys
input = sys.stdin.readline
from collections import deque

t = int(input())

for i in range(t):
    queue = deque(input().rstrip())
    while(len(queue)>0):
        if(queue[0]==')'):
            break
        elif(queue[0]=='('):
            if ')' in queue:
                queue.popleft()
                queue.remove(')')
            else:
                break
    if(len(queue)==0):
        print("YES")
    else:
        print("NO")