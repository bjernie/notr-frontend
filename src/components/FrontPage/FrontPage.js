import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function FrontPage() {

    const [brugere] = useState([
        {
            profilePicture: 'https://static.notr.dk/profilbilleder/Fsu9Hyvv.jpg',
            username: 'Johan',
            karma: '223',
            followers: ['Max']
        }
    ]);

    function save(event) {
        console.log(event);
        console.log(brugere);
    }


    return (
        <>
            <div className="flex flex-1 flex-row pb-3">
                <div className="flex-1 flex-col border-r-1 border-lightgray-400">
                    <div className="flex-1 font text-sm">
                        <TrendingUpIcon className="mr-1.5">
                        </TrendingUpIcon>
                        NYT FRA DEM DU FØLGER
                    </div>

                    <div>

                    </div>
                </div>

                <div className="flex-1 pl-8 border-r-1 border-lightgray-400">
                   ok2
                </div>

                <div className="flex-1 flex-col pl-8">
                    <div className="flex-1 text-sm">
                        <TrendingUpIcon className="mr-1.5">
                        </TrendingUpIcon>
                        TOP BRUGERE
                    </div>
                    {brugere.map(name =>
                    <div>

                    </div>

                    )}
                </div>
            </div>


            <div className="flex flex-1 flex-row border-b-1 border-gray-400 pb-2 absolute w-screen left-0">

            </div>
        </>
    );
}
