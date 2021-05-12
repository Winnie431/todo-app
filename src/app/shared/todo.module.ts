export class Todo{
    // this is done because every property created must be i
    // initialisez and put in the constructor because 
    // we wish to have optional field and the completed proerty will not expect any  value
    constructor(
        // public id : number ,
         public text:string ,
     public completed:boolean =false
    ){ }
}