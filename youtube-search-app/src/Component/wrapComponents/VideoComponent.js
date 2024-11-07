import VideoListView from "../baseComponents/VideoListView";
import React,{useState,useEffect} from "react";
import {Col} from "react-bootstrap";
import InputBox from '../baseComponents/InputBox';
import BtnComponent from '../baseComponents/BtnComponent';
import axios from 'axios';
import '../../Styles/VideoComponent.css';



const apiKey = process.env.REACT_APP_MY_KEY;
const VideoComponent = () => {
    const [searchVal, setSearchVal] = useState("React js");
    const [list, setList] = useState([]);
    const listLength = 10;

    const onSearch = () => {
        searchVideo(searchVal);
    }

    const onChange = (e) => {
        setSearchVal(e.target.value);
    }

    const onKeyUp = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    }

    const searchVideo = async (searchItm) => {
        try 
        {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: listLength,
                    q: searchItm,
                    key: apiKey
                }
            });
            setList(response.data.items);
        }
        catch(error)
        {
          console.error(error);
        }
    }

    useEffect(() => {
        searchVideo(searchVal);
    }, []);

    return (<div className="container VideoListContainer">
        <Col lg={12} sm={12} md={12} xs={12} className="VideoSearchBox">
            <Col lg={6} sm={6} md={6} xs={6} className="">
                <InputBox autofocus name="search" type="text" placeholder="Search" onChange={onChange} defaultVal={searchVal} onKeyUp={onKeyUp} />
            </Col>
            <Col lg={6} sm={6} md={6} xs={6} className="">
                <BtnComponent BtnText="Search" BtnClick={onSearch}/>
            </Col>
        </Col>
        <VideoListView videoList={list} />
    </div>);
}

export default VideoComponent;