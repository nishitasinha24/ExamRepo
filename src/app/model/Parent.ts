export class Parent {
    reg_No: number;
    gender: string;
    maleParName: string;
    femaleParName: string;
    maleParAge: number;
    femaleParAge: number;
    compositeAge: number;
    mOccupation: string;
    fOccupation: string;
    email:string;
    // mIncome :
    // fIncome :
    numOfChildren
    address: string;
    city: string;
    district: string;
    state: string;
    pinCode: string;
    adharNumber: string;
    mobileNumber: string;
    maritalStatus: string;
    // reg_date: 
   numOfchildrenParentHave:string;
    // // email
    constructor(parentResponse : any)
    {
      this.reg_No= parentResponse.reg_No;
      this.maleParName= parentResponse.maleParName;
     this.maleParAge= parentResponse.maleParAge;
      this.femaleParName= parentResponse.femaleParName;
      this.femaleParAge= parentResponse.femaleParAge;
      this.email= parentResponse.email;
      this.adharNumber= parentResponse.adharNumber;
      this.address= parentResponse.address;
      this.mobileNumber= parentResponse.mobileNumber;
      this.numOfchildrenParentHave= parentResponse.numOfchildrenParentHave;
      

    }
  }