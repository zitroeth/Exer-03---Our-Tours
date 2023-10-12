import { useState } from 'react'

export default function Tour({ singleTour , onInterested , refreshBool, refreshDone}){
    const [showMore, setShowMore] = useState(false);
    const [visible, setVisible] = useState(true);

    function handleReadClick(){
        setShowMore(!showMore);
    }

    if(refreshBool){
        setVisible(true);
        refreshDone;
    }

    if(visible){
        return (
            <article className="single-tour">
                <img src={singleTour.image} alt={singleTour.title} className="img"/>
                <span className="tour-price">{singleTour.price}</span>
                <div className='tour-info'>
                    <h5>{singleTour.title}</h5>
                    <p>
                        {(showMore) ? (singleTour.description) : (singleTour.description.slice(0,200))+'...' }
                        <button className="info-btn" onClick={handleReadClick}>
                            {(showMore) ? "Show Less" : "Read More"}
                        </button>
                    </p>
                    <button className='delete-btn btn-block btn' onClick={()=>{onInterested(); setVisible(false);}}>Not Interested</button>
                </div>
            </article>
        );
    }else{
        return;
    }
}