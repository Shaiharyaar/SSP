import React from "react";
import "../../resources/css/profile.css";
function Profile(props) {
  const data = JSON.parse(localStorage.getItem("UserInfo"));
  console.log(data);
  return (
    <div className="body1">
      <aside class="profile-card">
        <header>
          <a target="_blank" href="#">
            <img src={data.User.image} class="hoverZoomLink" />
          </a>

          <h4>{data.User.firstname + " " + data.User.lastname}</h4>
        </header>

        <div class="profile-bio">
          <p>
            <strong>Email: </strong>
            {data.User.email}
            <br />
            <br />
            <strong>Gender: </strong>
            {data.User.gender}
            <br />
          </p>
          <a
            href="#"
            className="btn btn-full profbtn"
            style={{
              position: "absolute",
              width: 150,
              height: 35,
              left: 67,
              top: 350,
            }}
          >
            Your Profile
          </a>
        </div>
      </aside>
    </div>
  );
}
export default Profile;
