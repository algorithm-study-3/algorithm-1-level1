n,m = map(int,input().split())

a = list(map(int,input().split()))

res= 0

# 1. 배열 중에서 작은수 두개를 찾아 더해주고 그 값을 배열에 저장한다. (m번 반복)
# 2. 배열의 모든 값을 더한다.

for _ in range(m):
    a.sort()
    a[0]=a[1]=a[0]+a[1]

for i in a:
    res +=i

print(res)