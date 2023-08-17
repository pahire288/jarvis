#include<iostream>
#include<vector>
using namespace std;


int main()
{    
    int n;
    cin>>n;

    vector<int> g1;
    for(int i=0;i<n;i++)
    {
        int element;
        cin>>element;

        g1.push_back(element);

    }


    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(g1[j]<g1[i])
            {
                int temp;

                temp = g1[j];
                g1[j] = g1[i];
                g1[i] = temp;
            }
        }
    }

    for(int c=0;c<n;c++)
    {
        cout<<g1[c]<<" ";
    }

    return 0;
}