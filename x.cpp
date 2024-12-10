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
    vector<vector<string>> v;
    vector<string> city;
    int n ;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        string s,d;
        cin >> s>>d;
        v.push_back({s,d});
        city.push_back(s);
        city.push_back(d);
    }
    map<string,int>mp;
    for(int i=0;i<v.size();i++)
    {
        
        mp[v[i][0]]++;
    }
    for(auto x:city){
        if(mp.find(x)==mp.end())
        {
            cout<<x<<endl;
            break;
        }
    }
    return;
}
int main()
{
    
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
}