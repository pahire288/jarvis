#include<iostream>
#include<vector>
using namespace std;

bool isbadnumber(int num)
{
    int dig= 0;
    int tempnum = num;
    while(tempnum!=0)
    {
        dig += tempnum % 10;
        tempnum /= 10;
    }

    return num % dig == 0;
}



    vector<int> getbadnumber(int n){

        vector<int>badnumbers;
        int num = 10;

        while(badnumbers.size() < n)
        {
        if(isbadnumber(num))
        {
            badnumbers.push_back(num);
        }
        num++;
        }

        return badnumbers;
    }


int main()
{
    int n ;
    cin>>n;

    vector<int> result = getbadnumber(n);

    for(int i=0;i<result.size();i++)
    {
        cout<<result[i]<<endl;
    }

    return 0;
}