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
      tags: ['apoio', 'adaptações ambientais'],
    },
    {
      key: '2',
      name: 'Magalu',
      age: 'Varejo',
      address: <Rate disabled defaultValue={5} />,
      tags: ['home office', 'adaptações ambientais'],
    },
    {
      key: '3',
      name: 'Zup',
      age: 'Tecnologia',
      address: <Rate disabled defaultValue={5} />,
      tags: ['home office', 'processos organizados'],
    },
    {
        key: '4',
        name: 'Carrefour',
        age: 'Varejo',
        address: <Rate disabled defaultValue={5} />,
        tags: ['apoio', 'adaptações ambientais'],
      },
      {
        key: '5',
        name: 'Avanade',
        age: 'Tecnologia',
        address: <Rate disabled defaultValue={5} />,
        tags: ['apoio', 'processos organizados'],
      },
      {
        key: '6',
        name: 'Platform Builders',
        age: 'Tecnologia',
        address: <Rate disabled defaultValue={5} />,
        tags: ['apoio'],
      },
      {
        key: '7',
        name: 'EY',
        age: 'Contabilidade',
        address: <Rate disabled defaultValue={5} />,
        tags: ['guardião da inclusão'],
      },
      {
        key: '8',
        name: 'Alura',
        age: 'Educação',
        address: <Rate disabled defaultValue={5} />,
        tags: ['home office', 'apoio'],
      },  
  ];

export class Ranking extends Component {

    render() {
        return (
          <Table columns={columns} dataSource={data} pagination={{defaultPageSize: 10, hideOnSinglePage: true}} />
        );
    }
}

export default Ranking;