import React, {useState} from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function FrontPage() {

    const [users, setUsers] = useState([
        {
            profilePicture: 'https://static.notr.dk/profilbilleder/Fsu9Hyvv.jpg',
            username: 'Johan',
            karma: '223',
            followers: ['Max']
        }
    ]);

    function save(event) {
        console.log(event);
        console.log(users);
    }


    return (
        <>
            <div className="flex flex-1 flex-row pb-3">
                <div className="flex-1 flex-col border-r-1 border-lightgray-400">
                    <div className="flex-1 font text-sm">
                        <TrendingUpIcon className="mr-1.5" />
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
                        <TrendingUpIcon className="mr-1.5" />
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
