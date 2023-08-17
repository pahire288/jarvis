#include<bits/stdc++.h>
#include<vector>
using namespace std;
 


//========== User's Code Starts Here ==========

class Solution {
public:
    int revamp(vector<int>& arr) {
        //code here 
       
       int intcrement = 0;
       
       int n = arr.size();
       
       for(int j=0;j<n;j++)
       {
            if(arr[j]>arr[j+1])
            {
                int temp = arr[j];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
       }

       for(int i=0;i<n;i++)
       {
           if(arr[i] == arr[i+1])
           {
               int num = arr[i+1];
               num++;
               arr[i+1] = num;
               intcrement++;
           }
       }
       
       return intcrement;
    }
};

//========== User's Code Ends Here ==========



int main()
{
    int n;
    cin>>n;
    vector<int> g1;
    
    for (int i = 1; i <= n; i++)
    {
        int element;
        cin>>element;
        g1.push_back(element);
    }
    Solution s;
    int output = s.revamp(g1);
    cout<<output<<endl;
    return 0;
}