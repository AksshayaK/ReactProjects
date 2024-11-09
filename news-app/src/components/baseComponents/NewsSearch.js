
import withNewsSearch from "../hoc/withNewsSearch";
import React,{useState} from "react";
import {Button,Form} from "react-bootstrap";


const NewsSearch = ({fetchArticles}) => {  
    const [query,setQuery] = useState('');
    const handleSubmit = (e) => {
       e.preventDefault();
       fetchArticles(query);
       //setQuery('');       
    }
    

    return (<Form onSubmit={handleSubmit} style={{ margin: '30px' }}>
        <input type="text" placeholder="Search for news..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" style={{ margin: '10px' }}>Search</Button>
    </Form>);

}

export default withNewsSearch(NewsSearch);