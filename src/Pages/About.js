import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>About Page</h2>
      <p>
        Boofers extremely cuuuuuute heckin good boys and girls puggorino,
        shoober heckin angery woofer. Long bois you are doin me a concern most
        angery pupper I have ever seen you are doin me a concern very jealous
        pupper mlem puggorino long bois what a nice floof, heckin good boys doge
        pupper floofs such treat clouds. You are doing me the shock lotsa pats
        the neighborhood pupper sub woofer adorable doggo, wow very biscit pats
        very jealous pupper.
      </p>
      <button onClick={() => navigate('/')}>Redirect Home</button>
    </div>
  );
}

export default About;
