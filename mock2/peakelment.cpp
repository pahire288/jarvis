#include<iostream>
#include<vector>
using namespace std;

int fpe(vector<int>& num)
{
    int n = num.size();
    int max = 0;
    for(int i=0;i<n;i++)
    {
        if(num[i]>num[i+1] && num[i]>num[i-1])
        {
            if(num[i]>max)
            {
                max = num[i];
            }
        }
    }
    return max;
}

int main()
{
    int n = 5;
    
    vector<int> p;
    for(int i=0;i<=n;i++)
    {
        int element;
        cin>>element;
        p.push_back(element);
    }

    int ret = fpe(p);

        cout<<"The Peak elemet is"<<endl;
        cout<<ret<<endl;
    

    return 0;
}