import {PropTypes} from "prop-types"
const SigninForm = ({
  handleSigninChange,
  handleEmailSignin,
  handleGoogleAuth,
}) => {
  return (
    <form
      action=""
      className="flex flex-col space-y-12 max-w-[21rem] bg-blue-400 rounded-lg px-4 pt-6 pb-10 mx-auto"
    >
      {/* email and password auth */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-100">
            Email
          </label>
          <input
            type="email"
            placeholder="email..."
            name="email"
            className="px-3 py-2 rounded-md "
            onChange={handleSigninChange}
            // value={signupData.email}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="password" className="text-gray-100">
            Password
          </label>
          <input
            type="password"
            placeholder="password..."
            name="password"
            className="px-3 py-2 rounded-md"
            onChange={handleSigninChange}
            // value={signupData.password}
          />
        </div>
      </div>

      {/* buttons */}
      <div className="">
        <button
          type="submit"
          className="w-full py-2 bg-blue-800 text-gray-100 rounded-md shadow-2xl mb-4"
          onClick={handleEmailSignin}
        >
          Signin
        </button>

        {/* google auth */}
        <div className="flex flex-col space-y-2">
          <p className="text-gray-100 text-center">Or sign in with Google</p>
          <button
            className="w-full py-2 bg-blue-800 text-gray-100 rounded-md shadow-2xl"
            onClick={handleGoogleAuth}
          >
            Google
          </button>
        </div>
      </div>
    </form>
  );
};

SigninForm.propTypes = {
  handleSigninChange: PropTypes.func.isRequired,
  handleEmailSignin: PropTypes.func.isRequired,
  handleGoogleAuth: PropTypes.func.isRequired,
};

export default SigninForm;