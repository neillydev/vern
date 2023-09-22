import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';
import NavPanel from '@/components/Dashboard/NavPanel';

import styles from './Dashboard.module.css';
import Main from '@/components/Dashboard/Main';

export default async function Dashboard() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/auth?callbackUrl=/dashboard');
  }

  return (
    <div className={`${styles.dashContainer} flex`}>
      <Main />
    </div>
  )
};