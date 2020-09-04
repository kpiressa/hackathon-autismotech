import React, { Component } from 'react';
import { Table, Tag, Button, Rate } from 'antd';

import './styles.css';

//var tableCount = 0;

const columns = [
    /*{
      title: 'Posição',
      dataIndex: 'position',
      key: 'position',
      render: (text, record, index) => "#" + ++index,
    }, */  
    {
      title: 'Empresa',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Indústria',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Diferenciais',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            else if (tag === 'home office') {
              color = 'pink';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
          <Button type="default" size="small">Ver mais</Button>
        </>
      ),
    },    
    {
      title: 'Avaliação',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'FIAP',
      age: 'Ensino Superior',
      address: <Rate disabled defaultValue={5} />,
      tags: ['fone de ouvido', 'salas climatizadas'],
    },
    {
      key: '2',
      name: 'Magalu',
      age: 'Varejo',
      address: <Rate disabled defaultValue={5} />,
      tags: ['home office', 'day-off', 'mentoria'],
    },
    {
      key: '3',
      name: 'Zup',
      age: 'Tecnologia',
      address: <Rate disabled defaultValue={5} />,
      tags: ['home office', 'fone de ouvido'],
    },
    {
        key: '4',
        name: 'Carrefour',
        age: 'Varejo',
        address: <Rate disabled defaultValue={5} />,
        tags: ['plr', 'salas climatizadas'],
      },
      {
        key: '5',
        name: 'Avanade',
        age: 'Tecnologia',
        address: <Rate disabled defaultValue={5} />,
        tags: ['plr'],
      },
      {
        key: '6',
        name: 'Platform Builders',
        age: 'Tecnologia',
        address: <Rate disabled defaultValue={5} />,
        tags: ['plr'],
      },
      {
        key: '7',
        name: 'EY',
        age: 'Contabilidade',
        address: <Rate disabled defaultValue={5} />,
        tags: ['plr'],
      },
      {
        key: '8',
        name: 'Alura',
        age: 'Educação',
        address: <Rate disabled defaultValue={5} />,
        tags: ['home office', 'plr'],
      },  
  ];

export class Ranking extends Component {

    render() {
        return (
            <div className="ranking-container">
                <Table columns={columns} dataSource={data} pagination={{defaultPageSize: 10, hideOnSinglePage: true}} />
            </div>
        );
    }
}

export default Ranking;