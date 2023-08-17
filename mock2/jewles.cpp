#include<iostream>
#include<string>
using namespace std;

int main()
{
    string jewels = "aA";
    string stones = "aAAbbbb";

    int cnt = 0;
    int ans = 0;
    int length = jewels.length();
    int length2 = stones.length();

    for(int i=0;i<length;i++)
    {
        for(int j=0;j<length2;j++)
        {
            if(stones[j] == jewels[i])
        {
            ans++;
        }
        }
            cnt++;

    }
    cout<<ans<<endl;

    return 0;
}