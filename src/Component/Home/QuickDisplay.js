import React,{Component} from 'react';


const QuickDisplay = (props) => {
    const renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    
                        
                            <div className="items">
                               <img src={item.movie_image} alt={item.Name_movie} className="pic"/>
                               <div className="head">
                                   <center>
                                        <h2>{item.Name_movie}</h2>
                                    </center> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button">Brand</button>&nbsp;&nbsp;
                                    <button type="button">Freeshipping</button>&nbsp;&nbsp;
                                    <button type="button">15%off</button>&nbsp;&nbsp;
                               </div>
                               
                               <div className="rate">
                                    <center><p id="ate">2000/-</p></center>
                               </div>
                               <div className="last">
                                    <button type="button">ADD TO CART</button>
                                    <button type="button">MAKE OFFER</button>
                               </div>
                               <div className="">
                                
                               </div>
                            </div>
                        
                        
                    
                )
            })
        }
    }

    return(
        <>
            {renderMeal(props)}
        </>
    )

}
export default QuickDisplay;