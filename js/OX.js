var question=["進去北投文物館時需要脫鞋子，並且購買襪子",
            "北投文物館是一個擁有三層的日式建築","二戰時，佳山旅館曾為「神風特攻隊」出任務前，與愛人訣別的場所",
            "北投文物館的展覽都是常設展，為的是不讓參觀民眾把注意力放錯位置","北投文物館二樓是一個大廣間，是因為當年大家就很熱愛日本，想學習日本人",
            "北投文物館前身曾經是一間溫泉旅館","北投文物館的建築樣式為「書院造」形式，是16-17世紀武士階級的標準住宅",
            "北投文物館被台北市政府列為市定古蹟"];
var index=0,point=0.0;
var p=0,k=0;

var answer=[0,0,1,0,0,1,1,1];
function clickO(selection){
    switch(p){
        case 0:
            document.getElementById("question").innerText=question[index];
            p=1;
            break;
        case 1:
            if(index==2||index==5||index==6||index==7){
                point+=12.5;
                document.getElementById('point').innerText=parseInt(point);
            }else{
                alert('這題是Ｘ喔！');
            }
            index++;
            console.log(index);
            if(index<=7){
                document.getElementById("question").innerText=question[index];
                
            }else{
                document.getElementById("question").innerText="測驗結束嘍，想再測一次可以按Ｏ";
                k=1;
                p=2;
            }
            
            
            break;
        case 2:
                p=0;
                k=0;
                index=0;
                point=0;
                document.getElementById('point').innerText=point;
                document.getElementById("question").innerText="重新測驗 確定請按Ｏ";
    }
}
function clickX(selection){
    switch(k){
        case 0:
                document.getElementById("question").innerText=question[index];
                if(index==0||index==1||index==3||index==4){
                    point+=12.5;
                    document.getElementById('point').innerText=parseInt(point);
                }else{
                    alert('這題是Ｏ喔！');
                }
                index++;
                console.log(index);
                
                if(index<=7){
                    document.getElementById("question").innerText=question[index];
                }else{
                    document.getElementById("question").innerText="測驗結束嘍，想再測一次可以按Ｏ";
                    k=1;
                    p=2;
                }
                break;
        
    }
}