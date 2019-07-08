import { observer } from 'mobx-react'
import React from 'react'

type Props = {
  list: string[];
}

const CategoriesFilter = (props: Props) => {
  return (
    <div className="widget-item">
      <div className="categories-widget">
        <h4 className="widget-title">categories</h4>
        <ul>
          {
            props.list.map((x, i) => (
              <li key={i}>
                <a href="#">{x}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default observer(CategoriesFilter)
