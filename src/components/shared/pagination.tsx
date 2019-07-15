import classNames from 'classnames'
import React from 'react'

type Props = {
  numberOfPages: number
  handlePageChange?: (selectedPage: number) => void
}

type State = {
  [x: string]: boolean
}

class Pagination extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)

    const totalPages = [...new Array(props.numberOfPages).keys()]
    const obj: any = {}
    for (const page of totalPages) {
      obj[page + 1] = false
    }

    obj[1] = true

    this.state = obj

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(selectedPage: number, e: React.SyntheticEvent): void {
    e.preventDefault()

    const oldPage = Object.keys(this.state).find((key) => this.state[key] === true)

    this.setState({ [oldPage!]: false, [selectedPage]: true, })

    if (this.props.handlePageChange) {
      this.props.handlePageChange(selectedPage)
    }
  }

  render(): React.ReactNode {
    const buttons = this.state

    return (
      <div className="site-pagination">
        {Object.keys(buttons).map((i) => (
          <a key={i} className={classNames({ active: buttons[i] })} href="" onClick={(e) => this.handleClick(+i, e)}>
            {(i).toString().padStart(2, '0')}.
            </a>
        ))}
      </div>
    )
  }
}

export default Pagination
