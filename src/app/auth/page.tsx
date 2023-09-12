import styles from './Auth.module.css';
import GoogleSVG from '@/../public/google.svg';

export default function Auth() {
  return (
    <div className={`${styles.authContainer} fixed inset-0 text-white h-full overflow-y-auto`}>
      <div className={styles.outerContainer}>
        <a href="/"><img src="https://surfwaves.b-cdn.net/neillydev/vern_rounded.png" alt="" /></a>
        <div className={`${styles.authWrapper} flex flex-col items-center`}>
          <span className={`${styles.authHeader} text-center`}>
            Sign in with
          </span>
          <div className={`${styles.easyAuthWrapper} w-1/2 flex mt-4`}>
            <button className={`${styles.googleAuth} ${styles.authModule} ${styles.authBtn} w-full mt-4 items-center justify-center`}>
              <GoogleSVG className="inline" />
            </button>
          </div>
          <span className={`${styles.authSubheader} relative mt-8 text-center`}>
            or with
          </span>
          <div className={`${styles.inputWrapper} mt-8`}>
            <input type="text" placeholder='example@email.com' className={`${styles.authInput} block w-full appearance-none rounded-lg border border-bluegray-800 bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <button className={`${styles.authModule} ${styles.authBtn} w-full mt-8`}>
              Continue
              <div className={`${styles.authModuleBorder}`} />
            </button>
          </div>
        </div>
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
