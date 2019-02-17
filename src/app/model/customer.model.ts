export class Customer {
    public customerId : number ;
    public firstName : string ;
    public lastName : string ;
    public dob: Date;
    public age : number;
    public address : string;
    public city : string;
    public state : string;
    public country : string;
    public zipcode : number;
    public emailId : string;
    public emailpriority: string;
    public phone: number;
    public phonePriority: String;
    public proofType: string;
    public proofNumber: string;
    public annualIncome: number;
    public monthlyIncome: number;
}
export class CustomerGeneralInfo {
     public firstName : string;
     public lastName : string;
     public dob : Date;
     public age : number;
     public address : string;
     public city : string;
     public state : string;
     public country: string;
     public zipcode: number;
}

export class CustomerContactInfo {
     public emailId : string;
     public emailpriority: string;
     public phone: number;
     public phonePriority: String;
}

export class CustomerIdentityInfo {
     public proofType: string;
     public proofNumber: string;
}

export class CustomerIncomeInfo {
     public annualIncome: number;
     public monthlyIncome: number;
}