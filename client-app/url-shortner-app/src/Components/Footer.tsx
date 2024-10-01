import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='text-white bg-slate-900 text-base text-center py-5'>
        Copyright &#169; URLShortner | Wasif Ansari 

    </div>

  );
};

export default Footer;
