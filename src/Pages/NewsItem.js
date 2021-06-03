const NewsItem = () => {
    const d = new Date();
    const listMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const date = d.getDate();
    const month = listMonths[d.getMonth()];
    const year = d.getFullYear();
    return (  
        <div>
            <h1 className="text-left">News Item</h1>
            <article className="my-5 text-center">
                <h2 className="mb-2 font-bold">JUDUL</h2>
                <img className="mx-auto rounded-t-lg" src="images/content/image-berita-1.png" width="1000px" height="400px" alt="gambar berita" />
                <p className="font-semibold">Jakarta, {`${date} ${month} ${year}`} </p>
                <div className="my-5">BODY BERITA</div>
            </article>
        </div>
    );
}
 
export default NewsItem;