import React from 'react';

const QuotesPageStyling = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize: '2rem',
  padding: '3rem',
};

const Quotes = () => (
  <div style={QuotesPageStyling}>
    <p>
      Lorem ipsum dolor sit,
      amet consectetur adipisicing
      elit. Delectus, optio. Enim,
      fugit? Veniam dicta, odit sunt
      inventore asperiores nesciunt ni
      si ut numquam obcaecati delectus iure!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Delectus, optio. Enim,
      fugit? Veniam dicta, odit sunt inventore
      asperiores nesciunt nisi ut numquam obcaecati del
      ectus iure!
    </p>
  </div>
);

export default Quotes;
