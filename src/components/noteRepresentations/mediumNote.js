import React, {useEffect, useState} from "react";


export default function ArticlePanel({article}) {

    return (
        <div className="flex-1 flex-row">
            <div>{article.title}</div>
            <div>{article.saves}</div>
            <div>{article.description}</div>
            <img src={article.preview}/>
        </div>
    );
}
