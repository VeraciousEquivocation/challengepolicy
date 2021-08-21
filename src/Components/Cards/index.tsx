import React, {useContext} from 'react';
import {GlobalContext} from '../../Context/GlobalContext'
import Card from './Card'

// This takes the policy array from GlobalContext and uses it to map out the policies into individual cards

const Cards = () => {
    const {policyList} = useContext(GlobalContext)

    if(!policyList || policyList.length <= 0) return null

    return (
      <>
        {policyList.map(policy => {
          return <Card key={policy.id} policy={policy} />
        })}
      </>
    );
}

export default Cards;
