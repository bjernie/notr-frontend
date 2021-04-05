import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function NotePage() {

    const [note, setNote] = useState({
        title: 'matetik prøve',
        description: 'mom gay',
        views: 23,
        tags: ['dansk', 'engelsk'],
        file: 'fsdfsdf',
        created: '12/6/2020',
        saved: true
    })

    function save(event) {
        console.log(event);
        setNote({
            ...note,
            ['saved']: event.target.value
        });
        console.log(note);
    }

    return (
        <>
            <div className="flex flex-1 flex-row border-b-1 border-gray-400 pb-2">
                <div className="flex flex-1 items-center">
                    <IconButton aria-label="save note" onClick={save} name="saved">
                        {note.saved ? (<BookmarkIcon />) : (<BookmarkBorderIcon />)}
                    </IconButton>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <Button color="primary" variant="contained" startIcon={<GetAppIcon />} aria-label="download note">
                        Download
                    </Button>
                </div>
            </div>
            <div className="flex flex-1 flex">

            </div>
        </>
    );
}
