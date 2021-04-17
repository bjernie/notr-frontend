import React, {useEffect, useState} from "react";

export default function ArticlePanel({fileName, value, index}) {

    const [article, setArticle] = useState('');

    function resizeArticle(articleText) {
        /* const elem = document.createElement('div');
         elem.innerHTML = articleText;
         const paragraphs = elem.getElementsByTagName('p');
         for (const paragraph of paragraphs) {
             paragraph.style.left = '85pt';
         }
         setArticle(elem.outerHTML);*/
        setArticle(articleText)
    }

    useEffect(() => {
        async function getArticle() {
            const link = `https://static.notr.dk/desktop-html/${fileName}.html`;
            const articleText = await (await fetch(link)).text();
            await setArticle(articleText);
            resizeArticle(articleText)
        }

        getArticle();
    }, [fileName]);

    return (
        <div>
            {value === index && (
                <div dangerouslySetInnerHTML={{__html: article}}/>
            )}
        </div>
    );
}
