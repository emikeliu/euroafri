function DoM()
{
    this.generateList=function(listData,currentTable,resource,language){
        //console.log(currentTable)
        if(currentTable=="")var ret="<table>";
        else ret=currentTable;
        ret=ret.replace("</tbody></table>","");
        ret+="<tr>";
        for(var i in listData)
        {
            ret+="<td><span>"+resource.getTranslate(listData[i]["name"],language)+"</span><br><img class=\"image\" src=\"resource\\pic\\"+listData[i]["face"]+"\" /><br>"+"<span>"+resource.getTranslate("level",language)+": </span><span>"+resource.getTranslate(listData[i]["level"],language)+"</span></td>";        
        }
        ret+="</tr>"
        ret+="</table>";
        return ret;
    }
    return this;
}