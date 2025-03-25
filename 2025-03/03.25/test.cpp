#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N;
    cin >> N;
    
    // init
    vector<int> dp(N+1, 0);
    if(N>=1){
        dp[2]=1;
        dp[3]=1;
    }

    for(int i=4; i<=N;  i++){
        int mini = INT_MAX;
        if(i%3 == 0){
            mini = min(mini, dp[i/3]);
        }
        if(i%2 == 0){
            mini = min(mini, dp[i/2]);
        }
        mini = min(mini, dp[i-1]);
        dp[i]=mini+1;
    }

    cout << dp[N]<<"\n";

    return 0;
}