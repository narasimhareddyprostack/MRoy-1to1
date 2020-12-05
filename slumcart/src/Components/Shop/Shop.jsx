import React, { Component } from 'react'
import SHOP_DATA from './shopdata'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id}{...otherCollectionProps} />
                ))}
            </div>
        )
    }
}
export default Shop 