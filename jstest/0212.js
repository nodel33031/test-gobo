const getGender =function(){
    return this.gender;
};

const people1={
    gender:'female',
    getGender:getGender
};

const people2 ={
    gender:'male',
    getGender:getGender
};

console.log(people1.getGender());
console.log(people2.getGender());

///

var obj={

    func1:function(){
        console.log(this===obj);

        var func2=function(){
            console.log(this===obj);
        };

        func2();
    }
};

obj.func1();