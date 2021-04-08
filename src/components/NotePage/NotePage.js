import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import testpb from '../../assets/testpb.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HashtagIcon from "../../custom/HashtagIcon";
import {Link} from 'react-router-dom';
import {apiUrl} from '../../index';
import ArticlePanel from './ArticlePanel';
import PDFPanel from './PDFPanel';
import TagInput from "./TagInput";

export default function NotePage(props) {

    const noteId = props.match.params.id;
    const [tabIndex, setTabIndex] = useState(0);
    const [note, setNote] = useState({
        title: 'Tv-seriers plads i det kulturelle landskab\n',
        description: 'Opgavebeskrivelse: Skriv en debatterende artikel, hvor du med udgangspunkt i konkrete eksempler undersøger og diskuterer tv-seriens plads i det kulturelle landskab, og hvor du forsøger at overbevise din læser om dine egne synspunkter på tv-seriens potentialer og udfordringer som genre. Meh den blev vel ok?',
        views: 23,
        tags: ['dansk', 'engelsk'],
        file: '6ukGe13m',
        iso_date: '2020-04-12',
        user: {username: 'Bjørn Rivall Andersen', currentUser: true},
        saved: true
    });

    useEffect(() => {
        async function getNote() {
            const url = `${apiUrl}/note/${noteId}`;
            const resp = await fetch(url);
            const noteJSON = await resp.json();
            setNote(noteJSON);
        }
        //getNote();
    }, []);


    function convertDate() {
        if (note.iso_date) {
            const date = new Date(note.iso_date);
            const options = {year: 'numeric', month: 'short', day: 'numeric'}
            return date.toLocaleDateString(undefined, options);
        }

    }

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
                <div className="my-8">
                    {note.user.currentUser ? (
                        <TagInput inputTags={note.tags}/>
                    ) : (
                        <div className="flex flex-row">
                            {note.tags.map(tag => {
                                return (
                                    <div className="flex flex-row items-center mr-2" key={tag}>
                                        <HashtagIcon size={20} />
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                <div className="flex flex-1 flex-row items-center">
                    <img src={testpb} alt="profile" className="rounded-full w-7 h-7 mr-3" />
                    <div className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                        <Link to="/">{note.user?.username}</Link>
                    </div>
                    <div className="ml-2 text-gray-500 md:text-base text-sm">
                        {convertDate()}
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
