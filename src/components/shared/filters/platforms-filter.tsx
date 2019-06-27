import React from 'react'
import { observer } from 'mobx-react';

type Props = {
  list: string[];
}

const PlatformsFilter = (observer((props: Props) => {
  return (
    <div className="widget-item">
      <div className="categories-widget">
        <h4 className="widget-title">platform</h4>
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

export default PlatformsFilter;