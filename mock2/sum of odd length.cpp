#include<iostream>
#include<vector>
using namespace std;

class solution{
    public:
int sol(vector<int>& arr)
{

    int l = arr.size();

    int sum = 0;
    for(int i=0;i<l;i++)
    {
        sum += (((i+1)*(l-i)+1)/2)*arr[i];
    }
      return sum;

}
};

int main()
{
    int n;
    cin>>n;

    vector<int> g;

    for(int i=0;i<n;i++)
    {
        int element;
        cin>>element;

        g.push_back(element);
    }

    solution s;
    int output = s.sol(g);
    cout<<output<<endl;


    return 0;
}