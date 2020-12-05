import React, { Component } from 'react'
import './directory.scss'
import { sections } from './directory.data'
import MenuItem from '../menu-item/menu-item'

class Directory extends Component {
    state = {
        data: sections
    }

    render() {
        const { data } = this.state
        return (
            <div className="directory-menu">
                {data.map(postData => (
                    <MenuItem postData={postData} key={postData.id} />
                ))}
            </div>
        )
    }
}
export default Directory