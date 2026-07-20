// ข้อที่ 1.2
function grade(score){
    if(score <= 100 && score >=0){
        if(score>=50){
            return "pass";
        }else{
            return " not pass";
        }
    }else{
        return "infromation wrong";
    }
}
console.log("50",grade)

// ข้อที่ 2.1.1
let scores = [45, 78,82,35, 90];
for (let i = 0; i < scores.length; i++) {
    console.log("index :", i, "score :", scores[i]);
}

// ข้อที่ 2.1.2
// console.log ("before push")
let scores = [45, 78,82,35, 90];
for (let i = 0; i < scores.length; i++) {
    console.log("index :", i, "score :", scores[i]);
}
console.log("after push")
scores.push(68,48);
for (let i = 0; i < scores.length; i++) {
    console.log("index :", i, "score :", scores[i]);
}

// ข้อที่ 2.1.3
console.log("after pop")
scores.pop();
for (let i = 0; i < scores.length; i++) {
    console.log("index :", i, "score :", scores[i]);
}
// ข้อที่ 2.1.4
console.log("score 82 is in array :",scores.includes(82))

// ข้อที่ 2.1.5
scores.sort();
for (let i = 0; i < scores.length; i++) {
    console.log("index :", i, "score :", scores[i]);
}

// ข้อที่ 2.2.1
let students = [
    { id: 1, name: "Somchai", score: 48 },
    { id: 2, name: "Somsri", score: 75 },
    { id: 3, name: "Sompong", score: 32 },
    { id: 4, name: "Somnak", score: 85 }
];
students.forEach((i) =>{
    console.log("ชื่อนักศึกษา : ",i.name,"ได้คะแนน : ",i.score);
})

// ข้อที่ 2.2.2
console.log("คะแนนเดิม")
students.forEach((i) =>{
    console.log("ชื่อนักศึกษา : ",i.name,"ได้คะแนน : ",i.score);
})
console.log("คะแนนใหม่")
    let newScore = students.map((student) =>{
    student.score*=2
    return student
})
newScore.forEach((i) =>{
    console.log("ชื่อนักศึกษา : ",i.name,"ได้คะแนน : ",i.score);
})


// ข้อที่ 2.2.3
let pass =students.filter((student)=>{
    return student.score >= 50 ;
})
pass.forEach((i) =>{
    console.log("ชื่อนักศึกษา : ",i.name,"ได้คะแนน : ",i.score);
})

// ข้อที่ 2.2.4
let find = students.find((student)=>{
    return student.name==="Somsri"
})
console.log(find);

// ข้อที่ 3.1
function Getgrade(score) {

    if(score >=80){
        return "A";
    }else if(score >=60){
        return "B";
    }else{
        return "F"
    }

}
let grade = students.map((student)=>{
    student.score = Getgrade(student.score);
    return student
})

console.log(grade)

// ข้อที่ 3.2
function guess(){
    let guess = Number(prompt("เลขอะไร :"));
    let num = Math.round(Math.random(1,6));

    if(num===guess){
        console.log("ยินดีด้วย! คุณทายถูกต้อง เลขที่ออกคือ",num)
    }else{
        console.log("เสียใจด้วย! คุณทายผิด บอททอยลูกเต๋าได้เลข",num)
    }

}

guess()

