import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTwitter } from 'react-icons/fa';
import style from '../../styles/projects/quoteGenerator.module.css'



const QuoteGenerator = () => {

    //For Axios
    const [loaded, setLoaded] = useState(false); 
    const [quoteData, setQuoteData] = useState();

    //For the DOM
    const [author, setAuthor] = useState();
    const [quoteText, setQuoteText] = useState();

    //For those without authors
    const fakeAuthors = ["Kassidy Pham", "Jeffrey Do", "Hanabi Mcgee", "Unknown"] 



    // When hitting the twitter button
    function tweetQuote(){
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${author}`; 
        window.open(twitterUrl, '_blank')
    }

    //Assigns quote
    function newQuote(){
        // Pick a random quote from api quotes
        const quote = quoteData[Math.floor(Math.random() * quoteData.length)];

        if(!quote.author){
            setAuthor(fakeAuthors[Math.floor(Math.random() * fakeAuthors.length)]);
        }
        else{
            setAuthor(quote.author);
        }

        setQuoteText(quote.text)
    }

    
    //On load get api
    useEffect(() => {
        axios.get("https://type.fit/api/quotes")
        .then(response => {
            setQuoteData(response.data)
        })
    }, []);


    // To call at the start the moment quoteData is populated
    useEffect(()=>{
        if(quoteData){
            newQuote();
            setLoaded(true);
        }
    },[quoteData])



    return (
        <div className={style.container} >
            <div className={style.quoteContainer} id="quote-container">

                <div className={style.quote_text}>
                    <FontAwesomeIcon className={style.fa_quote_left} icon={faQuoteLeft}/>
                    <span id="quote">
                        {loaded ? quoteText : ""}
                    </span>
                </div>

                <div className={style.quote_author}>
                    <span id="author">
                        {loaded ? author : ""}
                    </span>
                </div>
        
                <div className={style.button_container}>
                    <button onClick={tweetQuote} className={style.twitter_button} id="twitter" title="Tweet This!">
                        <i class="fab fa-twitter"></i>
                        <FaTwitter className={style.fa_twitter} />
                    </button>
                    <button onClick={newQuote} id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator


