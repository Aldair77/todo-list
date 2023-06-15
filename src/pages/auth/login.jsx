import { BaseAuthLayout } from "../../container/components/Auth/Base";
import { LoginForm } from "../../container/components/Auth/Login/index";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Login() {
  return (
    <BaseAuthLayout>
      <LoginForm />

      <div style={styles}>
        <Link href="/auth/register">Registrate!</Link>
      </div>
    </BaseAuthLayout>
  );
}
