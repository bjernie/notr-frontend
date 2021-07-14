import React, {useEffect, useState} from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {apiUrl} from "./_app";

export default function FrontPage() {

    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followFrontpageNotes, setFollowFrontpageNotes] = useState([]);
    const [weekFrontpageNotes, setWeekFrontpageNotes] = useState([]);
    const [isLoggedIn] = useState(true);

    useEffect(() => {
        async function getNotes() {
            const noteUrl = `${apiUrl}/getNotes`;
            const userUrl = `${apiUrl}/getUsers`;
            fetch(userUrl, {
                method: 'POST',
                body: {
                    sort: 'suggestedUsers',
                    usr: {id:417389471894}
                }
            }).then(data => {
                setSuggestedUsers([data.json()]);
            });
            fetch(noteUrl, {
                method: 'POST',
                body: {
                    sort: 'weekTop',
                    usr: {id:417389471894}
                }
            }).then(data => {
                setWeekFrontpageNotes([data.json()]);
            });
            fetch(noteUrl, {
                method: 'POST',
                body: {
                    sort: 'followTop',
                    usr: {id:417389471894}
                }
            }).then(data => {
                setFollowFrontpageNotes([data.json()]);
            });
        }

        getNotes();
    }, []);

    function save(event) {
        console.log(event);
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
                    {suggestedUsers.map(name =>
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
