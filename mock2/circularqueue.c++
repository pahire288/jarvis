#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class MyQueue {
public:
stack<int> v1;
stack<int> tem;
    MyQueue() {
        
    }
    
    void push(int x) {
            v1.push(x);
    }
    
    int pop() {
        while(v1.size()>1)
        {
            tem.push(v1.top());
            v1.pop();
                        
        }
            return v1.top();
           v1.pop();

        while(! tem.empty())
        {
            v1.push(tem.top());
        }

        
    }
    
    int peek() {
        while(v1.size()>1)
        {
            tem.push(v1.top());
            v1.pop();
                           
        }
        return v1.top();
        while(! tem.empty())
        {
            v1.push(tem.top());
        }
    }
    
    bool empty() {
        return v1.size() == 0;
    }

    
};



int main()
{
    MyQueue stack;

    



    return 0;
}