const jsonfile=require('jsonfile');
const moment=require('moment');
const git=require('simple-git');

const FILE_PATH='./data/data.json';

let DATE=moment().subtract(20,'d').format()
let data={
    date:DATE
}
jsonfile.writeFile(FILE_PATH,data,()=>{
    
        git().add([FILE_PATH]).commit(DATE,{'--date': "2024-01-02T21:26:17+05:00"}).push();
    
});


let makeCommit=(n)=>{
    if(n===0){
        return git.push();
    }


    
}


makeCommit();