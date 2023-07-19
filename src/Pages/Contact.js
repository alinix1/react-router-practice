import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Clouds fat boi many pats you are doing me the shock very hand that feed
        shibe, thicc you are doing me a frighten length boy, most angery pupper
        I have ever seen very hand that feed shibe fluffer. You are doin me a
        concern such treat mlem bork heckin good boys, long bois porgo smol
        borking doggo with a long snoot for pats, vvv tungg long bois. Heckin
        good boys you are doin me a concern shoob fluffer, heckin good boys. I
        am bekom fat floofs tungg such treat, porgo. I am bekom fat shooberino
        blop wrinkler, ruff.
      </p>
      <button onClick={() => navigate('/')}>Redirect Home</button>
    </div>
  );
}

export default Contact;
