function anagrams(str)
{
    //var result=[]
    if (!str)
    {
        return [];
    }
    //result.push(str);
    //return result;
    if(str.length===1)
    {
        return [str]
    }
    if(str.length===2)
    {
        return [str[0]+str[1],str[1]+str[0]]
    }
    var result=[];
    for(var i=0;i<str.length;i++)
    {
        for (var j=0;j<str.length-1;j++)
        {
            result.push(str[i]+anagrams(drop(str,i))[j])
        }
        //result.push(str[i]+anagrams(drop(str,i))[0])
        //result.push(str[i]+anagrams(drop(str,i))[1])
    }
    return result;
}
function drop(str,n)
{
    var result="";
    for(var i=0;i<str.length;i++)
    {
        if(i===n)
            continue;
        result=result+str[i];
    }
    return result;
}
module.exports = anagrams