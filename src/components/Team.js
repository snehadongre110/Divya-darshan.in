import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from './header';
import FooterComponent from './footer';


class TeamsComponent extends React.Component {

    teamMembers = [
        { id: '1', name: 'John Doe', designation: 'Software Engineer', image: 'Profile1.png' },
        { id: 2, name: 'Bob Johnson', designation: 'UX Designer', image: 'Profile2.png' },
        { id: 3, name: 'Kane Peter', designation: 'Frontend Developer', image: 'Profile3.png' },
        { id: 4, name: 'Kane Peter', designation: 'backennd Developer', image: 'Profile4.png' },
        { id: 5, name: 'Mike Hussy', designation: 'Android Developer', image: 'Profile5.png' },
        { id: 6, name: 'Luis Mark', designation: 'Web Developer', image: 'Profile6.png' }
    ];
    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossorigin="anonymous"
                />

                {/* Navigation content */}
                <HeaderComponent />
                {/* Team content */}
                <div className="container-fluid pb-5">
                    <h1 className="text-center mb-4 mt-3">Our Team Members</h1>
                    <div className="row">
                        {this.teamMembers.map(member => (
                            <div key={member.id} className="col-md-4 mb-4">
                                <div className="card">
                                    {/* Display the team member's image */}
                                    <img
                                        src={`./assets/profile1.jpeg`}
                                        className="card-img-top"
                                        alt={member.name}
                                    />
                                    <div className="card-body">
                                        <h3>{member.name}</h3>
                                        <p>{member.designation}</p>
                                        <Link to={`/profile/${member.id}`} className="btn btn-primary">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer content */}
               <FooterComponent ></FooterComponent>
            </div>
        );
    };
}

export default TeamsComponent;