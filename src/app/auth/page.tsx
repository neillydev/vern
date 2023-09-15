import { AuthForm } from '@/components/Auth/AuthForm';
import styles from './Auth.module.css';


export default function Auth() {

  return (
    <div className={`${styles.authContainer} fixed inset-0 text-white h-full overflow-y-auto`}>
      <div className={styles.outerContainer}>
        <AuthForm />
        <footer className="px-6 py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center space-y-5 text-center">
            <span className="text-sm text-[#B1B2DD]">
              VERN., LLC. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
