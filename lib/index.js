exports.cardValidator = card =>{
    let total = 0;
  
    if( card.length > 16 || card[0] === 0 ){
        return false;
    } else {
        let arr = Array(); 
        for( let count in card ){
            if( count % 2 === 0 ){
                let dig = card[count] * 2;      
                if( dig > 9 ){
                    let digFirst = dig.toString().substr( 0,1 );
                    let digSecond = dig.toString().substr( 1,1 );
                    arr[count] = parseInt(digFirst)+parseInt( digSecond );
                } else {
                    arr[ count ] = parseInt( dig );
                }             
                total += parseInt( arr[ count ] );
            } else {
                arr[count] =parseInt( card[ count ] );
                total += parseInt(arr[ count ]);
            } 
        }
    }
      
    if( total % 10 === 0 ) return true;	
    else return false;
    
};