import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
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
import {usePosts} from "../../hooks/usePost";
import {useObserver} from "mobx-react-lite";
import {useHistory} from "react-router-dom";


const Home = () => {
    const [posts, setPosts] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(10)
    const [page, setPage] = useState(1)
    const {themeArray} = useContext(AuthContext)
    const [query, setQuery] = useState('')
    const history=useHistory()

    const changePage = (page) => {
        setPage(page)
    }

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        // if (themeArray.length!==0) {
        //     themeArray.map(async r => {
        //         const response = await PostService.getAll();
        //         setPosts([...posts, ...response.data.data])
        //     })
        // } else {
        //     const response = await PostService.getAll();
        //     setPosts([...posts, ...response])
        // console.log(response)
        //
        // }
        const response = await PostService.getAll();
        setPosts(response.data)
        const totalCount = posts.length
        setTotalPage(getPageCount(totalCount, limitPage))
    })

    const filteredPosts =posts.filter(post => {return post.text.toLowerCase().includes(query.toLowerCase())}

)



    useEffect(() => {
        fetchPosts(limitPage, page)

    }, [limitPage, page])


    return (

        <div className="home container-fluid ">

            <div className="News   container-xl  ">
                <div className="newsHeader">
                    <h1 style={{color: "white", left: 0}}>News</h1>

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
                    <h1 style={{textAlign:"center"}}>Posts not found</h1>}


                </div>
            </div>
            <div className="filter">


                <h1 className="text-center">Filtres</h1>
                <div className="input-group search justify-content-center">

                    <form action="" method="get" style={{width: '300px'}}>
                        <input name="s" placeholder="Search news" value={query}
                               onChange={e => setQuery(e.target.value)} type="search"
                               className="searchTop" id="searchTop1"/>
                        <button type="submit" className="fas fa-search searchTopButton" id="searchButton1"/>
                    </form>
                </div>


                        <Categories posts={posts}   setPosts={setPosts}/>


            </div>

            <a href="#" className="scrollup "><i className="fas fa-arrow-up m-lg-2"
                                                 style={{fontSize: '40px', color: "white"}}> </i></a>

        </div>

    );
};

export default Home;