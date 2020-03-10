var questionp=["怎麼樣會抵達不了北投文物館?",
            "今天有23人一起去北投文物館玩，其中有3個學生及2個老人，其餘是大人，這樣最優惠的價格是多少呢?",
            "北投文物館有甚麼吃的?","二戰期間曾來與愛人訣別的那個出任務的隊伍是?","請問北投文物館是建造於?(其他三個也是發生大事的重要年唷!)"];
var choice=["在捷運北投站下車，去站前搭紅25公車",
            "在捷運北投站下車，去站前搭230公車",
            "在捷運新北投站下車，去光明派出所站搭230公車",
            "在捷運新北投站下車，去光明派出所搭紅25公車",
            "2410","1840","1750","1690",
            "義式料理","日式料理","美式料理","法式料理",
            "超人特攻隊","迷你特攻隊",
            "神風特攻隊","炸雞特攻隊",
            "1895","1921","1937","1945"];
var point=0,index=0,statusnow=0;
var answer=[4,4,2,3,2];
var selected=0;
var ii=['s1','s2','s3','s4'];
var i=0;
function selectnum(p){
    selected=p;
    console.log(selected);
}

function clickMe(){
    
    switch(statusnow){
        case 0:
            statusnow=1;
            document.getElementById('buttontext').innerText="繳交並前往下一題";
            document.getElementById('questiono').innerText=questionp[index];
            for(i=0;i<4;i++){
                document.getElementById(ii[i]).innerText=choice[4*index+i];
            }
            break;
        case 1:

            if(answer[index]==selected){
                point+=20;
                document.getElementById('num').innerText=point;
            }else{
                alert('錯了！');
            }
            index++;
            document.getElementById('questiono').innerText=questionp[index];
            for(i=0;i<4;i++){
                document.getElementById(ii[i]).innerText=choice[4*index+i];
            }

            break;
        case 2:
                if(answer[index]==selected){
                    point+=20;
                    document.getElementById('num').innerText=point;
                }else{
                    alert('錯了！');
                }
                alert('測驗結束 你的分數是 '+point+' 分！');
                document.getElementById('buttontext').innerText="重新測試？";
                
            break;
        case 3:
            point=0;
            index=0;
            statusnow=1;
            document.getElementById('num').innerText=point;
            document.getElementById('buttontext').innerText="繳交並前往下一題";
            document.getElementById('questiono').innerText=questionp[index];
            for(i=0;i<4;i++){
                document.getElementById(ii[i]).innerText=choice[4*index+i];
            }
            break;
    }
    if(index==4){
        
        if(statusnow==2){
            statusnow=3;
        }else{
            statusnow=2;
        }
        
    }
}

