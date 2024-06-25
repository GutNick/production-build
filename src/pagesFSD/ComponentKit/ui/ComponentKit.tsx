import { headers } from 'next/headers'
import styles from './page.module.css'
import { Button } from '@/shared/ui/Button/Button'

export const ComponentKit = ({ params }: { params: { componentKitPath: string[] } }) => {
  const headersList = headers()
  const hostName = headersList.get('x-forwarded-host')
  return (
    <main className={styles.main}>
      <h1>My Page</h1>
      <p>
        Current host is:
        {' '}
        {hostName}
      </p>
      <p>
        Current path is:
        {' '}
        {params.componentKitPath ? params.componentKitPath.join('/') : '/'}
      </p>
      <Button>Button</Button>
    </main>
  )
}
