import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img1.jpg",
        "/img/gallery/img2.jpg",
        "/img/gallery/img3.jpg",
        "/img/gallery/img4.jpg",
        "/img/gallery/img5.jpg",
        "/img/gallery/img6.jpg",
        "/img/gallery/img7.jpg",
        "/img/gallery/img8.jpg",
        "/img/gallery/img9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">RecipeDiaries is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
               
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}