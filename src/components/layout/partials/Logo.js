import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import Header2 from '../Header2';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div>
      <div
        {...props}
        className={classes}
      
      >
        <h1 className="m-0" style={{paddingTop:"120px"}}>
      
          <Link to="/" style={{display:"flex",flexDirection:"row",width:"90vw",justifyContent:"center"}}>
            <Image
              src={require('./../../../assets/images/iitkgplogo-r.png')}
              alt="Open"
              width={"100"}
               />
              &nbsp;
              <h4 style={{fontSize:"3vw",color:"red"}}>Rural Technology Action Group<br/><span style={{fontSize:"2vw",color:"white"}}>Indian Institute of Technology, Kharagpur</span></h4>
          </Link>
        </h1>
      </div>
      
    </div>
    
  );
}

export default Logo;