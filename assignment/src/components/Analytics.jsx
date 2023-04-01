import React from 'react';
import Sidenav from './Sidenav';
import Card from './Card';
import Nav from './Nav';

export default function Analytics() {
  // <div className="card-container">
  //       {cardData.map((e) => {
  //         return (
  //           <div key={e.id}>
  //             <Card text={e.title} sub={e.sub} />
  //           </div>
  //         );
  //       })}
  //     </div>
  const cardData = [
    {
      id: 1,
      title: '4202 hours',
      sub: 'Total time spent in last 7 days',
    },
    {
      id: 2,
      title: '$204,321',
      sub: 'Total store purchases in 7 days',
    },
    {
      id: 3,
      title: '7300',
      sub: 'Weekly Active Game Users',
    },
    {
      id: 4,
      title: '9834',
      sub: 'Tweet likes in last 7 days',
    },
    {
      id: 5,
      title: '56070',
      sub: 'Discord messages in last 7 days',
    },
    {
      id: 6,
      title: '2304',
      sub: 'Contract transactions in last 7 days',
    },
  ];
  return (
    <div className="main-container">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="other-half">
        <Nav />
      </div>
    </div>
  );
}
