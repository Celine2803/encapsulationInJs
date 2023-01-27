// a mechanism i=of restricting direct access to some of object's compnents

class Person{
    setEmpDetails(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id
    }
    getEmpName(){
        return this.name;
    }
    getEmpAge(){
        return this.age;
    }
    getEmpId(){
        return this.id;
    }
}

let emp1=new Person();
emp1.setEmpDetails("Celine",22,123);
console.log(emp1.getEmpAge());
