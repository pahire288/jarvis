#include<iostream>
using namespace std;


class Queue
{
    public:

    int arr[5];
    int end = 0;
    int start =0;
    Queue()
    {

    }

    void Enqueu(int data)
    {
        arr[end]=data;
        end++;
    }

    void Dequeu()
    {
        start++;
    }

    void is_empty()
    {
        if(end == 0)
        {
            cout<<"Queue is empty"<<endl;
        }
        else{
            cout<<"is not empty"<<endl;
        }
    }

    void Firstele()
    {
        cout<<"First Element"<<endl;
        cout<<arr[start]<<endl;
        cout<<"First Element"<<endl;
    }

    void Display()
    {
        for(int i=start;i<end;i++)
        {
            cout<<arr[i]<<endl;
        }
    }

};
int main()
{
    Queue q;

    q.Enqueu(100);
    q.Enqueu(11);
    q.Enqueu(12);
    q.Enqueu(13);
    //q.Dequeu();
    //q.is_empty();
    q.Firstele();

    q.Display();






    return 0;
}

