import React, { useEffect, useState } from 'react';

const Artists = (props) => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch('/api/artists')
      .then(res => res.json())
      .then((data) => {
        setArts(data);
      });
  }, [])

  return (
    <div>
      <ul>
        {arts && arts.map(ar =>
          <li key={ar.id}>{ar.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Artists;