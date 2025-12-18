 enum TierEmp{
    SDE1,
    SDE2,
    SDE3,
    Principal,
    President,
    Director
}
class EmployeeDetails implements employee{
    public Id?: string;
    public Name?: string;
    public Position?: string;
    public Salary?: number;
    public LevelTier?: TierEmp;
    public constructor() {
        this.Id = "21MCM015";
        this.Name = "kaveen";
    }
    public GetEmloyeeDetails() : void {
        console.log("===================== Employee Details - Start ================");
        console.log("Id : "+ this.Id);
        console.log("Name : "+ this.Name);
        console.log("Position : "+ this.Position);
        console.log("Salary : "+ this.Salary);
        // console.log("Level Tier : "+ Number(this.LevelTier));
        console.log("Level Tier : "+ this.LevelTier);

        console.log("===================== Employee Details - End ================");
    }
}
var employee = new EmployeeDetails();
employee.Name = "kaveenkumar";
employee.Position = "CA Auditor";
employee.Salary = 111100;
employee.LevelTier = TierEmp.SDE2;
employee.GetEmloyeeDetails();
interface employee{
    Id?: string,
    Name?: string,
    // Position?: string,
    // Salary?: number,
    // LevelTier?: TierEmp

}
