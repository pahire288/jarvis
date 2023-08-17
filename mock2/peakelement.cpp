#include<iostream>
#include<vector>
using namespace std;


int FindPeakElemet(vector<int>& num)
{
    
    
}

int main()
{

    int n;
    cin>>n;

    vector<int> p;

    for(int i=0;i<n;i++)
    {
        int element;
        cin>>element;

        p.push_back(element);
    }

    int ret = FindPeakElemet(p);

    cout<<ret<<endl;

    return 0;
}