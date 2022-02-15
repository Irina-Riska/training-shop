import React from 'react';
import OCardProduct from '../../molecule/MCardProduct/MCardProduct';

import './OCardList.css';
import { dataWomen } from '../../../data/dataWomen';


const OCardList = () => {


    return (
        <div>
            <div>
                <div>
                    logo women
                    <div>NEW ARRIVALS SPECIALS BESTSELLERS...</div>
                </div>
                {dataWomen.map((el, id) =>
                    <OCardProduct
                        key={id}
                        img={el.imgUrl}
                        description={el.title}
                        priceChild={el.price}
                        rateChild={el.rate}
                    />
                )}
            </div>
            <div>
                for men map
            </div>
            <div>
                for accessors map
            </div>
        </div>
    )
}


export default OCardList;
