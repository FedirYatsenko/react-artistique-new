import {
  Form,
  Link,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import style from "./login.module.css";
import { authenticate, getAuthData } from "../../services/auth";
import ErrorField from "../../components/ErrorField";

const loader = async () => {
  const { user } = getAuthData();
  if (user) {
    return redirect("/");
  }
  return null;
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  if (!email) {
    return {
      error: { email: "You must provide an email to log in" },
    };
  }

  if (!password) {
    return {
      error: { password: "You must provide a password to log in" },
    };
  }

  try {
    await authenticate(email, password);
  } catch (error) {
    return {
      error: { general: error.message },
    };
  }

  let redirectTo = formData.get("redirectTo");
  return redirect(redirectTo || "/");
};

const Login = () => {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("email") != null;

  let actionData = useActionData();

  return (
    <section>
      <div className={style.container}>
        <h2>Log in</h2>
      <Form method="post">
        <div className={style.formGroup}>
          <input type="hidden" name="redirectTo" value={from} />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e-mail"
            autoComplete="email"
            defaultValue="tester@devine.be"
          />
          <ErrorField data={actionData} field="email" />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            defaultValue="tester"
          />
          <ErrorField data={actionData} field="password" />
        </div>
        <div className={style.buttons_container}>
          <ErrorField data={actionData} field="general" />
          <button
            type="submit"
            disabled={isLoggingIn}
            className={`${style.button} ${style.buttonLog} ${actionData && actionData.error ? style.shake : null}`}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
          <p className={style.small_text}>Dont have an account yet?</p>
          <Link to="/auth/register" className={style.register}>
            <button className={`${style.button} ${style.buttonSign}`}>Sign up</button>
          </Link>
        </div>
      </Form>
      </div>
    </section>
  );
};

Login.action = action;
Login.loader = loader;

export default Login;
