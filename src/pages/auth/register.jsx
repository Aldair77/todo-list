import { BaseAuthLayout } from "../../container/components/Auth/Base";
import { RegisterForm } from "../../container/components/Auth/Register";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Register() {
  return (
    <BaseAuthLayout>
      <RegisterForm />

      <div style={styles}>
        <Link href="/auth/login">Estas Registrado? Inicia Sesion Ahora!</Link>
      </div>
    </BaseAuthLayout>
  );
}
