#include<iostream>
#include<stack>
using namespace std;

void print(stack<int> &p) {
    if (p.empty()) return;
    
    int topElement = p.top();
    p.pop();

    print(p);

    cout << topElement << " ";
}

int main()

{

    stack<int> s;
    int a = 0;

    cout<<"Please Enter a Number"<<endl;

    cin>>a;

    for(int i=0;i<=a;i++)
    {
        int element;
        cin>>element;
        s.push(element);
    }

    print(s);
    return 0;

}

