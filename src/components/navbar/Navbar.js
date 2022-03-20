import React from 'react';
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Navbar = () => {
    return (
        <div>
            <div className='nav'>

                <div
                 className='logoSection'>
                    
                    <div className='navLeftIcon'>
                        <AppsIcon/>
                    </div>
                    

                    <div className='navLeftIcon'>
                        <p>TODO</p>
                    </div>

                </div>

                <div className='searchBarSection'>
                    <div className='searchBarLogo'>
                        <SearchIcon/>
                    </div>
                    <div>
                        <input className='searchBar' type={"text"} />
                    </div>
                </div>

                <div className='profileSection'>
                    
                    <div className='navRightIcon'>
                        <SettingsOutlinedIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <QuestionMarkOutlinedIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <CampaignIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <AccountCircleOutlinedIcon/>               
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;