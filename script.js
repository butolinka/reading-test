const btnGo=document.querySelector('.btnGo');
let timerID;
    let myMinutes=0;
    let mySeconds=0;


btnGo.addEventListener('click', startTimer);
function startTimer(){
    const reading=document.querySelector('.reading');
    reading.style.display='block';
    const heading=document.querySelector('.heading');
    heading.style.display='none';
    mySeconds++;
    if (mySeconds<10){
        mySeconds="0"+mySeconds;
    }
    if(mySeconds>59){
        mySeconds=0;
        myMinutes++;
    }


    timerID=setTimeout(startTimer, 1000);

    const result=document.querySelector('.result');
    result.textContent=`${myMinutes}`+":"+`${mySeconds}`;
    const btnRead=document.querySelector('.btnRead');
    btnRead.addEventListener('click', stopTimer );
    function stopTimer(){
        clearTimeout(timerID);
        const reading=document.querySelector('.reading');
    reading.style.display='none';
    const questions=document.querySelector('.questions');
    questions.style.display='block';
    }
    const testRes=document.querySelector('.ResTest');
    const btnQuiz=document.querySelector('.btnQuiz');
    btnQuiz.addEventListener('click',quiz);
 
    function quiz(e){
        e.preventDefault(); 
        const questions=document.querySelector('.questions');
        questions.style.display='none';
        const results=document.querySelector('.results');
        results.style.display='block';
        let points=0;
        if (document.querySelector('#answerOne').checked){
        points++;
    }
        if (document.querySelector('#answerTwo').checked){
        points++;
    }
        if (document.querySelector('#answerThree').checked){
        points++;
    }
        if (document.querySelector('#answerFour').checked){
        points++;
    }
        if (document.querySelector('#answerFive').checked){
        points++;
    }
        if (document.querySelector('#answerSix').checked){
        points++;
    }
        if (document.querySelector('#answerSeven').checked){
        points++;
    }
        if (document.querySelector('#answerEight').checked){
        points++;
    }
        if (document.querySelector('#answerNine').checked){
        points++;
    }
        if (document.querySelector('#answerTen').checked){
        points++;
    }
        testRes.textContent=points;
        
        const textLenght=Number(2473);
        const timeAmount=Number((myMinutes*60)+mySeconds);
        const koeffecient=document.querySelector('.comprehension');
        koeffecient.textContent=Number(points*10)+'%';
        const speed=document.querySelector('.speed');
        speed.textContent=Math.round(textLenght/(timeAmount/60))+" знаков в минуту";
    }
}    
const reloadThePage=document.querySelector('.startOver');

reloadThePage.addEventListener('click',()=>{
    location.reload()
})