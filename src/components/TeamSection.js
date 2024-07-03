import MemberCard from "./MemberCard"

const TeamSection = () => {
    const chiefs = [
        {
            name: "Sai Goutham Karanam",
            img: "/img/top-chiefs/Goutham.jpg",
            recipesCount: "10",
            Role: "MERN Stack",
        },
        {
            name: "Sahithi Priya Gattu",
            img: "/img/top-chiefs/sahithi.jpeg",
            recipesCount: "05",
            Role: "Front End",
        },
        {
            name: "Prashanth Lakkakula",
            img: "/img/top-chiefs/prashanth.jpeg",
            recipesCount: "13",
            Role: "Back End",
        },
        {
            name: "Akshay Shekar Karra",
            img: "/img/top-chiefs/akshay.jpeg",
            recipesCount: "08",
            Role: "DBA and Backend"
        },
        {
            name: "Lakshman Gunda",
            img: "/img/top-chiefs/LAKSHMAN.jpg",
            recipesCount: "09",
            Role: "Testing and Deployment"
        }
        // {
        //     name: "Ben Affleck",
        //     img: "/img/top-chiefs/img_6.jpg",
        //     recipesCount: "04",
        //     cuisine: "Indian"
        // }
    ];
    return (
        <div className="section chiefs">
            <h1 className="title">Our Team</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <MemberCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
};

export default TeamSection;