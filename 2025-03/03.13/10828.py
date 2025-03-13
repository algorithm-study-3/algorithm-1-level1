import sys
from collections import deque
input = sys.stdin.readline

def push(num):
    queue.append(num)
def pop():
    if(len(queue)==0):
        print(-1)
    else:
        print(queue.pop())
def size():
    print(len(queue))
def empty():
    if(len(queue)==0):
        print(1)
    else: print(0)

def top():
    if(len(queue)==0):
        print(-1)
    else: print(queue[len(queue)-1])



n = int(input())
queue = deque()
for _ in range(n):
    order = input().split()
    if(order[0]=='push'): push(order[1])
    elif(order[0]=='pop'): pop()
    elif(order[0]=='size'): size()
    elif(order[0]=='empty'): empty()
    elif(order[0]=='top'): top()
    


