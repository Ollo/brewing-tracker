import React from 'react'
import PageHome from 'components/PageHome'
import PageLogin from 'components/PageLogin'

export default [
	{
		path: '/',
		load: () => Promise.resolve(PageHome),
	},{
		path: '/login',
		load: () => Promise.resolve(PageLogin),
	}
]