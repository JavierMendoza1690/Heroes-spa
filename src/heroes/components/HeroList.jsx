import React, { useMemo } from 'react'
import { getHeroesByPubliser } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=>(
      getHeroesByPubliser( publisher)),[publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
    {
        heroes.map((item)=>(
              <HeroCard  
                key={item.id}
                {...item}
              />

        ))
      }   
        
    </div>
  )
}
