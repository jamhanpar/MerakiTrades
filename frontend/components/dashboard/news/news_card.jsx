import React from 'react';

const NewsCard = ({ news }) => {
    const newsImage = news.image === undefined ? window.newsFiller : news.image

    return (
        <a href={news.url}>
            <div className="news-card">
                <div className="news-card-outline">
                    <div className="news-info-list">
                        <div className="news-card-source">{news.source}</div>
                        <div className="news-card-headline">{news.headline}</div>
                        <div className="news-card-related-symbols">{news.related}</div>
                    </div>
                    <div className="news-image-container">
                        <img className="source-menu-icon" src={window.newsDots} />
                        <div className="news-card-image">
                            <img className="news-image" src={newsImage} />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NewsCard;