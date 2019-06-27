import React from 'react'
import { observer } from 'mobx-react';

type Props = {
  list: string[];
}

const GenresFilter = (observer((props: Props) => {
  return (
    <div className="widget-item">
      <div className="categories-widget">
        <h4 className="widget-title">Genre</h4>
        <ul>
          {
            props.list.map(x => (
              <li>
                <a href="#">{x}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}))

export default GenresFilter;