import classNames from 'classnames'
import { observer } from 'mobx-react'
import React from 'react'

type Props = {
  numberOfPages: number
  onPageChange?: (selectedPage: number) => void
}

type State = {
  // [x: string]: boolean
  selectedPage: number
}

class Pagination extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)

    this.state = {
      selectedPage: 1
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(selectedPage: number, e: React.SyntheticEvent): void {
    e.preventDefault()

    this.setState({ selectedPage })

    if (this.props.onPageChange) {
      this.props.onPageChange(selectedPage)
    }
  }

  render(): React.ReactNode {
    const pages = new Array(this.props.numberOfPages).fill(false)

    return (<div className="site-pagination">
      {pages.map((_, i) => {
        const currentPage = i + 1
        const active = currentPage === this.state.selectedPage
        return (
          <a key={currentPage} className={classNames({ active })} href="" onClick={(e) => this.handleClick(currentPage, e)}>
            {(currentPage).toString().padStart(2, '0')}.
          </a>
        )
      })}
    </div>)
  }
}

export default observer(Pagination)
