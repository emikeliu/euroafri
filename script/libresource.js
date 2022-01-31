function Resource(translate)
{

    this.getTranslate=function(origin,language)    {
        if(typeof(translate[language])!=="undefined")
        return (typeof translate[language][origin])==="undefined"?origin:translate[language][origin];
    }
    return this;
}