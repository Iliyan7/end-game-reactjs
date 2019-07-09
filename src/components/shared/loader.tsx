import { inject, observer } from 'mobx-react'
import React from 'react'
import { RootStoreProp } from 'stores/root-store'
import { ROOT_STORE } from '../../constants'

const Loader = inject(ROOT_STORE)(observer((props: RootStoreProp) => {
  return props.rootStore!.isLoading ? (
    <div id="preloder">
      <div className="loader" />
    </div>
  ) : null
}))

export default Loader
