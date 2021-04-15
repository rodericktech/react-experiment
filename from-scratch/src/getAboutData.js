import React from 'react';

const getAboutData = () => {

  fetch('/about')
    .then(res => res.text())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <p><em>(GetAboutData ran (see console)).</em></p>
    </div>
  );
};

export default getAboutData;