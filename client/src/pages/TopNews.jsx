import React, {useContext, useEffect, useState} from 'react';
import Footer from "./Footer/Footer";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import Pagination from "./Pagination";
import Loader from "../UI/Loader/Loader";
import PostList from "../components/posts/PostList";
import MyButtons from "../UI/buttons/MyButtons";
import {Button} from "react-bootstrap";
import Categories from "./home/Categories";
import {AuthContext} from "../context";

const TopNews = () => {
    const [topPosts, setTopPosts] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(10)
    const [page, setPage] = useState(1)
    const {themeArray} = useContext(AuthContext)
    const [query, setQuery] = useState('')

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
        setTopPosts(response.data)
        const totalCount = topPosts.length
        setTotalPage(getPageCount(totalCount, limitPage))
    })

    const filteredPosts =topPosts.filter(post => {return post.text.toLowerCase().includes(query.toLowerCase())}

    )



    useEffect(() => {
        fetchPosts(limitPage, page)

    }, [limitPage, page])

    // const filteredPosts =
    //
    //     topPosts.filter(post => {
    //         return post.title.toLowerCase().includes(query.toLowerCase())
    //     })


    return (
        <div className="home container-fluid ">

            <div className="TopNews   container-xl  ">
                <div className="topNewsHeader">
                    <h1 style={{color: "white", left: 20,fontSize:100,textAlign:"center"}}>Hot News</h1>

                    <div className="topPagination">
                        <Pagination
                            page={page}
                            changePage={changePage}
                            totalPage={totalPage}/>
                    </div>
                    <div className="input-group search justify-content-center">
                        <form action="" method="get">
                            <input name="s" placeholder="Search news" value={query} onChange={(e) =>
                                setQuery(e.target.value)} type="search" className="searchTop"/>
                            <button type="submit" className="fas fa-search searchTopButton"></button>
                        </form>
                    </div>
                </div>
                <div className="topNews container-fluid ">

                    {isPostsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }

                    <PostList posts={filteredPosts}/>
                    {/*:*/}
                    {/*<h1 style={{textAlign:"center"}}>Posts not found</h1>*/}


                </div>
            </div>


            <a href="#" className="scrollup "><i className="fas fa-arrow-up m-lg-2"
                                                 style={{fontSize: '40px', color: "white"}}> </i></a>

        </div>


    );
            };

            export default TopNews;