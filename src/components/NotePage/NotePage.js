import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import testpb from '../../assets/testpb.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Snackbar from '@material-ui/core/Snackbar'
import {Link} from 'react-router-dom';
import {apiUrl} from '../../index';
import ArticlePanel from './ArticlePanel';
import PDFPanel from './PDFPanel';

export default function NotePage(props) {

    const noteId = props.match.params.id;
    const [tabIndex, setTabIndex] = useState(0);
    const [note, setNote] = useState({});

    useEffect(() => {
        async function getNote() {
            const url = `${apiUrl}/note/${noteId}`;
            const resp = await fetch(url);
            const noteJSON = await resp.json();
            setNote(noteJSON);
        }
        getNote();
    }, []);


    function save() {
        setNote({
            ...note,
            saved: !note.saved
        });

    }

    return (
        <>
            <div className="max-w-screen-md mx-auto">
                <div className="flex flex-1 flex-row border-b-1 border-gray-400 pb-2">
                    <div className="flex flex-1 items-center">
                        <IconButton aria-label="save note" onClick={save}>
                            {note.saved ? (<BookmarkIcon />) : (<BookmarkBorderIcon />)}
                        </IconButton>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        <Button color="primary" variant="contained" startIcon={<GetAppIcon />} aria-label="download note">
                            Download
                        </Button>
                    </div>
                </div>
                <h1 className="text-3xl md:text-5xl mt-5 font-bold">
                    {note.title}
                </h1>
                <h3 className="text-xl text-gray-500 my-5">
                    {note.description}
                </h3>
                <div className="flex flex-1 flex-row items-center">
                    <img src={testpb} alt="profile" className="rounded-full w-7 h-7 mr-3" />
                    <div className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                        <Link to="/">{note.user?.username}</Link>
                    </div>
                    <div className="ml-2 text-gray-500 md:text-base text-sm">
                        {note.created}
                        <span className="mx-2">·</span>
                        {note.views} visninger
                    </div>
                </div>
                <div className="flex flex-1 flex-col mt-5">
                    <Tabs value={tabIndex} indicatorColor="primary" variant="fullWidth" onChange={(e, newValue) => {setTabIndex(newValue)}}>
                        <Tab label="Artikel" />
                        <Tab label="PDF" />
                    </Tabs>
                    <div className="flex justify-center md:block">
                        <ArticlePanel value={tabIndex} index={0} fileName={note.file} />
                        <PDFPanel value={tabIndex} index={1} fileName={note.file}/>
                    </div>
                </div>
            </div>
        </>
    );
}
