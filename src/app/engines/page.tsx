import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';

import styles from './Engines.module.css';
import EngineDash from '@/components/EngineDash/EngineDash';

export default async function Dashboard() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/auth?callbackUrl=/engines');
  }

  return (
    <div className={`${styles.enginesContainer} flex`}>
      <EngineDash />
    </div>
  )
};