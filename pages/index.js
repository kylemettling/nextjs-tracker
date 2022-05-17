import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useFetchUser } from '../lib/user'
import { withApollo } from '../lib/apollo'
import Layout from '../components/Layout'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'
import Link from 'next/link'

const Home = () => {
	const { user, loading } = useFetchUser()
	if (loading) return <div />
	return (
		<Layout user={user} loading={loading}>
			<div className='hero'>
				<h1 className='title'>Level Up Your Life</h1>
				<div className='list'>
					<Link href='/auth'>
						<a>Log In Now!</a>
					</Link>
					<HabitForm />
					<HabitList />
				</div>
			</div>

			<style jsx>{`
				.hero {
					width: 100%;
					color: #333;
				}
				.title {
					margin-top: 0;
					width: 100%;
					padding-top: 80px;
					line-height: 1.15;
					font-size: 48px;
				}
				.title,
				.description {
					text-align: center;
				}
				.list {
					max-width: 600px;
					margin: 0 auto;
				}
			`}</style>
		</Layout>
	)
}

export default withApollo(Home)
