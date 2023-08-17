#include<iostream>
using namespace std;

void print(int n)
{
    if(n == 0) return;

    print(n-1);
    cout<<n<<" ";
}
int main()
{
    int a = 0;
    cout<<"Please Enter a Number"<<endl;
    cin>>a;

    print(a);


    return 0;
}