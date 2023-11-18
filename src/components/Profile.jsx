function Profile() {
    const aboutMe = "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus. "

    const name = "Surya Adi Wiguna";
    const age = 25;
    const location = "Sukabumi, Indonesia"
    return (

        <div className="section-white">
            <div className="container profile">
                <div className="profile-top">
                    <h1>PROFILE</h1>
                    <p className="sub-title">I'm a creative multitasking developer</p>
                </div>
                <div className="three-column">
                    <div className="about-me">
                        <h2>About me</h2>
                        <p>
                            {aboutMe}
                        </p>
                    </div>
                    <div>
                        <div className="round-frame">

                        </div>
                    </div>
                    <div >
                        <h2>Details</h2>
                        <p>
                            <b>Name: </b>
                            <br /> {name}
                            <br />
                            <b>Age: </b>
                            <br />{age} years
                            <br />
                            <b>Location:</b>
                            <br />{location}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile