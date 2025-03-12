import React, { useState } from "react";

const articles = [
   { title: "Football Yesterday", content: "Barcelona defeated Benfica 3-1 in a big performance from the Spanish side." },
   { title: "Football Yesterday", content: "Inter defeated Feynord 2-0 in a big performance from the Italian side." },
];

const Search = () => {
    const [searchItem, setSearchItem] = useState("");

    const highlightText = (text) => {
        if (!searchItem) return text;
        const regex = new RegExp(`(${searchItem})`, "gi");
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === searchItem.toLowerCase() ? (
                <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span>
            ) : (
                part
            )
        );
    };

    const filteredArticles = articles.filter(
        (article) =>
            article.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            article.content.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <div>
                {filteredArticles.length === 0 ? (
                    <p>No articles found</p>
                ) : (
                    filteredArticles.map((article, index) => (
                        <div key={index}>
                            <h2>{highlightText(article.title)}</h2>
                            <p>{highlightText(article.content)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Search;
