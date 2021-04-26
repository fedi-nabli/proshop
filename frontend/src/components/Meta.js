import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Proshop',
  description: 'We sell the best products'
}

export default Meta
