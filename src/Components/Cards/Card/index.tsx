import React, {useState} from 'react';
import scss from './card.module.scss'
import clsx from 'clsx'
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Circle from './Circle'
import { format } from 'date-fns'
import {PolicySchematic} from '../../../Interfaces/Schematic'

// This is the primary Component for this challenge. The Card.
// It verifies the data passed to it via the PolicySchematic ( Interface )
// And it Renders out the Card as the design specified

const Card = ({policy}:{policy:PolicySchematic}) => {
  const [active, setactive] = useState<boolean>(false)
  
  let strBuilder = `XXXX-XXXX-INS | ${policy.description}`
  const mobile = useMediaQuery('(max-width:699px)');
  const tablet = useMediaQuery('(min-width:700px) and (max-width:959px)');
  const desktop = useMediaQuery('(min-width:960px)');

  const handleClick = () => {
    setactive(oldVal => !oldVal)
  }
  
  return (
    <>
      <Paper data-testid={`card_${policy.id}`} onClick={handleClick} elevation={active ? 6:0} className={scss.root}>
        <div className={clsx(scss.rows,[(tablet || mobile) && scss.fullWidth])}>
          <div className={scss.top}>
            {!mobile && <Circle active={active} policyId={policy.id} />}
            <div>
              <div className={clsx(scss.title,'tk-brandon-grotesque')}>{policy.title}</div>
              <div className={clsx(scss.subtitle,'tk-bitter')}>{strBuilder}</div>
            </div>
            {tablet && 
              <div className={scss.logoTablet}>
                <img alt={'logo'} src={policy.partner.logo} />
              </div>
            }
          </div>
          <div className={scss.bot}>
            {!mobile &&
              <div className={scss.section}>
                <div className={clsx('tk-brandon-grotesque',scss.date)}>{format(new Date(policy.payment_date),'dd-MMM-yyyy')}</div>
                <div className={clsx('tk-bitter',scss.dateTitle)}>Payment Date</div>
              </div>
            }
            <div className={clsx(scss.section,scss.minW,[mobile && scss.mobile])}>
              <div className={clsx('tk-brandon-grotesque',scss.date)}>
                {`${format(new Date(policy.coverage_start_date),'dd-MMM-yyyy')} ${policy.coverage_end_date !== null ? ('to '+format(new Date(policy.coverage_end_date),'dd-MMM-yyyy')): ''}`}
              </div>
              <div className={scss.statusRow}>
                <div className={clsx('tk-bitter',scss.dateTitle)}>
                  {policy.type === 'parcel' ? 'Date shipped' : 'Coverage Dates'}
                </div>
                <div className={clsx(scss.status,[policy.status === 'expired' ? scss.red : scss.green])}>{policy.status}<div className={scss.circle} /></div>
              </div>
            </div>
            {!mobile &&
              <div className={scss.section}>
                <div className={clsx('tk-brandon-grotesque',scss.date)}>{policy.premium_formatted}</div>
                <div className={clsx('tk-bitter',scss.dateTitle)}>Price/Premium</div>
              </div>
            }
            {(policy.renewal !== null && !mobile) &&
            <div className={scss.section}> 
              <div className={clsx('tk-brandon-grotesque',scss.date)}>{policy.renewal.charAt(0).toUpperCase() + policy.renewal.slice(1)}</div>
              <div className={clsx('tk-bitter',scss.dateTitle)}>Renewal</div>
            </div>
            }
            {mobile && 
              <div className={scss.logoMobile}>
                <img alt={'logo'} src={policy.partner.logo} />
              </div>
            }
          </div>
        </div>
        {desktop && 
          <div className={scss.logo}>
            <img alt={'logo'} src={policy.partner.logo} />
          </div>
        }
      </Paper>
    </>
  );
}

export default Card;