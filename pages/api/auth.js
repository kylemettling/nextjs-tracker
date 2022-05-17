import { supabase } from '../lib/supabase'

export default function handler(req, res) {
	supabase.auth.api.setAuthCookie(req, res)
}
// import supabase from '../../lib/supabase'
// import { useState } from 'react'
// const Auth = () => {
// 	const [email, setEmail] = useState()

// 	const handleSubmit = async () => {
// 		e.preventDefault()
// 		const { error } = await supabase.auth.signIn({ email })
// 		console.log(error)
// 	}

// 	return (
// 		<div>
// 			<h3>Ahoy!</h3>
// 			<p>Fill in your email, we'll send you a magic link.</p>

// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type='email'
// 					placeholder='email address'
// 					onChange={(e) => setEmail(e.target.value)}
// 				/>
// 				<button type='submit'>Let's go!</button>
// 			</form>
// 		</div>
// 	)
// }

// export default Auth
