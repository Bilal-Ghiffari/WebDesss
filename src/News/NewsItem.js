import React , {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';


export default function NewsItem({data}) {
    // Grid
    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/6": "cols-span-6 rows-span-1",
            },
            md: {
                "1/3": "cols-span-3 rows-span-1"
            }
        }
    }


    const [users] = useState(data.slice(0,18));
    const [pageNumber, setPageNumber] = useState(0)
    console.log(users)
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
        return <div key={item.id} className={`mb-8 md:mb-0 ${ratioClassName?.wrapper?.mobile?.[item.ratio.mobile]} ${ratioClassName?.wrapper?.[item.ratio.md]}`}>
                <Link to={`/News/${item.url}/${item.title}/${item.id}`} >
                    <div className="relative">
                        <img className="rounded-t-lg" src={`/images/content/${item.imageUrl}`} alt="" />
                        <div className="image-overlay absolute">
                            <span><i className="ri-link ri-lg"></i> Read More</span>  
                        </div>
                    </div>
                        <div className=" bg-green-500">
                            <h4 className="flex justify-center py-5 capitalize text-white">{item.title}</h4>
                        </div>
                </Link>
                </div>
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <section className="flex font-display bg-blue-800">
            <div className="container mx-auto">
            <LightSpeed left delay={2000}>
                <div className="flex justify-center text-4xl capitalize font-semibold text-white my-20">
                    news item
                </div>
            </LightSpeed>
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
