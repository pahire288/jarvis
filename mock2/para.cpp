#include<iostream>
#include<stack>

using namespace std;
class solution
{
    public:
    stack<char>st;
    bool check(string s)
    {
        for(auto c : s){
        if(st.empty())
        {
            st.push(c);
        }else if((st.top() == '(' && c == ')')  || (st.top() == '{' && c == '}') || (st.top() == '[' && c == ']')){
        st.pop();
        }
        else{
            st.push(c);
        }
        }
        if(st.empty())
        return true;



        return false;
    }
};
int main()
{
    string input;
    cin>>input;


    solution s;

    bool output=s.check(input);


    if(output)
    {
        cout<<"true"<<endl;
    }
    else{
        cout<<"false"<<endl;
    }


    return 0;
}