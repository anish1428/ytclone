

export const value_converter=(e)=>{
    if(e>=1000000){
        return Math.floor(e/1000000)+"M";
    }
    else if(e<1000000 && e>=1000){
          return Math.floor(e/1000)+"k";
    }
    else{
        return e;
    }

}
