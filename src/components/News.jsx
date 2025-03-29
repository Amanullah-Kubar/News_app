import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import './News.css';


export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    static defaultProps = {
        country: 'us',
        category: 'entertainment'
    }
    static propTypes = {
        name: PropTypes.string,
        category: PropTypes.string,
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2cbc26445194709a76f60d50899f957`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.articles.map((element) => {
                    return (
                        <NewsItem
                            key={element.url}
                            title={element.title}
                            imageurl={element.urlToImage}
                            discription={element.description}
                            url={element.url}
                            author={element.author}
                            datePublished={element.publishedAt}
                        />
                    );
                })}
            </div>
        );
    }
}

export default News;
