/*
mathpix 에 있는 것을 받아옴
한 등식에 있는 
x = 1
문자 길이가 하나이고, 우측식이 숫자 이면, let val1 = 1 과 같이 추가.
x=1
x+1 =?
x => string 'x' 많은 경우에 변수
let val1 ;
x+1 = 1+1
let eqleft = val1  + 1;
let eqright = 2
if(eqleft === eqright){
}
x+y+1 = 1 + y + 1
y = 2
let val1 = 1
let val2 = 2
if
*/
//findError("x=3,x+x+1=3+3+1,x+x+1=5+1,x+x+1=7");
//lim_(x rarr3)((x^(2)+9)/(x-3)) : mathpixText라고 가정.
module.exports = function findError(mathpixText) {
  let before = mathpixText.slice();
  console.log(before);
  let temp1Equation = before.replace(/x/g, "val1");
  let temp2Equation = temp1Equation.replace(/=/g, "===");
  let temp3Equation = temp2Equation.replace(/?/g, "7");
  console.log(temp3Equation);
  let equation = temp3Equation.split(",");
  console.log(equation);
  let val1temp = equation[0].replace(/val1/, "");
  let val1 = Number(val1temp.replace(/===/, ""));
  console.log(val1);
  let getIndex = function(equation) {
    for (let i = 0; i < equation.length; i++) {
      let e = eval(equation[i]);
      console.log(e);
      if (e === false) {
        console.log(equation[i]);
        return i;
      }
    }
  };
  let incorretIndex = getIndex(equation); //여기에 어떤 배열 인덱스에서 오류가 났는지 알려줌.
  return incorretIndex;
  //먼저 변수를 찾아야함.
  //문자열만 골라내기
  /* 
        let alphabet = before.replace(/[0-9\[\]\(\)\+\-\*\/\=\,]/g,"")
    g
        let alpahbetLetters = {};
        for(let i = 0 ; i<alphabet.length ; i++){
            if(alphabet[i])
            if(!alpahbetLetters[alphabet[i]]){
                alpahbetLetters[alphabet[i]] = 1;
            }else{
                alpahbetLetters[alphabet[i]]++;
            }
        }
        console.log(alpahbetLetters) */
  //let equations = before.split(']')
  //console.log("equation",equations);
  //맨첫번째에 변수가 선언된다는 전제
  //let val1 = Number(Object.keys(alpahbetLetters)[0])
  /*         console.log("val1=",val1)
        let newEquations = [];
        let newGetRIDBracket=[];
        let newGetRidcomma=[];
        let equalToComequal=[]
        let resultEquations =[];
        //식에서 특수문자 제거
        for(let i = 0 ; i<equations.length; i++ ){
            newEquations[i]=equations[i].replace("Object.keys(alpahbetLetters)[0]", "val1")     
            newGetRIDBracket[i] = newEquations[i].replace(/[\[\]]/,"");
            newGetRidcomma[i]=newGetRIDBracket[i].replace(/\,/g,"")       
            equalToComequal[i]=newGetRidcomma[i].replace("=","===")
            resultEquations[i] = equalToComequal[i]
        } */
  /* 
        console.log(resultEquations)
        //좌변에 식이 없으면 이전식을 넣어주기.
        let startVal = '';
        for(let i =0 ; i<resultEquations.length; i++){
            //이미 변수 let val1 = 3 이 선언 되어있음.
            //이거는 좌변추출을 위함
            if(resultEquations[i][0]=== "="){
                let left = resultEquations[i-1];
                let leftRight =[];
                leftRight = left.split("===");
                startVal=leftRight[0]
                return
            }
        }
        for(let i = 0 ; i <resultEquations.length; i++){
            if(resultEquations[i][0] === "="){
                let temp = resultEquations[i];
                console.log(resultEquations[i]) 
            }
        }
        //이제 식에서 false가 난 곳을 찾자
 */
};
