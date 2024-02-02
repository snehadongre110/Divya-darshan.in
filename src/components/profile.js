import React from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetails() {
  const { userId } = useParams();

  const teamMembers = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer', image: 'Profile1.png' },
    { id: 2, name: 'Bob Johnson', designation: 'UX Designer', image: 'Profile2.png' },
    { id: 3, name: 'Kane Peter', designation: 'Frontend Developer', image: 'Profile3.png' },
    { id: 4, name: 'Kane Peter', designation: 'backennd Developer', image: 'Profile4.png' },
    { id: 5, name: 'Mike Hussy', designation: 'Android Developer', image: 'Profile5.png' },
    { id: 6, name: 'Luis Mark', designation: 'Web Developer', image: 'Profile6.png' }
  ];

  const profile = teamMembers.find(profile => profile.id === parseInt(userId, 10));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.designation}</p>
      {/* Add other profile details as needed */}
    </div>
  );
}

export default ProfileDetails;