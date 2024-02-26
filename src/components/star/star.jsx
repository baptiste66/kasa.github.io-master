import React from 'react';
import starColor from '../../assets/starColor.png';
import starWhite from '../../assets/starWhite.png';
import '../../style/components/star.css'

export default function Star(props) {
    const star = props.star
    const range = [1, 2, 3, 4, 5];
    return (
        <div className='star'>
            {range.map((rangeElem, key) =>
                star >= rangeElem ? (
                    <img className='starColor' src={starColor} alt='étoile coloré' key={key} />
                ) : (
                    <img className='starWhite' src={starWhite} alt='étoile pas coloré' key={key} />
                )
            )}
        </div>

    );
}
