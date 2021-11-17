import React from 'react'
import CodeIcon from '@mui/icons-material/Code';

import './CompanyLogo.css';

const CompanyLogo = ({name, name2, flexDirection, iconShown, iconScale}) => {
  return (
    <>
      <div className="company-logo" style={{flexDirection: `${flexDirection}`}}>
        <CodeIcon className="company-logo-icon" style={{ display: `${iconShown}`, transform: `scale(${iconScale})`}} />
        <h1>{name}<sup className="company-name-2">{name2}</sup></h1>
      </div>
    </>
  )
}

export default CompanyLogo
