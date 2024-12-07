#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define vvll vector<vector<long long>>
#define mii map<int, int>
#define msi map<string, int>
#define mci map<char, int>
#define si set<int>
#define sc set<char>
#define f(i, s, e) for (long long int i = s; i < e; i++)
#define pb push_back
#define mod 1000000007

void solve()
{
    ll n,m;
    cin>>n>>m;
    vll nums(n+1,0);
    f(i,0,m)
    {
        ll l,r,x;
        cin>>l>>r>>x;
        l--;
        r--;
       nums[l]+=x;
       nums[r+1]-=x;
    }
    f(i,1,n)
    {
        nums[i]+=nums[i-1];
    }
   cout<<*max_element(nums.begin(),nums.end())<<"\n";
}
int main()
{
    
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t=1;
    // cin >> t;
    while (t--)
    {
        solve();
    }
}