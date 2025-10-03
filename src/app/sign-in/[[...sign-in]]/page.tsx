'use client';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import { Spinner } from '@heroui/react';
import { HeroUIProvider } from '@heroui/react';
import { Button } from '@/app/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
	return (
		<div>
			<div className='m-4'>
				<Link href='/'>
					<ArrowLeft size={32} />
				</Link>
			</div>
			<div className='justify-center m-54'>
				<div className='grid w-full grow items-center justify-center place-content-center px-4 sm:justify-center '>
					<HeroUIProvider>
						<SignIn.Root>
							<Clerk.Loading>
								{(isGlobalLoading) => (
									<>
										<SignIn.Step name='start'>
											<Card className='w-full sm:w-96'>
												<CardHeader>
													<CardTitle>
														Sign in to Morteza
														Maddahi
													</CardTitle>
													<CardDescription>
														Welcome back! Please
														sign in to continue
													</CardDescription>
												</CardHeader>
												<CardContent className='grid gap-y-4'>
													<div className='grid grid-cols-2 gap-x-4'>
														<Clerk.Connection
															name='github'
															asChild>
															<Button
																size='sm'
																variant='outline'
																type='button'
																disabled={
																	isGlobalLoading
																}>
																<Clerk.Loading scope='provider:github'>
																	{(
																		isLoading
																	) =>
																		isLoading ? (
																			<Spinner className='size-4 animate-spin' />
																		) : (
																			<>
																				<svg
																					role='img'
																					viewBox='0 0 24 24'
																					xmlns='http://www.w3.org/2000/svg'>
																					<title>
																						GitHub
																					</title>
																					<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
																				</svg>
																				{/* <Icons.gitHub className='mr-2 size-4' /> */}
																				GitHub
																			</>
																		)
																	}
																</Clerk.Loading>
															</Button>
														</Clerk.Connection>
														<Clerk.Connection
															name='google'
															asChild>
															<Button
																size='sm'
																variant='outline'
																type='button'
																disabled={
																	isGlobalLoading
																}>
																<Clerk.Loading scope='provider:google'>
																	{(
																		isLoading
																	) =>
																		isLoading ? (
																			<Spinner className='size-4 animate-spin' />
																		) : (
																			<>
																				<svg
																					role='img'
																					viewBox='0 0 24 24'
																					xmlns='http://www.w3.org/2000/svg'>
																					<title>
																						Google
																					</title>
																					<path d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' />
																				</svg>
																				{/* <Icons.google className='mr-2 size-4' /> */}
																				Google
																			</>
																		)
																	}
																</Clerk.Loading>
															</Button>
														</Clerk.Connection>
													</div>
													<p className='flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'>
														or
													</p>
													<Clerk.Field
														name='identifier'
														className='space-y-2'>
														<Clerk.Label asChild>
															<Label>
																Email address
															</Label>
														</Clerk.Label>
														<Clerk.Input
															type='email'
															required
															asChild>
															<Input />
														</Clerk.Input>
														<Clerk.FieldError className='block text-sm text-destructive' />
													</Clerk.Field>
												</CardContent>
												<CardFooter>
													<div className='grid w-full gap-y-4'>
														<SignIn.Action
															submit
															asChild>
															<Button
																className='bg-zinc-900 text-white hover:bg-zinc-950'
																disabled={
																	isGlobalLoading
																}>
																<Clerk.Loading>
																	{(
																		isLoading
																	) => {
																		return isLoading ? (
																			<Spinner className='size-4 animate-spin' />
																		) : (
																			'Continue'
																		);
																	}}
																</Clerk.Loading>
															</Button>
														</SignIn.Action>
														<Button
															variant='link'
															size='sm'
															asChild>
															<Clerk.Link navigate='sign-up'>
																Don&apos;t have
																an account? Sign
																up
															</Clerk.Link>
														</Button>
													</div>
												</CardFooter>
											</Card>
										</SignIn.Step>

										<SignIn.Step name='choose-strategy'>
											<Card className='w-full sm:w-96'>
												<CardHeader>
													<CardTitle>
														Use another method
													</CardTitle>
													<CardDescription>
														Facing issues? You can
														use any of these methods
														to sign in.
													</CardDescription>
												</CardHeader>
												<CardContent className='grid gap-y-4'>
													<SignIn.SupportedStrategy
														name='email_code'
														asChild>
														<Button
															type='button'
															variant='link'
															disabled={
																isGlobalLoading
															}>
															Email code
														</Button>
													</SignIn.SupportedStrategy>
													<SignIn.SupportedStrategy
														name='password'
														asChild>
														<Button
															type='button'
															variant='link'
															disabled={
																isGlobalLoading
															}>
															Password
														</Button>
													</SignIn.SupportedStrategy>
												</CardContent>
												<CardFooter>
													<div className='grid w-full gap-y-4'>
														<SignIn.Action
															navigate='previous'
															asChild>
															<Button
																disabled={
																	isGlobalLoading
																}>
																<Clerk.Loading>
																	{(
																		isLoading
																	) => {
																		return isLoading ? (
																			<Spinner className='size-4 animate-spin' />
																		) : (
																			'Go back'
																		);
																	}}
																</Clerk.Loading>
															</Button>
														</SignIn.Action>
													</div>
												</CardFooter>
											</Card>
										</SignIn.Step>

										<SignIn.Step name='verifications'>
											<SignIn.Strategy name='password'>
												<Card className='w-full sm:w-96'>
													<CardHeader>
														<CardTitle>
															Check your email
														</CardTitle>
														<CardDescription>
															Enter the
															verification code
															sent to your email
														</CardDescription>
														<p className='text-sm text-muted-foreground'>
															Welcome back{' '}
															<SignIn.SafeIdentifier />
														</p>
													</CardHeader>
													<CardContent className='grid gap-y-4'>
														<Clerk.Field
															name='password'
															className='space-y-2'>
															<Clerk.Label
																asChild>
																<Label>
																	Password
																</Label>
															</Clerk.Label>
															<Clerk.Input
																type='password'
																asChild>
																<Input />
															</Clerk.Input>
															<Clerk.FieldError className='block text-sm text-destructive' />
														</Clerk.Field>
													</CardContent>
													<CardFooter>
														<div className='grid w-full gap-y-4'>
															<SignIn.Action
																submit
																asChild>
																<Button
																	disabled={
																		isGlobalLoading
																	}>
																	<Clerk.Loading>
																		{(
																			isLoading
																		) => {
																			return isLoading ? (
																				<Spinner className='size-4 animate-spin' />
																			) : (
																				'Continue'
																			);
																		}}
																	</Clerk.Loading>
																</Button>
															</SignIn.Action>
															<SignIn.Action
																navigate='choose-strategy'
																asChild>
																<Button
																	type='button'
																	size='sm'
																	variant='link'>
																	Use another
																	method
																</Button>
															</SignIn.Action>
														</div>
													</CardFooter>
												</Card>
											</SignIn.Strategy>

											<SignIn.Strategy name='email_code'>
												<Card className='w-full sm:w-96'>
													<CardHeader>
														<CardTitle>
															Check your email
														</CardTitle>
														<CardDescription>
															Enter the
															verification code
															sent to your email
														</CardDescription>
														<p className='text-sm text-muted-foreground'>
															Welcome back{' '}
															<SignIn.SafeIdentifier />
														</p>
													</CardHeader>
													<CardContent className='grid gap-y-4'>
														<Clerk.Field name='code'>
															<Clerk.Label className='sr-only'>
																Email
																verification
																code
															</Clerk.Label>
															<div className='grid gap-y-2 items-center justify-center'>
																<div className='flex justify-center text-center'>
																	<Clerk.Input
																		type='otp'
																		autoSubmit
																		className='flex justify-center has-[:disabled]:opacity-50'
																		render={({
																			value,
																			status,
																		}) => {
																			return (
																				<div
																					data-status={
																						status
																					}
																					className='relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring'>
																					{
																						value
																					}
																				</div>
																			);
																		}}
																	/>
																</div>
																<Clerk.FieldError className='block text-sm text-destructive text-center' />
																<SignIn.Action
																	asChild
																	resend
																	className='text-muted-foreground'
																	fallback={({
																		resendableAfter,
																	}) => (
																		<Button
																			variant='link'
																			size='sm'
																			disabled>
																			Didn&apos;t
																			receive
																			a
																			code?
																			Resend
																			(
																			<span className='tabular-nums'>
																				{
																					resendableAfter
																				}
																			</span>
																			)
																		</Button>
																	)}>
																	<Button
																		variant='link'
																		size='sm'>
																		Didn&apos;t
																		receive
																		a code?
																		Resend
																	</Button>
																</SignIn.Action>
															</div>
														</Clerk.Field>
													</CardContent>
													<CardFooter>
														<div className='grid w-full gap-y-4'>
															<SignIn.Action
																submit
																asChild>
																<Button
																	className='bg-black'
																	disabled={
																		isGlobalLoading
																	}>
																	<Clerk.Loading>
																		{(
																			isLoading
																		) => {
																			return isLoading ? (
																				<Spinner className='size-4 animate-spin' />
																			) : (
																				'Continue'
																			);
																		}}
																	</Clerk.Loading>
																</Button>
															</SignIn.Action>
															<SignIn.Action
																navigate='choose-strategy'
																asChild>
																<Button
																	size='sm'
																	variant='link'>
																	Use another
																	method
																</Button>
															</SignIn.Action>
														</div>
													</CardFooter>
												</Card>
											</SignIn.Strategy>
											<SignIn.Step name='forgot-password'>
												<h1>Forgot your password?</h1>

												<SignIn.SupportedStrategy name='reset_password_email_code'>
													Reset password
												</SignIn.SupportedStrategy>

												<SignIn.Action navigate='previous'>
													Go back
												</SignIn.Action>
											</SignIn.Step>
											<SignIn.Step name='reset-password'>
												<h1>Reset your password</h1>

												<Clerk.Field name='password'>
													<Clerk.Label>
														New password
													</Clerk.Label>
													<Clerk.Input />
													<Clerk.FieldError />
												</Clerk.Field>

												<Clerk.Field name='confirmPassword'>
													<Clerk.Label>
														Confirm password
													</Clerk.Label>
													<Clerk.Input />
													<Clerk.FieldError />
												</Clerk.Field>

												<SignIn.Action submit>
													Reset password
												</SignIn.Action>
											</SignIn.Step>
										</SignIn.Step>
									</>
								)}
							</Clerk.Loading>
						</SignIn.Root>
					</HeroUIProvider>
				</div>
			</div>
		</div>
	);
}
