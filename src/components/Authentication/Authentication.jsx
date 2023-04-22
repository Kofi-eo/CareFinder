import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
	useCreateUserWithEmailAndPassword,
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { auth } from '../../Firebase/firebase.config';

const Authentication = () => {
	const router = useRouter();
	const [form, setForm] = useState({
		email: '',
		password: '',
		showPassword: false,
		submitting: false,
		forgotPassword: false,
		confirmPassword: '',
		isNewUser: true,
	});

	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth);
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

	// console.log(user);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (form.isNewUser) {
				if (form.password != form.confirmPassword) return;
				await createUserWithEmailAndPassword(form.email, form.password);
				toast.success('account created');
				router.push('/');
			} else {
				await signInWithEmailAndPassword(form.email, form.password);
				toast.success('signed in');
				router.push('/');
			}
		} catch (error) {
			toast.error('something went wrong');
		} finally {
			setForm((prev) => ({
				...prev,
				email: '',
				password: '',
				confirmPassword: '',
			}));
		}
	};

	const onChange = (event) => {
		//update form state
		setForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	//google sign in fxn
	const googleSignIn = async (e) => {
		e.preventDefault();
		try {
			await signInWithGoogle();
			toast.success('signed in');
			router.push('/');
		} catch (err) {
			toast.error('something went wrong');
		}
	};

	const sendResetPassword = async (e) => {
		e.preventDefault();
		try {
			await sendPasswordResetEmail(form.email);
			toast.success('reset password email sent please check your inbox');
			setForm((prev) => ({
				...prev,
				forgotPassword: !prev.forgotPassword,
				isNewUser: false,
			}));
		} catch (error) {
			toast.error('this email is not registered');
		}
	};

	const Heading = () => {
		const date = new Date();
		if (date.getHours() < 12) {
			return 'Good Morning,';
		} else if (date.getHours() > 12 && date.getHours() < 18) {
			return 'Good Afternoon,';
		} else {
			return 'Good Evening,';
		}
	};

	return (
		<section className='auth-section-container'>
			<div
				className='auth-image-container'
				style={{
					backgroundImage: form.isNewUser
						? 'url(/signUpImage.webp)'
						: 'url(/signInImage.webp)',
				}}
			>
				<div className='auth-logo-container'>
					<Image
						src={'/Logo-White.svg'}
						height={0}
						width={0}
						alt='careFinder'
					/>
				</div>
			</div>
			<div className='auth-container'>
				<section className='auth-section'>
					<h1>{Heading()}</h1>
					{!form.forgotPassword && (
						<h5>
							{!form.isNewUser
								? 'Welcome Back! Enter your details to sign in.'
								: ' Welcome! Enter your details to sign up.'}
						</h5>
					)}
					<form className='form' onSubmit={handleSubmit}>
						{/* if its a new user and he doesnt forget his password this shows up */}

						{!form.forgotPassword && (
							<>
								<label htmlFor='email'>Email</label>
								<input
									className='auth-input'
									type='email'
									name='email'
									value={form.email}
									placeholder='Enter Your Email'
									required
									onChange={onChange}
								/>

								<label htmlFor='password'>Password</label>
								<input
									className='auth-input'
									type='password'
									name='password'
									placeholder='Enter Your Password'
									required
									value={form.password}
									onChange={onChange}
								/>

								{/* confirm password only shows if the person is creating an account, it is hidden when signing in  */}

								{form.isNewUser && (
									<>
										<label htmlFor='confirm password'>Confirm Password</label>
										<input
											className='auth-input'
											type='password'
											name='confirmPassword'
											placeholder='Enter Your Password'
											required
											value={form.confirmPassword}
											onChange={onChange}
										/>
									</>
								)}

								{/* forgot password option only shows if the person is signing in  */}

								{!form.isNewUser && (
									<div
										className='forgot-password'
										onClick={() =>
											setForm((prev) => ({
												...prev,
												forgotPassword: !prev.forgotPassword,
											}))
										}
									>
										Forgot Password?
									</div>
								)}

								<div className='auth-group-buttons'>
									<input
										className='submit-button'
										type='submit'
										value={form.isNewUser ? 'Sign Up' : 'Log In'}
									/>
									<p className='or'>OR</p>
									<button className='google-button' onClick={googleSignIn}>
										<Image
											src='/google-logo.png'
											height={20}
											width={20}
											alt='google logo'
											style={{ marginRight: '10px' }}
											quality={100}
										/>
										Continue with Google
									</button>
								</div>
							</>
						)}

						{/* this is the reset password section it will only display if the user forgets his password and if it is not a new user */}

						{form.forgotPassword && !form.isNewUser && (
							<>
								<label htmlFor='email'>Email</label>
								<input
									className='auth-input'
									type='email'
									name='email'
									value={form.email}
									placeholder='Email'
									required
									onChange={onChange}
								/>
								<div
									className='forgot-password'
									onClick={() =>
										setForm((prev) => ({
											...prev,
											forgotPassword: !prev.forgotPassword,
										}))
									}
								>
									Log In
								</div>
								<button className='reset-password' onClick={sendResetPassword}>
									Reset Password
								</button>
							</>
						)}
					</form>

					{/* conditional option displays only when SignIn/SignUp */}

					{!form.forgotPassword && (
						<div className='no-account'>
							{form.isNewUser ? 'Have an account?' : 'No account?'}
							<span
								className='no-account-button'
								onClick={() =>
									setForm((prev) => ({
										...prev,
										isNewUser: !prev.isNewUser,
									}))
								}
							>
								{form.isNewUser ? 'Log In' : 'Sign Up'}
							</span>
						</div>
					)}
				</section>
			</div>
			<div className='mobile-logo'>
				<div className='auth-logo-container'>
					<Image
						src={'/Logo-White.svg'}
						height={0}
						width={0}
						alt='careFinder'
					/>
				</div>
			</div>
		</section>
	);
};

export default Authentication;
