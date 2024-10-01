import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return(
    <div className="bg-slate-800">
        <div className="container p-2 mx-auto">
            <nav className='py-5'>
                <div className="text-3xl text-white">
                    urlShortner 
                </div>

            </nav>

        </div>
    </div>
  ) ;
};

export default Header;
