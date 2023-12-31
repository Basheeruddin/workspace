import React from 'react'

const LoginComponent = () => {
  return (
    
    <div id="dialog-content" style={{display:"none", maxWidth:"500px"}}>
				<div className="container sign">
					<div className="row">
						<div className="col-md-12">
							<form className="form account-form sign-in-form" action="#!">
								<div className="form__fieldset">
									<h6 className="form__title">Sign In</h6>
									<div className="row">
										<div className="col-12">
											<input className="form__field" type="text" name="username" placeholder="Username"/>
											<input className="form__field" type="password" name="password" placeholder="Password"/>
										</div>
										<div className="col-12 d-flex align-items-end justify-content-between flex-wrap">
											<label className="form__checkbox-label"><span className="form__label-text">Remember me</span>
												<input className="form__input-checkbox" type="checkbox" name="size-select" value="Size XXL" defaultChecked="true"/><span className="form__checkbox-mask"></span>
											</label><a className="form__link" href="#">I forgot my password</a>
										</div>
										<div className="col-12 text-center">
											<button className="form__submit" type="submit">Sign In</button>
										</div>
										<div className="col-12 text-center"><strong>
											
											<a className="form__link siginButton" href="#!">Sign up</a> 
											
											if you don’t have an account</strong></div>
									</div>
								</div>
							</form>
						</div>
						</div>
						</div>
						<div className="container Register" style={{display:"none"}}>
								<div className="row">
									<div className="col-md-12">
										<form className="form account-form sign-up-form" action="#!">
											<div className="form__fieldset">
												<h6 className="form__title">Sign Up</h6>
												<div className="row">
													<div className="col-12">
														<input className="form__field" type="text" name="fullname" placeholder="Full Name" fdprocessedid="lyvqai"/>
														<input className="form__field" type="email" name="email" placeholder="Email" fdprocessedid="idwx56"/>
														<input className="form__field" type="password" name="password" placeholder="Password" fdprocessedid="x3962u"/>
														<input className="form__field" type="password" name="confirm-password" placeholder="Confirm Password" fdprocessedid="ctlmn"/>
													</div>
													<div className="col-12"><strong>I agree with <a className="form__link" href="#">Term of Services</a></strong></div>
													<div className="col-12 text-center">
														<button className="form__submit" type="submit" fdprocessedid="6bm0tt">Sign Up</button>
													</div>
													<div className="col-12 text-center"><strong><a className="form__link RegisterButton" href="#">Sign in</a> if you have an account</strong></div>
												</div>
											</div>
										</form>
									</div>
								</div>
						</div>
		  </div>
  )
}

export default LoginComponent