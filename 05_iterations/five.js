const coading = ["js", "rubby", "java", "python", "cpp"]

/*coading.forEach( function (val){
    console.log(val);
    
})*/

/*coading.forEach( (item) => {
    console.log(item);
    
}
)*/

/*coading.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})*/

const myCoading = [
    {
        languagaName: "javaScript",
        languageFileName: "js"
    },
    {
        languagaName: "java",
        languageFileName: "java"
    },
    {
        languagaName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach((item => {
    console.log(item.languagaName);
    
}))
