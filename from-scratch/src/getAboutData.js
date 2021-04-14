import React from 'react';

const getAboutData = () => {

  fetch('/about')
    .then(res => res.text())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <p>Get about ran (see console).</p>
    </div>
  );
};

export default getAboutData;