import React, { Component } from 'react'
import CardItem from './card/CardItem'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './App.css'

const CardList = [
  {
    //定义卡片内容
    title: 'first Card',
    id: 1,
    content: 'this is first Card'
  },
  {
    title: 'second Card',
    id: 2,
    content: 'this is second Card'
  },
  {
    title: 'Third Card',
    id: 3,
    content: 'this is Third Card'
  },
  {
    title: '4th Card',
    id: 4,
    content: 'this is 4th Card'
  },
  {
    title: '5th Card',
    id: 5,
    content: 'this is 5th Card'
  }
]

class App extends Component {
  state = {
    CardList
  }
  handleDND = (dragIndex, hoverIndex) => {
    let CardList = this.state.CardList
    //临时储存文件
    let tmp = CardList[dragIndex]
    //移除拖拽项
    CardList.splice(dragIndex, 1)
    // 插入放置项
    CardList.splice(hoverIndex, 0, tmp)
    this.setState({
      CardList
    })
  }
  render() {
    return (
      <div className="card">
        <DndProvider backend={HTML5Backend}>
          {CardList.map((item, index) => {
            return (
              <CardItem
                key={item.id}
                title={item.title}
                content={item.content}
                index={index}
                onDND={this.handleDND}
              />
            )
          })}
        </DndProvider>
      </div>
    )
  }
}

export default App
