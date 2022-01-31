(function()
{
var cardFactory = new CardFactory();
var resource;
var DOM=new DoM();
ajax({
    method:"get",
    url:"data/default.card.json",
    success:function (res){
        cardFactory.setCardData(JSON.parse(res));
    cardFactory.GenerateCards();
    }
})
ajax({
    method:"get",
    url:"resource/translate/config.json",
    success:function (res){
        console.log(res)
        
        resource = new Resource(JSON.parse(res));
    }
})
document.getElementById("ten").addEventListener("click",function ()
{
    document.getElementById("table").innerHTML=DOM.generateList(cardFactory.getNewRandomCard(10),document.getElementById("table").innerHTML,resource,"zh_CN")
    
});
})()