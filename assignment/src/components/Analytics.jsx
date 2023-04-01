import React from 'react';
import Sidenav from './Sidenav';
import Card from './Card';
import Nav from './Nav';
import Linechart from './Linechart';
import Piechart from './PieChart';
import Table from './Table';

export default function Analytics() {
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
      <div className="d-flex">
        <div className="sidenav">
          <Sidenav />
        </div>
        <div className="other-half">
          <Nav />
          <div className="card-container">
            {cardData.map((e) => {
              return (
                <div key={e.id}>
                  <Card text={e.title} sub={e.sub} />
                </div>
              );
            })}
          </div>
          <div className="charts d-flex">
            <div className="chart-card text-white">
              dApp DAU
              <Linechart />
            </div>
            <div className="chart-card piechart text-white">
              Time Spent by Users
              <Piechart />
              <div className="d-flex gap-4">
                <div className="d-flex">
                  <div
                    style={{ marginTop: '6px' }}
                    className="colo twitter"
                  ></div>
                  <p style={{ paddingLeft: '8px' }}>Twitter</p>
                </div>
                <div className="d-flex">
                  <div style={{ marginTop: '6px' }} className="colo meta"></div>
                  <p style={{ paddingLeft: '8px' }}>Metaverse</p>
                </div>
                <div className="d-flex">
                  <div
                    style={{ marginTop: '6px' }}
                    className="colo discord"
                  ></div>
                  <p style={{ paddingLeft: '8px' }}>Discord</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-card table-card m-4 text-white">
            Users
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
