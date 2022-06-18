
// this is a type of data that is going to returning whenever we make thoese calls
// to backend because we are just technically mirroring 
// what an employee looks like from the backend 

export interface Employee {
    id: number;
    name: string;
    email: string;
    jobTitle:string;
    phone: string;
    imageUrl: string;
    employeeCode: string;
}