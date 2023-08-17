#include<iostream>
using namespace std;
class Employee
{
    public:
        int salary;
        string name;
    Employee(int a,string n)
    {
        salary =a;
        name=n;
    }
};
//do Not change the above code
Employee** sort_array(Employee** arr, int n)
{
/*Function to sort the array in ascending order
After sorting return the sorted array */

    for(int i = 0;i<=n-1;i++)
    {
        for(int j=0;j<=n-1-i;j++)
        {   
            Employee* temp;
            if(arr[j]->salary>arr[j+1]->salary)
            {
               temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
               // swap(arr[i],arr[j]);
            }
        }
    }
 
    return arr;
 
 /* Dont change anything below. If changed click on reset. */

}

int main()
{
    int n;
    cin>>n;
    Employee* arr[n];
    for(int i=0;i<n;i++)
    {
        
        string name;
        int salary;
        cin>>name;
        cin>>salary;
        arr[i]=new Employee(salary,name);
    
    }
    Employee** out = sort_array(arr, n);
    for(int i=0;i<n;i++)
    {
        cout<<out[i]->name<<" "<<out[i]->salary<<endl;
    }
    return 0;
}
//========== User's Code Ends Here ==========

