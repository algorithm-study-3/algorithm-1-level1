# 백준 1931 / 회의실 배정

# 그리디 알고리즘

import sys
input = sys.stdin.readline

n = int(input())

end = 0
res = 0

timeTable = []

for _ in range(n):
    s,e = map(int,(input().split()))
    timeTable.append([s,e])
    
timeTable.sort(key = lambda x : (x[1],x[0]))

for s,e in timeTable:
    if end<=s:
        res +=1
        end=e
        
print(res)
    