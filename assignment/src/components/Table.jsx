import React from 'react';

export default function Table() {
  const data = [
    {
      id: 1,
      name: 'hello.eth',
      sub: '00xg....23a4f5g76',
      asset: '20 ETH',
      age: '20 days',
      score: 1000,
      worth: '200 ETH',
      tags: ['Degen', 'Streamer'],
    },
    {
      id: 2,
      name: 'hello.eth',
      sub: '00xg....23a4f5g76',
      asset: '6 ETH',
      age: '20 days',
      score: 20,
      worth: '50 ETH',
      tags: ['Collector', 'Competitive'],
    },
    {
      id: 3,
      name: 'hello.eth',
      sub: '00xg....23a4f5g76',
      asset: '23 ETH',
      age: '45 days',
      score: 40,
      worth: '150 ETH',
      tags: ['DAO Member', 'Developer'],
    },
    {
      id: 4,
      name: 'hello.eth',
      sub: '00xg....23a4f5g76',
      asset: '45 ETH',
      age: '1002 days',
      score: 80,
      worth: '300 ETH',
      tags: ['Cardano Lover', 'Defi Trader'],
    },
  ];
  return (
    <div>
      <table>
        <tr className="heading">
          <td>Name</td>
          <td>Assets</td>
          <td>Account Age</td>
          <td>Active Score</td>
          <td>Worth</td>
          <td className="tags">Tags</td>
        </tr>
        {data.map((e) => {
          return (
            <tr key={e.id}>
              <td>
                {e.name}
                <p className='sub'>{e.sub}</p>
              </td>
              <td>{e.asset}</td>
              <td>{e.age}</td>
              <td>{e.score}</td>
              <td>{e.worth}</td>
              <td>
                <div className="d-flex gap-1">
                  {e.tags.map((t) => {
                    return <div className='tag p-1 px-2 ' key={t}>{t}</div>;
                  })}
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
