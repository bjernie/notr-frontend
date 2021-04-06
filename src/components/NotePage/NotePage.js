import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import testpb from '../../assets/testpb.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

export default function NotePage() {

    const [htmlArticle, setHtmlArticle] = useState(undefined);
    const [tabIndex, setTabIndex] = useState(0);
    const [note, setNote] = useState({
        title: 'Tv-seriers plads i det kulturelle landskab\n',
        description: 'Opgavebeskrivelse: Skriv en debatterende artikel, hvor du med udgangspunkt i konkrete eksempler undersøger og diskuterer tv-seriens plads i det kulturelle landskab, og hvor du forsøger at overbevise din læser om dine egne synspunkter på tv-seriens potentialer og udfordringer som genre. Meh den blev vel ok?',
        views: 23,
        tags: ['dansk', 'engelsk'],
        file: 'fsdfsdf',
        created: 'Dec 3, 2020',
        saved: true
    });

    useEffect(() => {
        getHTMLArticle();
    }, [])

    async function getHTMLArticle() {
        if (!htmlArticle) {
            const article = await (await fetch('https://static.notr.dk/desktop-html/6ukGe13m.html')).text();
            setHtmlArticle({__html: article});
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
                    <Link to="/">Bjørn rivall andersen</Link>
                </div>
                <div className="ml-2 text-gray-500 md:text-base text-sm">
                    {note.created}
                    <span className="mx-2">·</span>
                    {note.views} visninger
                </div>
            </div>
            <div className="flex flex-1 flex-col mt-5">
                <Tabs value={tabIndex} color="primary" onChange={(e, newValue) => {setTabIndex(newValue)}}>
                    <Tab label="Artikel" />
                    <Tab label="PDF" />
                </Tabs>
                <div className="flex justify-center md:block">
                    <ArticlePanel value={tabIndex} index={0} html={htmlArticle} />
                    <PDFPanel value={tabIndex} index={1}>
                        <object data="https://static.notr.dk/pdf/6ukGe13m.pdf" type="application/pdf" className="w-screen md:w-full h-screen">
                            {note.title}
                        </object>
                    </PDFPanel>
                </div>
            </div>
        </>
    );
}

function ArticlePanel({html, value, index}) {
    return (
        <>
            {value === index && (
                <div dangerouslySetInnerHTML={html} />
            )}
        </>
    );
}

function PDFPanel({children, value, index}) {
    return (
        <>
            {value === index && (
                <>
                    {index === 1 && (
                        <div className="visible md:invisible text-gray-500 text-center mt-2">
                            PDF kan ikke vises på mobil, download en i stedet
                        </div>
                    )}
                    {children}
                </>
            )}
        </>
    );
}
