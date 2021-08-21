import React from 'react';
import clsx from 'clsx'
import scss from './circle.module.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// This is the Circle element on the Cards, it changes it's icon, and styling, based on the passed in properties
// The policyId is used for testing, so the element can be grabbed and checked.

const Card = ({active,policyId}:{active:boolean, policyId:string}) => {

    return (
      <div data-testid={`circle_${policyId}`} className={clsx(scss.circle, [active && scss.active])}>
        {active ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </div>
    );
}

export default Card;