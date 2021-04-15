import React, { useEffect, useState } from 'react';

const Albums = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('/api/albums')
      .then(res => res.json())
      .then((data) => {
        setAlbums(data);
      });
  }, [])

  return (
    <div>
      <ul>
        {albums && albums.map(al =>
          <li key={al.id}>{al.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Albums;
