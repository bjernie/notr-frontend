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
import {apiUrl} from '../../index';

export default function NotePage() {

    const noteId = 'abcdefgh';
    const [tabIndex, setTabIndex] = useState(0);
    const [note, setNote] = useState({
        title: 'Tv-seriers plads i det kulturelle landskab\n',
        description: 'Opgavebeskrivelse: Skriv en debatterende artikel, hvor du med udgangspunkt i konkrete eksempler undersøger og diskuterer tv-seriens plads i det kulturelle landskab, og hvor du forsøger at overbevise din læser om dine egne synspunkter på tv-seriens potentialer og udfordringer som genre. Meh den blev vel ok?',
        views: 23,
        tags: ['dansk', 'engelsk'],
        file: '6ukGe13m',
        created: 'Dec 3, 2020',
        saved: true
    });

    useEffect(() => {
        async function getNote() {
            const url = `${apiUrl}/note/${noteId}`;
            console.log(url);
            const note = await (await fetch(url)).json()
            console.log(note);
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
            <div className="flex flex-1 flex-row border-b-1 border-gray-400 pb-2">
                <div className="flex flex-1 items-center">
                    <IconButton aria-label="save note" onClick={save}>
                        {note.saved ? (<BookmarkIcon/>) : (<BookmarkBorderIcon/>)}
                    </IconButton>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <Button color="primary" variant="contained" startIcon={<GetAppIcon/>} aria-label="download note">
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
                <img src={testpb} alt="profile" className="rounded-full w-7 h-7 mr-3"/>
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
                <Tabs value={tabIndex} indicatorColor="primary" onChange={(e, newValue) => {
                    setTabIndex(newValue)
                }}>
                    <Tab label="Artikel" />
                    <Tab label="PDF" />
                </Tabs>
                <div className="flex justify-center md:block">
                    <ArticlePanel value={tabIndex}
                                  index={0}
                                  variant="fullWidth"
                                  link={'https://static.notr.dk/desktop-html/' + note.file + '.html'} />
                    <PDFPanel value={tabIndex} index={1} link={'https://static.notr.dk/pdf/' + note.file + '.pdf'} title={note.title} />
                </div>
            </div>
        </>
    );
}

function ArticlePanel({link, value, index}) {

    const [article, setArticle] = useState('');

    function resizeArticle(articleText) {
        const elem = document.createElement('div');
        elem.innerHTML = articleText;
        const paragraphs = elem.getElementsByTagName('p');
        for (const paragraph of paragraphs) {
            paragraph.style.left = '0';
        }
        setArticle(elem.outerHTML);
    }

    useEffect(() => {
        async function getArticle() {
            const articleText = await (await fetch(link)).text();
            await setArticle(articleText);
            resizeArticle(articleText)
        }
        getArticle();
    }, [link]);

    return (
        <div className="max-w-xl">
            {value === index && (
                <div dangerouslySetInnerHTML={{__html: article}}/>
            )}
        </div>
    );
}

function PDFPanel({link, value, index, title}) {
    return (
        <>
            {value === index && (
                <div>
                    {index === 1 && (
                        <div className="visible md:invisible text-gray-500 text-center mt-2">
                           PDF kan ikke vises på mobil, download den i stedet
                        </div>
                    )}
                    <div>
                        <object data={link} type="application/pdf" className="w-screen md:w-full h-screen">
                            {title}
                        </object>
                    </div>
                </div>
            )}
        </>
    );
}
