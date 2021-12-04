import React, {useEffect, useState} from 'react';
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

const TopNews = () => {
    const [topPosts, setTopPosts] = useState([])
    const [query, setQuery] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(10)
    const [page, setPage] = useState(1)


    const changePage = (page) => {
        setPage(page)
    }
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limitPage, page) => {
        const response = await PostService.getAll(limitPage, page);
        setTopPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limitPage));
    })
    useEffect(() => {
        fetchPosts(limitPage, page)

    }, [page])

    const filteredPosts =

        topPosts.filter(post => {
            return post.title.toLowerCase().includes(query.toLowerCase())
        })


    return (
        <>
            <div className="home container-fluid  ">

                <div className="TopNews justify-content-center bg-black">
                    <div className="newsHeader">
                        <h1 style={{color: "white", textAlign: "center"}}>Top News</h1>

                        <div className="pagination">
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
                </div>
                <div className="topNews container-fluid ">

                    {isPostsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }
                    <PostList posts={filteredPosts}/>
                    <div className="navButtons">
                        <MyButtons>Prev</MyButtons>
                        <MyButtons>Next</MyButtons>
                    </div>
                </div>
                <a href="#" className="scrollup "><i className="fas fa-arrow-up m-lg-2"
                                                     style={{fontSize: '40px', color: "white"}}> </i></a>
            </div>

        </>


            );
            };

            export default TopNews;