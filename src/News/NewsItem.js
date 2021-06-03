import React , {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function NewsItem({data}) {
    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/6": "cols-span-6 rows-span-1",
            },
            md: {
                "1/3": "cols-span-3 rows-span-1", 
            }
        }
    }


    const [users, setusers] = useState(data.slice(0,18));
    const [pageNumber, setPageNumber] = useState(0)
    
    console.log(users)
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;
    
    const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, id) => {
        return <div key={id} className={`mb-8 md:mb-0  ${ratioClassName?.wrapper?.mobile?.[item.ratio.mobile]} ${ratioClassName?.wrapper?.[item.ratio.md]}`}>
            <img className="rounded-t-lg" src={`/images/content/${item.imageUrl}`} alt="" />
            <div className=" bg-green-500">
                <Link to="/news-item" >
                    <h4 className="flex justify-center py-5 capitalize text-white">{item.title}</h4>
                </Link>
            </div>
        </div>
    })


    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <section className="flex mt-10 font-display">
            <div className="container mx-auto">
                <div className="flex flex-start text-3xl capitalize font-semibold my-8">
                    news item
                </div>
                    <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-x-4 md:gap-y-10">
                        {displayUsers}
                    </div>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
            </div>
        </section>
    )
}
