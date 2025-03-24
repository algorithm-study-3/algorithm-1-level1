import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
arr = list(map(int,input().split()))
cnt=0

for i in range(n):
    for j in range(i+1,n,1):
        if(arr[i]+arr[j]==m):
            cnt+=1
            break

print(cnt)