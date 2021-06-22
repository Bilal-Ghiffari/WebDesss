import React , {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export default function NewsItem({data}) {
    // Grid
    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/9": "cols-span-9 rows-span-1",
            },
            md: {
                "1/3": "cols-span-3 rows-span-1", 
            }
        }
    }


    const [users] = useState(data.slice(0,19));
    const [pageNumber, setPageNumber] = useState(0)
    console.log(users)
    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;
    
    const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
        return <div key={item.id} className={`mb-8 md:mb-0  ${ratioClassName?.wrapper?.mobile?.[item.ratio.mobile]} ${ratioClassName?.wrapper?.[item.ratio.md]}`}>
            <Link to={`/Gallery/${item.url}/${item.title}/${item.id}`} >
                <img className="rounded-t-lg" src={`/images/content/${item.imageUrl}`} alt="" />
            </Link>
            <div className="bg-gray-300">
                <Link to={`/Gallery/${item.url}/${item.title}/${item.id}`} >
                    <h4 className="flex justify-center py-5 capitalize text-black">{item.title}</h4>
                </Link>
                    <span className="flex justify-center text-sm text-gray-600 pb-4">{item.tanggal}</span>
            </div>
        </div>
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <Zoom>
        <section className="flex font-display bg-blue-800">
            <div className="container mx-auto">
                <div className="flex justify-center text-4xl my-10 capitalize font-semibold text-white">
                    Gallery
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
        </Zoom>
    )
}
