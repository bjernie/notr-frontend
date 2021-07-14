import React, {useState} from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function FrontPage() {

    const [suggestedUsers, setUsers] = useState([
        {
            profilePicture: 'https://static.notr.dk/profilbilleder/Fsu9Hyvv.jpg',
            username: 'Johan',
            karma: '223',
            followers: ['Max']
        }
    ]);

    const [followFrontpageNotes] = useState([]);
    const [weekFrontpageNotes] = useState([]);


    const [isLoggedIn] = useState(true);

    function save(event) {
        console.log(event);
        console.log(users);
    }

    return (
        <>
            <div className="flex flex-1 flex-row pb-3">
                {isLoggedIn && (
                    <div className="flex-1 flex-col border-lightgray-400">
                        <div className="flex-1 font text-sm">
                            NYT FRA DEM DU FØLGER
                        </div>

                        <div>

                        </div>
                    </div>
                )}
                <div className="flex-1 pl-8 border-r-1 border-lightgray-400 text-sm">
                    <TrendingUpIcon className="mr-1.5"/>
                    TOP I DENNE UGE
                </div>

                <div className="flex-1 flex-col pl-8">
                    <div className="flex-1 text-sm">
                        <TrendingUpIcon className="mr-1.5"/>
                        TOP BRUGERE
                    </div>
                    {users.map(name =>
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
