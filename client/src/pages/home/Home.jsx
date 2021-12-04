import React, {useContext, useEffect, useMemo, useState} from 'react';
import Categories from "./Categories";

import PostList from "../../components/posts/PostList";
import PostService from "../../API/PostService";
import {getPageCount} from "../../utils/pages";
import Pagination from "../Pagination";

import {Button, Form, FormControl} from "react-bootstrap";
import './Home.css'

import {useFetching} from "../../hooks/useFetching";
import MyButtons from "../../UI/buttons/MyButtons";
import Footer from "../Footer/Footer";
import {AuthContext} from "../../context";
import Loader from "../../UI/Loader/Loader";


const Home = () => {
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(10)
    const [page, setPage] = useState(1)


    const changePage = (page) => {
        setPage(page)
    }
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limitPage, page) => {
        const response = await PostService.getAll(limitPage,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limitPage));
    })
    useEffect(() => {
        fetchPosts(limitPage, page)

    }, [page])

    const filteredPosts =
        posts.filter(post => {
            return post.title.toLowerCase().includes(query.toLowerCase())
        })



    return (

        <div className="home container-fluid ">

            <div className="News   container-xl  ">
                <div className="newsHeader">
                    <h1 style={{color: "white",left:0}}>News</h1>

                    <div className="pagination">
                        <Pagination
                            page={page}
                            changePage={changePage}
                            totalPage={totalPage}/>
                    </div>
                </div>
                <div className="news container-fluid ">

                    {isPostsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }
                    {filteredPosts.length!==0?
                        <PostList posts={filteredPosts}/>
                        :
                        <h1 style={{textAlign:"center"}}>Posts not found</h1>
                    }

                    <div className="navButtons">
                        <MyButtons>Prev</MyButtons>
                        <MyButtons>Next</MyButtons>
                    </div>
                </div>
            </div>
            <div className="filter">


                <h1 className="text-center">Filtres</h1>
                <div className="input-group search justify-content-center">
                    <form action="" method="get" style={{width:'300px'}}>
                        <input name="s" placeholder="Search news" value={query} onChange={(e) =>
                            setQuery(e.target.value)} type="search" className="searchTop" id="searchTop1"/>
                        <button type="submit"   className="fas fa-search searchTopButton" id="searchButton1"> </button>
                    </form>
                </div>
                <Categories/>
            </div>

            <a href="#" className="scrollup "><i className="fas fa-arrow-up m-lg-2" style={{fontSize:'40px',color:"white"}}> </i></a>

        </div>

    );
};

export default Home;